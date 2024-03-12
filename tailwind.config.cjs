const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
            fontFamily: {
                'dm-sans': ['DM Sans', 'sans-serif'],
              }
        },
	},

	plugins: [require("daisyui")],
    //darkMode: 'selector',
    darkMode: false,
};

module.exports = config;
