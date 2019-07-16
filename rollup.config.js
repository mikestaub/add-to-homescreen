import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

const input = './src/index.js';

function external(id) {
    return !id.startsWith('.') && !id.startsWith('/');
}

const config = [
    {
        input,
        output: { file: `build/${pkg.name}.js`, format: 'cjs' },
        external,
        plugins: [
            babel({ exclude: /node_modules/ }),
            replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
        ]
    },
    {
        input,
        output: { file: `build/${pkg.name}.min.js`, format: 'cjs' },
        external,
        plugins: [
            babel({ exclude: /node_modules/ }),
            replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
            uglify()
        ]
    }
];

export default config;
