/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./node_modules/flowbite/**/*.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'primary': '#FFE6AD',
      'secondary': '#6C63FF',
      'heading-text':'#383838',
      'body-text': '#545454',
      'white-text': '#FFFFFF',
      'bgcolor-one': '#FED29C',
      'bgcolor-two': '#FFEAD0',
      'bgcolor-three': '#FFF9F1',
      'bgcolor-four': '#FFC3C6',
      'bgcolor-five': '#EE8388',
      'bgcolor-six': '#FFF1F2',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
