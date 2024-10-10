// jest.config.js
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
          "^axios$": "axios/dist/node/axios.cjs",
          '\\.(css|less)$': '<rootDir>/styleMock.js'
        }
}