import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import { buildBabelLoader } from "./babel/buildBabelLoader";
export function buildLoaders(options) {
    var isDev = options.mode === "development";
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };
    var svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };
    var cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
            },
        },
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
    var tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    //   getCustomTransformers: () => ({
                    //     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    //   }),
                },
            },
        ],
    };
    //   const babelLoader = buildBabelLoader(options);
    return [
        assetLoader,
        scssLoader,
        tsLoader,
        // babelLoader,
        svgrLoader,
    ];
}
