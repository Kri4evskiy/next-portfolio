// module.exports = {
//   // Type check TypeScript files
//   '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

//   // Lint & Prettify TS and JS files
//   '**/*.(ts|tsx|js|jsx)': filenames => [
//     `yarn eslint --fix ${filenames.join(' ')}`,
//     `yarn prettier --write ${filenames.join(' ')}`
//   ],

//   // Prettify only Markdown and JSON files
//   '**/*.(md|json)': filenames => `yarn prettier --write ${filenames.join(' ')}`
// }

const path = require('path')

const buildEslintCommand = filenames =>
	`next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

const buildPrettierCommand = filenames =>
	`yarn prettier --write ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
	'*.{md|json}': [buildPrettierCommand]
}
