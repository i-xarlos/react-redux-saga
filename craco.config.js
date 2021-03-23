const CracoEsbuildPlugin = require('craco-esbuild');
const webpack = require('webpack');
const Dotenv = require('dotenv-cra');

//process.env.NODE_ENV = process.env.NODE_ENV || 'development';
Dotenv.config();

const activeEnv = process.env.NODE_ENV || 'development';

console.log('\n------------ *** ------------');
console.info(`Transpiler: Esbuild and @craco/craco'`);
console.info(`Using environment config: '${activeEnv}'`);
console.info('URL_API: ', process.env.URL_API);
console.log('------------ *** ------------\n');

module.exports = {
  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        enableSvgr: true, // Optional.
        esbuildLoaderOptions: {
          loader: 'jsx',
          target: 'es2020',
        },
      },
    },
  ],
};
