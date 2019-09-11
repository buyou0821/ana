import webpack from 'webpack';
import { getProjectPath } from '../helper';

const config: webpack.Configuration = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  entry: {
    index: getProjectPath('demo', 'index')
  },
  output: {
    path: getProjectPath('dist')
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: false,
          presets: ['@babel/preset-env'],
          plugins: [
            [
              '@babel/plugin-transform-react-jsx',
              { pragma: 'React.createElement' }
            ]
          ]
        }
      }
    ]
  }
};

export default config;
