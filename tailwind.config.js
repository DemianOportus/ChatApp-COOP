/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        // LIGHT BLUE COLOURS
        myVeryLightBlue: "#88CCEE",
        myLightBlue: "#51a2da",
        myDarkBlue: "#4e7ca5",
        myFooterBlue: "#C2CEE5",

        // GRAY-ISH COLOURS
        myVeryLightBlue2: "#CEDAEF",
        myLightBlueGrayish: "#C2CEE5",
        myWhite: "#EAE8E8",
        myDarkGray: "#2D2D2D",
        myDefaultGrey: "#50545B",

        // RED/PINK/YELLOW/ORANGE
        myPinkReddish: "#CC6677",
        myOrange: "#D55E00",
        myYellow: "#E69F00",

        // GREEN COLOURS
        myDarkGreen: "#117733",
        myLightGreen: "#44AA99",

        myDarkPurple: "#2f1a45",
      },

      fontFamily: {
        raleway: "'Raleway', sans-serif",
        // Raleway 400 Raleway Italic 400
        // Raleway 250 Raleway Italic 250
        // Raleway 275 Raleway Italic 275
        // Raleway 300 Raleway Italic 300
        // Raleway 500 Raleway Italic 500
        // Raleway 600 Raleway Italic 600
        // Raleway 700 Raleway Italic 700
        // Raleway 800 Raleway Italic 800
        // Raleway 900 Raleway Italic 900
        rubik: "'Rubik', sans-serif",
        // Rubik 400 Rubik Italic 400
        // Rubik 300 Rubik Italic 300
        // Rubik 500 Rubik Italic 500
        // Rubik 700 Rubik Italic 700
        // Rubik 900 Rubik Italic 900
        vogue: "'Vogue', sans-serif", // Vogue 400

        futura: "'Futura Std', sans-serif",

        myriad: "'Myriad Pro', sans-serif",
      },
    },
  },
  plugins: [],
};
