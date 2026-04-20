/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ef4444', // red-500
                primaryDark: '#dc2626', // red-600
                accent: '#ff3131', // premium red-vibrant
                dark: {
                    900: '#121212',
                    800: '#1e1e1e',
                    700: '#2a2a2a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
