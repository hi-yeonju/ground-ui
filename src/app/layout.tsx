import type { Metadata } from "next";
import "@/styles/pretendard.css";
import "@/styles/globals.css";
import "@/styles/reset.css";
import CustomProvider from "@/provider/CustomProvider";

export const metadata: Metadata = {
  title: "GROUND",
  description: "Ground ui",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
  params: { session, ...params},
}: Readonly<{
  children: React.ReactNode;
  params:any
}>) {
  return (
    <html lang="ko">
      <body>
        <CustomProvider session={session}>
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
