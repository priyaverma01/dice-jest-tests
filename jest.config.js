export default{
    testEnvironment:"jsdom",
    setupFilesAfterEnv:['./jest.setup.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|scss)$': 'identity-obj-proxy'
      },
      transform: {
        '^.+\\.[jt]sx?$': 'babel-jest'
      }
};

