import { buildDevServer } from "./buildDevServer.ts";
import { buildLoaders } from "./buildLoaders.ts";
import { buildPlugins } from "./buildPlugins.ts";
import { buildResolvers } from "./buildResolvers.ts";
import type { BuildOptions } from "./types/config.ts";
import webpack from "webpack";

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,

    entry: paths.entry,

    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },

    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),

    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
