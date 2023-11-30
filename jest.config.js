const nextJest = require('next/jest')

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

// Any custom config you want to pass to Jest
const customJestConfig = {
    rootDir: './',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1'
    },
    moduleDirectories: ['<rootDir>/node_modules'],
    testEnvironment: 'jsdom',
    collectCoverageFrom: ['src/**'],
    collectCoverage: true
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)