import localFont from "next/font/local";

export const tstarPro = localFont({
  src: [
    {
      path: "./tstar-pro/light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./tstar-pro/regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./tstar-pro/medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./tstar-pro/bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./tstar-pro/heavy.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-tstar-pro",
});
