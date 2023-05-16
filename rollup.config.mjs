import typescript from '@rollup/plugin-typescript'

export default {
	input: 'src/React2Pdf.tsx',
	output: [{
		file: 'build/React2Pdf.js',
		format: 'es'
	}, {
		file: 'build/React2Pdf.cjs',
		format: 'cjs'
	}],
	plugins: [typescript()]
}
