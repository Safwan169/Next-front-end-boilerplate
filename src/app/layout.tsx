import "./globals.css";
import Providers from "@/providers/RootProviders";
import { defaultSEO } from "@/config/seoConfig";
import { Toaster } from "sonner";

export const metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
import { toast } from "sonner";

export const showCustomToast = () => {
  const id = toast(
    <div className="flex justify-between items-start">
      <div>
        <h4 className="font-semibold text-sm">Event has been created</h4>
        <p className="text-xs text-gray-600">
          Sunday, December 03, 2023 at 9:00 AM
        </p>
      </div>
      <button
        onClick={() => toast.dismiss(id)} // 👈 dismiss() দিয়ে toast বন্ধ
        className="ml-4 text-gray-400 hover:text-gray-700"
      >
        ✕
      </button>
    </div>,
    {
      position: "top-right",
      duration: 4000,
    }
  );
};
