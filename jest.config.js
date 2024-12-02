const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js project
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Adjust the path as necessary
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

// Export the combined configuration
module.exports = createJestConfig(customJestConfig);
