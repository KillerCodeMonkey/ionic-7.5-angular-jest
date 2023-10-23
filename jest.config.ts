module.exports = {
  transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs)$)'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom'
}
  