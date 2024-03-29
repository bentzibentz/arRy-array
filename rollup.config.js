import clean from 'rollup-plugin-clean';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-clean';
import cleanup from 'rollup-plugin-cleanup';
import {terser} from 'rollup-plugin-terser';

const pkg = require('./package.json');

const now = new Date();
const banner = () => {
    return '/*!\n' +
        ' * ' + (pkg.title || pkg.name) + ' v' + pkg.version + '\n' +
        ' * Copyright (c) 2019-' + now.getFullYear() + ' ' + pkg.author.name + '\n' +
        ' * License: ' + pkg.license + '\n' +
        ' */';
};

const cleanPlugin = clean();
const resolvePlugin = resolve();
const babelPlugin = babel({
    babelrc: false,
    presets: [['@babel/preset-env', {modules: false}]]
});
const cleanupPlugin = cleanup({
    comments: 'some'
});

export default [
    {
        input: 'src/index.js',
        output: {
            banner: banner(),
            file: pkg.module,
            format: 'es'
        },
        plugins: [
            cleanPlugin,
            resolvePlugin,
            babelPlugin,
            cleanupPlugin
        ]
    },
    {
        input: 'src/index.js',
        output: {
            banner: banner(),
            file: pkg.main,
            format: 'umd',
            name: 'index'
        },
        plugins: [
            cleanPlugin,
            resolvePlugin,
            babelPlugin,
            cleanupPlugin
        ]
    },
    {
        input: 'src/index.js',
        output: {
            banner: banner(),
            file: pkg.test,
            format: 'es',
            name: 'index'
        },
        plugins: [
            cleanPlugin,
            resolvePlugin,
            babelPlugin,
            cleanupPlugin
        ]
    },
    {
        input: 'src/index.js',
        output: {
            banner: banner(),
            file: pkg.browser,
            format: 'umd',
            name: 'index'
        },
        plugins: [
            cleanPlugin,
            resolvePlugin,
            babelPlugin,
            cleanupPlugin,
            terser({
                output: {
                    comments: 'all'
                }
            })
        ]
    }
];
