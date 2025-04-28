module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        omnifooddevalto: "var(--omnifooddevalto)",
        omnifooddevboulder: "var(--omnifooddevboulder)",
        omnifooddevemperor: "var(--omnifooddevemperor)",
        "rodbezinathens-gray": "var(--rodbezinathens-gray)",
        rodbezinbittersweet: "var(--rodbezinbittersweet)",
        rodbezinblack: "var(--rodbezinblack)",
        "rodbezinblack-15": "var(--rodbezinblack-15)",
        "rodbezindove-gray": "var(--rodbezindove-gray)",
        "rodbezinmine-shaft": "var(--rodbezinmine-shaft)",
        "rodbezinmountain-meadow": "var(--rodbezinmountain-meadow)",
        rodbezinshark: "var(--rodbezinshark)",
        "rodbezintorch-red": "var(--rodbezintorch-red)",
        "secondary-1": "var(--secondary-1)",
        "secondary-3": "var(--secondary-3)",
        "wwwolacabscomathens-gray": "var(--wwwolacabscomathens-gray)",
        wwwolacabscomblack: "var(--wwwolacabscomblack)",
        "wwwolacabscomblack-20": "var(--wwwolacabscomblack-20)",
        "wwwolacabscomblack-70": "var(--wwwolacabscomblack-70)",
        "wwwolacabscomburnt-sienna": "var(--wwwolacabscomburnt-sienna)",
        "wwwolacabscomdove-gray": "var(--wwwolacabscomdove-gray)",
        "wwwolacabscommine-shaft": "var(--wwwolacabscommine-shaft)",
        wwwolacabscomwhite: "var(--wwwolacabscomwhite)",
        "wwwubercomblack-4": "var(--wwwubercomblack-4)",
        wwwubercomconcrete: "var(--wwwubercomconcrete)",
        wwwubercommercury: "var(--wwwubercommercury)",
        "wwwubercommine-shaft": "var(--wwwubercommine-shaft)",
        wwwubercomscorpion: "var(--wwwubercomscorpion)",
        "wwwubercomsilver-chalice": "var(--wwwubercomsilver-chalice)",
        wwwubercomtundora: "var(--wwwubercomtundora)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "omnifood-dev-rubik-medium":
          "var(--omnifood-dev-rubik-medium-font-family)",
        "omnifood-dev-rubik-regular":
          "var(--omnifood-dev-rubik-regular-font-family)",
        "omnifood-dev-semantic-heading-3":
          "var(--omnifood-dev-semantic-heading-3-font-family)",
        "rodbez-in-segoe-UI-bold": "var(--rodbez-in-segoe-UI-bold-font-family)",
        "rodbez-in-segoe-UI-bold-underline":
          "var(--rodbez-in-segoe-UI-bold-underline-font-family)",
        "rodbez-in-segoe-UI-regular":
          "var(--rodbez-in-segoe-UI-regular-font-family)",
        "rodbez-in-semantic-heading-2":
          "var(--rodbez-in-semantic-heading-2-font-family)",
        "rodbez-in-semantic-heading-2-underline":
          "var(--rodbez-in-semantic-heading-2-underline-font-family)",
        "www-olacabs-com-semantic-button":
          "var(--www-olacabs-com-semantic-button-font-family)",
        "www-olacabs-com-semantic-input":
          "var(--www-olacabs-com-semantic-input-font-family)",
        "www-uber-com-semantic-heading-1":
          "var(--www-uber-com-semantic-heading-1-font-family)",
        "www-uber-com-semantic-heading-3":
          "var(--www-uber-com-semantic-heading-3-font-family)",
        "www-uber-com-semantic-input":
          "var(--www-uber-com-semantic-input-font-family)",
        "www-uber-com-semantic-item":
          "var(--www-uber-com-semantic-item-font-family)",
        "www-uber-com-uber-move-text-medium":
          "var(--www-uber-com-uber-move-text-medium-font-family)",
        "www-uber-com-uber-move-text-regular":
          "var(--www-uber-com-uber-move-text-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "shadow-1": "var(--shadow-1)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
