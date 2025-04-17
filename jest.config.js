module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    }
  };
  