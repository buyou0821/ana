import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import base from './webpack.base';
import { getProjectPath } from '../helper';

const config: webpack.Configuration = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ana',
      template: getProjectPath('demo', 'index.html')
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8001,
  }
};

export default webpackMerge(base, config);
