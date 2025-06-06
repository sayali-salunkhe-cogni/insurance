module.exports = {
  preset: 'ts-jest', // Use ts-jest for TypeScript support
  testEnvironment: 'node', // Set the test environment to Node.js
  roots: ['<rootDir>/src'], // Specify the root directory for tests
  moduleFileExtensions: ['ts', 'js'], // Allow TypeScript and JavaScript files
  transform: {
    '^.+\\.ts$': 'ts-jest', // Transform TypeScript files using ts-jest
  },
};