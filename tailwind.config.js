module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "4/5": "80%",
        "9/12": "75%",
        "10/12": "83%",
      },
    },
  },
  plugins: [require("daisyui")],
};
