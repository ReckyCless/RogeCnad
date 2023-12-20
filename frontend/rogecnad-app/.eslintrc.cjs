module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'import/prefer-default-export': ['off'],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'': 'never',
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'react/react-in-jsx-scope': 'off',
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: ['state'],
			},
		],
	},
};
