const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    popup: './src/popup.ts',
    content: './src/content.ts',
    background: './src/background.ts',
    sidepanel: './src/sidepanel.ts',
    trusteeInit: './src/trusteeInit.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
    alias: {
      '@shared': path.resolve(__dirname, '../shared')
    }
  },
  optimization: {
    minimize: false // Disable minimization for easier debugging
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/popup.html', to: 'popup.html' },
        { from: 'src/sidepanel.html', to: 'sidepanel.html' },
        { from: 'src/sidepanel.css', to: 'sidepanel.css' },
        { from: 'src/popup.css', to: 'popup.css' },
        { from: 'src/manifest.json', to: 'manifest.json' }
      ],
    }),
  ]
}; 