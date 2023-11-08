import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    // '**/*.{js,jsx}',
    // '!**/node_modules/**',
    // '!**/vendor/**',
    '**/src/components/**'
  ],
  errorOnDeprecated: true,

  //A set of global variables that need to be available in all test environments.
  //The following would create a global __DEV__ variable set to true in all test environments:
  globals: {
    __DEV__: true,
  },
  // Prettier version 3 is not supported! Check if it changed!
  prettierPath: null
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async

export default createJestConfig(config)