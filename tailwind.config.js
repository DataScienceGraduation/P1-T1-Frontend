/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#3B42DC',
                secondary: '#F9F9F9',
            },
            fontFamily: {
                heading: ['Heming'],
                body: ['Violet Sans'],
                grotesk: ['Grotesk'],
            },
            boxShadow: {
                text: '0 2px 4px rgba(0, 0, 0, 0.2)',
            },
            animation: {
                marquee: 'marquee 10s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    variants: {},
    // eslint-disable-next-line global-require
    plugins: [require('@tailwindcss/forms')],
};
