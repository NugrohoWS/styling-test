import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        trebuchet: ['"Trebuchet MS"', ...fontFamily.sans],
        tstarPro: ["var(--font-tstar-pro)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontSize: {
      h1: ["52px", {
          lineHeight: "64px",
          letterSpacing: "0.2px",
        },
      ],
      h2: ["42px", {
          lineHeight: "56px",
          letterSpacing: "0.2px",
        },
      ],
      h3: ["36px", {
          lineHeight: "48px",
          letterSpacing: "0.2px",
        },
      ],
      h4: ["24px", {
          lineHeight: "32px",
          letterSpacing: "0.2px",
        },
      ],
      h5: ["20px", {
          lineHeight: "28px",
          letterSpacing: "0.2px",
        },
      ],
      h6: ["18px", {
          lineHeight: "24px",
          letterSpacing: "0.2px",
        },
      ],
      body: ["16px", {
          lineHeight: "24px",
          letterSpacing: "0.2px",
        },
      ],
      body2: ["14px", {
          lineHeight: "20px",
          letterSpacing: "0.2px",
        },
      ],
      link: ["16px", {
          lineHeight: "24px",
          letterSpacing: "0.2px",
          fontWeight: "700",
        },
      ],
      section: ["14px", {
          lineHeight: "20px",
          letterSpacing: "1px",
          fontWeight: "400",
        },
      ],
      caption: ["13px", {
          lineHeight: "16px",
          fontWeight: "400",
        },
      ],
    },
  },
  plugins: [],
} satisfies Config;
