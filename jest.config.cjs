module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'jest-transform-stub',
    '\\.(svg|png|jpg|jpeg)$': 'jest-transform-stub',
  },
};
