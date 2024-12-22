import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js', 
  output: {
    path: path.resolve('dist'), 
    filename: 'bundle.js', 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
    }),
  ],
  mode: 'development', 
};