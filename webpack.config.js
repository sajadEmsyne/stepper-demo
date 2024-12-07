const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "host",
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For remotes (please adjust)
      // name: "cbsv2pocUi",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './/src/app/app.component.ts',
      // },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "http://localhost:3000/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": {
          singleton: false,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "@angular/common": {
          singleton: false,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "@angular/common/http": {
          singleton: false,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "@angular/router": {
          singleton: false,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "@angular/animations": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "@angular/platform-browser/animations": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "jquery": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        "ngx-skeleton-loader": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },
        bootstrap: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
          eager: true,
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
