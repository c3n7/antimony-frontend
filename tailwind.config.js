module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "4/5": "80%",
      },
    },
  },
  plugins: [require("daisyui")],
};
