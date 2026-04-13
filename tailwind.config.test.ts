// tailwind.config.test.ts
const tailwindConfigContent = `import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					'primary-foreground': "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					'accent-foreground': "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0"
					},
					to: {
						height: "var(--radix-accordion-content-height)"
					}
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)"
					},
					to: {
						height: "0"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;`;

function testTailwindConfig() {
    console.log("Running tests for tailwind.config.ts");

    // Check for darkMode
    if (!tailwindConfigContent.includes(`darkMode: ["class"]`)) {
        throw new Error("tailwind.config.ts: 'darkMode' property not found or incorrect.");
    }

    // Check for content paths
    if (!tailwindConfigContent.includes(`"./src/**/*.{ts,tsx}"`)) {
        throw new Error("tailwind.config.ts: 'content' paths do not include src directory.");
    }

    // Check for theme extend colors (a sample)
    if (!tailwindConfigContent.includes(`border: "hsl(var(--border))"`)) {
        throw new Error("tailwind.config.ts: Missing 'border' color in theme extend.");
    }

    // Check for theme extend borderRadius (a sample)
    if (!tailwindConfigContent.includes(`lg: "var(--radius)"`)) {
        throw new Error("tailwind.config.ts: Missing 'lg' borderRadius in theme extend.");
    }

    // Check for plugins
    if (!tailwindConfigContent.includes(`require("tailwindcss-animate")`) ||
        !tailwindConfigContent.includes(`require("@tailwindcss/typography")`)) {
        throw new Error("tailwind.config.ts: Missing required plugins.");
    }

    console.log("tailwind.config.ts tests passed.");
}

// Execute test
try {
    testTailwindConfig();
    console.log("tailwind.config.ts tests passed successfully!");
} catch (error) {
    console.error("Test failed:", error.message);
}
