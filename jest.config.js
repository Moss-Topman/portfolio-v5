const nextJest = require('next/jest.js');
const createJestConfig = nextJest({ dir: './' });
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ["<rootDir>/tests/e2e/"], // Ignore E2E for Jest
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
module.exports = createJestConfig(customJestConfig);