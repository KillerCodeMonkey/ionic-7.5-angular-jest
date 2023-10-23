module.exports = {
  transformIgnorePatterns: ['node_modules/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/)'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/src/test.ts']
}
  