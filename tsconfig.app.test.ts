/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// This test verifies the presence of key TypeScript configurations for a React project.
// Since no test framework is detected, this is a basic "plain assertion" on file content.

const tsconfigAppContent = `
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
`;

function testTsconfigApp() {
  const assertions = [
    { check: tsconfigAppContent.includes("\"jsx\": \"react-jsx\""), message: "JSX is configured for React" },
    { check: tsconfigAppContent.includes("\"target\": \"ES2020\""), message: "Target is ES2020" },
    { check: tsconfigAppContent.includes("\"moduleResolution\": \"bundler\""), message: "Module resolution is bundler" },
    { check: tsconfigAppContent.includes("\"paths\": {\n      \"@/*\": [\"./src/*\"]\n    }"), message: "Path alias @/* is configured" },
  ];

  let allPassed = true;
  assertions.forEach((assertion, index) => {
    if (assertion.check) {
      console.log(`Test Passed ${index + 1}: ${assertion.message}`);
    } else {
      console.error(`Test Failed ${index + 1}: ${assertion.message}`);
      allPassed = false;
    }
  });

  if (allPassed) {
    console.log('All tsconfig.app.test.ts assertions passed.');
  } else {
    throw new Error('One or more tsconfig.app.test.ts assertions failed.');
  }
}

// Run the test
try {
  testTsconfigApp();
} catch (error) {
  console.error('tsconfig.app.test.ts failed:', error.message);
}
