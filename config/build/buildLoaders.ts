import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            // 1. Активируем модули ТОЛЬКО для файлов, содержащих ".module."
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            // 2. Делаем имена классов в браузере читаемыми (например: Counter--btn--abc5)
            localIdentName: options.isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
            // 3. КРИТИЧЕСКИ ВАЖНО: позволяет использовать классический import classes from '...'
            namedExport: false,
            exportLocalsConvention: "as-is",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [typescriptLoader, cssLoader];
}
