import { NextResponse } from "next/server";
import { swaggerSpec } from "@/api/swagger-config";

export async function GET() {
  return NextResponse.json(swaggerSpec);
}
