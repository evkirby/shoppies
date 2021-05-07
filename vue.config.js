module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/shoppies/" : "/",
  devServer: {
    port: 8081,
  },
};
