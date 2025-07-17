const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [],
    resolve: {
      alias: {},
    },
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      definitions[0]['_VUE_PROD_HYDRATION_MISMATCH_DETAILS_'] =
        JSON.stringify(false);
      return definitions;
    });
  },
});
