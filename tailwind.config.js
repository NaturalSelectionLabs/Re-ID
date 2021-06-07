module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: '#5c65f4',
            secondary: '#f55d66',
            white: '#fff',
            black: '#282828',
            gray: {
                text: '#3c3c43',
                bg: '#f3f3f3',
                outline: '#c5c5c7',
            },
            success: '#b2f55d',
            danger: '#b01a0a',
            warning: '#f5a05d',
        },
        borderRadius: {
            sm: '4px',
            DEFAULT: '6px',
            lg: '10px',
        },

        borderWidth: {
            DEFAULT: '0.5px',
            1: '1px',
        },
        dividerWidth: {
            DEFAULT: '0.5px',
        },
        dropShadow: {
            DEFAULT: '0px 1px 4px rgba(0, 0, 0, 0.2)',
        },
        backdropBlur: {
            DEFAULT: '4px',
        },
        extend: {
            opacity: {
                10: '0.1',
                15: '0.15',
                30: '0.3',
                35: '0.35',
                43: '0.43',
                56: '0.56',
                60: '0.6',
            },
            spacing: {
                //2px
                //4px
                //6px
                //8px
                //10px
                //16px
                //20px
                //32px
                //40px
            },
            width: {
                2: '0.5rem', //8px, toggle switch button width
                5: '1.25rem', //20px, toggle switch handle width
                8: '2rem', //32px, popup.html [...] button width,
                21: '5.25rem', //84px, raw rss3 codeblock tooltip width
                26: '6.5rem', //104px, popup.html selected menu item width
                27: '6.75rem', //108px, small button width; popup.html collapse [...] menu width
                45: '11.25rem', //180px, popup.html key text width (full view)
                55: '13.75rem', //220px, popup.html main button & input width
                61: '15.25rem', //245px, raw rss3 tooltip width
                65: '16.25rem', //260px, popup.html width
                89: '22.25rem', //356px, options.html main button width
                120: '30rem', //480px, options.html extended button width
                160: '40rem', //640px, raw rss3 codeblock input width
                180: '45rem', //720px, options.html input & content width
            },
            height: {
                1: '0.25rem', //4px, toggle switch handle height
                2: '0.5rem', //8px, toggle switch button height
                4: '1rem', //16px, popup.html [...] button height,
                5: '1.24rem', //20px, popup.html selected menu item height
                6: '1.5rem', //24px, raw rss3 codeblock tooltip height
                7: '1.75rem', //28px, popup.html & options.html small button height
                9: '2.25rem', //36px, popup.html main button height
                12: '3rem', //48px, popup.html key container height
                18: '4.5rem', //72px, options.html main button & single line input height
                19: '4.75rem', //76px, raw rss3 tooltip height
                23: '5.75rem', //92px, popup.html bio input textarea height
                24: '6rem', //96px, popup.html collapse [...] menu height
                45: '11.25rem', //180px, options.html bio input textarea height
                105: '26.25rem', //420px, popup.html height
            },
            transitionTimeFunction: {
                'in-out-expo': 'cubic-bezier(.5, -.5, .5, 1.5)',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        },
    },
    plugins: [],
};
