import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
export function buildWebpack(options) {
    var mode = options.mode, paths = options.paths;
    var isDev = mode === "development";
    return {
        mode: mode !== null && mode !== void 0 ? mode : "development",
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
