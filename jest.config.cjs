/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95
    }
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }]
  },
  testMatch: undefined,
  testRegex: '(/__tests__/.*(\\.|/)(tests|test))\\.tsx?$',
  cacheDirectory: '.jest/cache',
  transformIgnorePatterns: [],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
};

// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   setupFiles: [
//     './jest.setup.cjs'
//   ],
// };
