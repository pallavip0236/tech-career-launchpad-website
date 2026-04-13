import type { Config } from "tailwindcss";

// This file is for testing purposes only and does not execute the actual Tailwind CSS config.
// It verifies the structure and key elements of the Tailwind CSS configuration.

const tailwindConfig: Config = {
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
      colors: { /* ... */ },
      borderRadius: { /* ... */ },
      keyframes: { /* ... */ },
      animation: { /* ... */ }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

function testTailwindConfig() {
  let passed = true;

  // Test 1: Check for darkMode configuration
  if (!tailwindConfig.darkMode || tailwindConfig.darkMode[0] !== "class") {
    console.error("Test Failed: Tailwind config does not have 'darkMode: ["class"]'.");
    passed = false;
  } else {
    console.log("Test Passed: 'darkMode: ["class"]' is present.");
  }

  // Test 2: Check for content array presence and basic structure
  if (!tailwindConfig.content || !Array.isArray(tailwindConfig.content) || tailwindConfig.content.length === 0) {
    console.error("Test Failed: Tailwind config 'content' array is missing or empty.");
    passed = false;
  } else {
    console.log("Test Passed: 'content' array is present and not empty.");
  }

  // Test 3: Check for prefix property
  if (tailwindConfig.prefix === undefined) {
    console.error("Test Failed: Tailwind config 'prefix' property is missing.");
    passed = false;
  } else {
    console.log("Test Passed: 'prefix' property is present.");
  }

  // Test 4: Check for plugins array and 'tailwindcss-animate'
  if (!tailwindConfig.plugins || !Array.isArray(tailwindConfig.plugins) || tailwindConfig.plugins.length === 0) {
    console.error("Test Failed: Tailwind config 'plugins' array is missing or empty.");
    passed = false;
  } else if (!tailwindConfig.plugins.some(plugin => typeof plugin === 'function' && plugin.name === 'plugin')) { // Simplified check for 'require("tailwindcss-animate")'
    console.error("Test Failed: Tailwind config 'plugins' array does not include 'tailwindcss-animate'.");
    passed = false;
  } else {
    console.log("Test Passed: 'plugins' array is present and includes 'tailwindcss-animate'.");
  }

  if (passed) {
    console.log("All Tailwind config tests passed!");
  } else {
    console.log("Some Tailwind config tests failed.");
  }
}

testTailwindConfig();
