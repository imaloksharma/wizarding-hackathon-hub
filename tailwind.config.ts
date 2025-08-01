import type { Config } from "tailwindcss";

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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-magical': 'var(--gradient-magical)',
				'gradient-starry': 'var(--gradient-starry)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'magical': 'var(--shadow-magical)',
				'glow': 'var(--shadow-glow)',
				'card-magical': 'var(--shadow-card)'
			},
			transitionTimingFunction: {
				'magical': 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'sparkle': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-100px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'magical-pulse': {
					'0%, 100%': { boxShadow: 'var(--shadow-magical)' },
					'50%': { boxShadow: 'var(--shadow-glow)' }
				},
				'magical-shimmer': {
					'0%, 100%': { filter: 'drop-shadow(0 0 10px hsl(48 96% 65% / 0.5)) hue-rotate(0deg)' },
					'50%': { filter: 'drop-shadow(0 0 20px hsl(258 90% 66% / 0.7)) hue-rotate(60deg)' }
				},
				'lightning-strike': {
					'0%': { left: '-100%' },
					'100%': { left: '100%' }
				},
				'levitate': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(5deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'sparkle': 'sparkle 20s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'magical-pulse': 'magical-pulse 2s ease-in-out infinite',
				'magical-shimmer': 'magical-shimmer 3s ease-in-out infinite',
				'lightning-strike': 'lightning-strike 2s infinite',
				'levitate': 'levitate 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
