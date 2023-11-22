import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/types';

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
      }
}