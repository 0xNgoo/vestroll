"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Device {
  id: string;
  name: string;
  type: "desktop" | "mobile" | "tablet";
  os: string;
  browser: string;
  location: string;
  lastActive: string;
  currentDevice: boolean;
}

type AppLanguage = "en" | "es" | "fr" | "de" | "ja";
type AppearanceMode = "light" | "dark" | "system";

export default function PreferencesPage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<AppLanguage>("en");
  const [selectedAppearance, setSelectedAppearance] =
    useState<AppearanceMode>("system");
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState<string | null>(null);

  const languages: { code: AppLanguage; name: string; nativeName: string }[] = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "es", name: "Spanish", nativeName: "Español" },
    { code: "fr", name: "French", nativeName: "Français" },
    { code: "de", name: "German", nativeName: "Deutsch" },
    { code: "ja", name: "Japanese", nativeName: "日本語" },
  ];

  const devices: Device[] = [
    {
      id: "1",
      name: "MacBook Pro",
      type: "desktop",
      os: "macOS 14.5",
      browser: "Chrome 125",
      location: "San Francisco, US",
      lastActive: "Now",
      currentDevice: true,
    },
    {
      id: "2",
      name: "iPhone 15 Pro",
      type: "mobile",
      os: "iOS 17.5",
      browser: "Safari",
      location: "San Francisco, US",
      lastActive: "2 hours ago",
      currentDevice: false,
    },
    {
      id: "3",
      name: "Windows PC",
      type: "desktop",
      os: "Windows 11",
      browser: "Firefox 125",
      location: "New York, US",
      lastActive: "3 days ago",
      currentDevice: false,
    },
    {
      id: "4",
      name: "iPad Pro",
      type: "tablet",
      os: "iPadOS 17",
      browser: "Safari",
      location: "London, UK",
      lastActive: "1 week ago",
      currentDevice: false,
    },
  ];

  const handleGoBack = () => {
    router.back();
  };

  const handleLanguageSelect = (language: AppLanguage) => {
    setSelectedLanguage(language);
    setShowLanguageModal(false);
    // Here you would typically save the language preference to your backend
    console.log("Language changed to:", language);
  };

  const handleAppearanceSelect = (mode: AppearanceMode) => {
    setSelectedAppearance(mode);
    // Here you would typically save the appearance preference and apply it
    console.log("Appearance changed to:", mode);
  };

  const handleRemoveDevice = (deviceId: string) => {
    // Here you would typically make an API call to remove the device
    console.log("Removing device:", deviceId);
    setShowRemoveModal(null);
  };

  const getDeviceIcon = (type: Device["type"]) => {
    switch (type) {
      case "desktop":
        return "/icons/desktop.svg";
      case "mobile":
        return "/icons/smartphone.svg";
      case "tablet":
        return "/icons/tablet.svg";
      default:
        return "/icons/device.svg";
    }
  };

  const getAppearanceIcon = (mode: AppearanceMode) => {
    switch (mode) {
      case "light":
        return "/icons/sun.svg";
      case "dark":
        return "/icons/moon.svg";
      case "system":
        return "/icons/monitor.svg";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Section 1: App Language */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                App Language
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Choose your preferred language for the application interface
              </p>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">
                        {selectedLanguage.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {
                          languages.find(
                            (lang) => lang.code === selectedLanguage
                          )?.name
                        }
                      </p>
                      <p className="text-sm text-gray-600">
                        {
                          languages.find(
                            (lang) => lang.code === selectedLanguage
                          )?.nativeName
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => setShowLanguageModal(true)}
                  className="bg-[#5E2A8C] hover:bg-[#4A1F73] text-white px-6 py-2"
                >
                  Change
                </Button>
              </div>
            </div>
          </div>

          {/* Section 2: Appearance */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Appearance
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Choose how the app looks on your device
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(["light", "dark", "system"] as AppearanceMode[]).map(
                  (mode) => (
                    <div
                      key={mode}
                      onClick={() => handleAppearanceSelect(mode)}
                      className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
                        selectedAppearance === mode
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`p-2 rounded-lg ${
                            selectedAppearance === mode
                              ? "bg-purple-100"
                              : "bg-gray-100"
                          }`}
                        >
                          {/* Placeholder for icon - replace with actual icons */}
                          <div className="w-6 h-6 text-gray-600">
                            {mode.charAt(0).toUpperCase() +
                              mode.slice(1).charAt(0)}
                          </div>
                        </div>
                        <div className="font-medium text-gray-900 capitalize">
                          {mode}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {mode === "light" && "Always use light mode"}
                        {mode === "dark" && "Always use dark mode"}
                        {mode === "system" && "Sync with system settings"}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Section 3: Device Management */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  Device Management
                </h2>
                <span className="text-sm text-gray-500">
                  {devices.length} device{devices.length !== 1 ? "s" : ""}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Manage all devices that have logged into your account
              </p>

              <div className="space-y-4">
                {devices.map((device) => (
                  <div
                    key={device.id}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-lg ${
                            device.currentDevice
                              ? "bg-purple-100"
                              : "bg-gray-100"
                          }`}
                        >
                          {/* Placeholder for device icon - replace with actual icons */}
                          <div className="w-6 h-6 text-gray-600">
                            {device.type.charAt(0).toUpperCase()}
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900">
                              {device.name}
                            </span>
                            {device.currentDevice && (
                              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                                Current Device
                              </span>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-600 mb-3">
                            <div>
                              <span className="font-medium">OS:</span>{" "}
                              {device.os}
                            </div>
                            <div>
                              <span className="font-medium">Browser:</span>{" "}
                              {device.browser}
                            </div>
                            <div>
                              <span className="font-medium">Location:</span>{" "}
                              {device.location}
                            </div>
                            <div>
                              <span className="font-medium">Last Active:</span>{" "}
                              {device.lastActive}
                            </div>
                          </div>
                        </div>
                      </div>

                      {!device.currentDevice && (
                        <button
                          onClick={() => setShowRemoveModal(device.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium px-3 py-1 hover:bg-red-50 rounded transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Devices are automatically added when you log in from a new
                    device or browser
                  </p>
                  <button
                    onClick={() => {
                      // Handle sign out from all devices
                      const nonCurrentDevices = devices.filter(
                        (d) => !d.currentDevice
                      );
                      console.log(
                        "Signing out from",
                        nonCurrentDevices.length,
                        "devices"
                      );
                    }}
                    className="text-sm text-red-600 hover:text-red-700 font-medium px-4 py-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Sign out from all devices
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Select Language
                </h3>
                <button
                  onClick={() => setShowLanguageModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                {languages.map((language) => (
                  <div
                    key={language.code}
                    onClick={() => handleLanguageSelect(language.code)}
                    className={`cursor-pointer p-4 rounded-lg border transition-all ${
                      selectedLanguage === language.code
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          {language.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {language.nativeName}
                        </p>
                      </div>
                      {selectedLanguage === language.code && (
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button
                  onClick={() => setShowLanguageModal(false)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Remove Device Confirmation Modal */}
      {showRemoveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Remove Device
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to remove this device? This will sign it
                out from your account.
              </p>

              <div className="flex gap-3">
                <Button
                  onClick={() => setShowRemoveModal(null)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleRemoveDevice(showRemoveModal)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  Remove Device
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
