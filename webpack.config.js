const path = require("path");
const { DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin }  = require("vue-loader");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = env => {

  return {
    context: path.resolve(process.cwd(), "src"),
    devtool: env.production === true ? false : "eval-cheap-source-map",
    mode: env.production === true ? "production" : "development",
    performance: {
      hints: false,
    },
    // Точки входа
    entry: {
      "main": ["./ts/main.ts"]
    },

    // Что получаем на выходе
    output: {
      path: path.resolve(process.cwd(), "dist"),
      filename: "js/main.js",
      publicPath: !!process.env.WEBPACK_DEV_SERVER ? "/" : "./",
    },

    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: [".ts", ".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    },

    // Dev сервер
    devServer: {
      devMiddleware: {
        index: true,
        publicPath: '/',
        writeToDisk: true
      },
      static: {
        directory: path.join(__dirname, 'dist')
      },
      port: 9000,
      hot: true
    },

    module: {
      rules: [
        // Загрузчик TS файлов
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        // Загрузчик vue файлов (хотя мы их не используем, но вдруг кому понадобится)
        {
          test: /\.vue$/,
          use: "vue-loader",
        },
        // Загрузчик изображений
        {
          test: /\.(png|jpg|gif|svg|ico)$/,
          loader: "file-loader",
          options: {
            name: "static/[name].[ext]?[hash]"
          }
        },
        // Загрузчик js файлов
        {
          test: /\.js$/,
          loader: "file-loader",
          exclude: /node_modules/,
          options: {
            name: "js/[name].[ext]"
          }
        },
        // Загрузчик стилей
        {
          test: /\.(css|sass|scss)$/,
          use: [
            // Минификатор стилей
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: (resourcePath, context) => {
                  return path.relative(path.dirname(resourcePath), context) + "/";
                },
              },
            },
            // Загрузчик обычных css стилей
            "css-loader",
            // Sass-загрузчик
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },

    plugins: [
      // Очищает build дирректорию
      new CleanWebpackPlugin(),

      // Формирует html. Подсовывает title, делает внедрение js в body
      new HtmlWebpackPlugin({
        inject: "body",
        template: "index.html",
        title: "Hello-world"
      }),

      // Запускает проверку кода через eslint
      new ESLintPlugin({
        extensions: "ts"
      }),

      new VueLoaderPlugin(),

      // Минифицирует стили
      new MiniCssExtractPlugin({
        filename: 'static/style.css'
      }),

      new DefinePlugin({
        __VUE_OPTIONS_API: JSON.stringify(true),
        VUE_PROD_DEVTOOLS: JSON.stringify(env.production !== true),
      }),
    ]
  }
};