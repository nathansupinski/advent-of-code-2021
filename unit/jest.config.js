module.exports = {
  verbose: false,
  reporters: ['default', ['jest-junit', { addFileAttribute: 'true' }]],
  roots: ['<rootDir>/src', '<rootDir>/unit'],
  rootDir: '../',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFiles: ['<rootDir>/unit/jest.setup.js'],
  testEnvironment: 'node',
  automock: false,
  clearMocks: true,
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  preset: 'ts-jest/presets/js-with-ts',
};
