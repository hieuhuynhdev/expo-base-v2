// env
const ENV = {
  NODE_ENV: process.env.NODE_ENV ?? "",
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? "",
};

const APP_CONFIG = {
  // environment
  IS_PRODUCTION: ENV.NODE_ENV === "production",
  IS_DEVELOPMENT: ENV.NODE_ENV === "development",
  IS_TEST: ENV.NODE_ENV === "test",
  APP_NAME: "Mobile",
  ENV,
};

export { ENV, APP_CONFIG };
