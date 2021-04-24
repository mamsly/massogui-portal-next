module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    transform: {
        '.+\\.(css|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    rootDir: './src',
    modulePaths: [`src`],
    globals: {
        'ts-jest': {
            isolatedModules: true,
            tsconfig: 'tsconfig.jest.json',
        },
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    moduleDirectories: ['src', 'node_modules'],
    transformIgnorePatterns: ['/node_modules/(?!@optisantis).+\\.js$'],
};
