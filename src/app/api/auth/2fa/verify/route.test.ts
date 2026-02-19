import { describe, it, expect, beforeEach, vi } from "vitest";
import { POST } from "./route";
import { NextRequest } from "next/server";
import { TwoFactorService } from "@/api/services/two-factor.service";
import { AuthUtils } from "@/api/utils/auth";
import { EmailService } from "@/api/services/email.service";
import { ForbiddenError } from "@/api/utils/errors";
import { db } from "@/api/db";

vi.mock("@/api/services/two-factor.service");
vi.mock("@/api/utils/auth");
vi.mock("@/api/services/email.service");
vi.mock("@/api/db", () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
  },
}));

describe("POST /api/auth/2fa/verify", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createMockRequest = (body: any): NextRequest => {
    return {
      json: async () => body,
      clone: () => ({
        json: async () => body,
      }),
      headers: new Headers(),
    } as unknown as NextRequest;
  };

  it("should successfully verify 2FA and return tokens", async () => {
    const mockUser = {
      id: "u1",
      email: "t@e.com",
      firstName: "F",
      lastName: "L",
      status: "active",
      twoFactorEnabled: true,
    };

    vi.mocked(TwoFactorService.verifyTwoFactor).mockResolvedValue({
      method: "totp",
    });
    vi.mocked(db.select as any).mockReturnValue({
      from: vi.fn().mockReturnValue({
        where: vi.fn().mockResolvedValue([mockUser]),
      }),
    });
    vi.mocked(AuthUtils.generateToken).mockReturnValue("mock-token");

    const req = createMockRequest({
      userId: "00000000-0000-0000-0000-000000000000",
      totpCode: "123456",
    });

    const response = await POST(req);

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.data.accessToken).toBe("mock-token");
    expect(data.data.user.email).toBe("t@e.com");
  });

  it("should return 400 for validation failure", async () => {
    const req = createMockRequest({
      userId: "invalid-uuid",
    });

    const response = await POST(req);

    expect(response.status).toBe(400);
  });

  it("should return 403 and send email when account is locked", async () => {
    const mockUser = {
      id: "u1",
      email: "t@e.com",
      firstName: "F",
      failedTwoFactorAttempts: 5,
    };

    vi.mocked(TwoFactorService.verifyTwoFactor).mockRejectedValue(
      new ForbiddenError("Account locked due to failed 2FA attempts."),
    );
    vi.mocked(db.select as any).mockReturnValue({
      from: vi.fn().mockReturnValue({
        where: vi.fn().mockResolvedValue([mockUser]),
      }),
    });

    const req = createMockRequest({
      userId: "00000000-0000-0000-0000-000000000000",
      totpCode: "000000",
    });

    const response = await POST(req);

    expect(response.status).toBe(403);
    expect(EmailService.sendFailedTwoFactorAttemptEmail).toBeCalled();
    expect(EmailService.sendAccountLockedEmail).toBeCalledWith("t@e.com", "F");
  });

  it("should return 404 if user not found after verification", async () => {
    vi.mocked(TwoFactorService.verifyTwoFactor).mockResolvedValue({
      method: "totp",
    });
    vi.mocked(db.select as any).mockReturnValue({
      from: vi.fn().mockReturnValue({
        where: vi.fn().mockResolvedValue([]),
      }),
    });

    const req = createMockRequest({
      userId: "00000000-0000-0000-0000-000000000000",
      totpCode: "123456",
    });

    const response = await POST(req);

    expect(response.status).toBe(404);
  });
});
