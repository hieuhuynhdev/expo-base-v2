const { getDefaultConfig } = require("expo/metro-config");
const path = require("node:path");
const { FileStore } = require("metro-cache");

/** @type {import('expo/metro-config').MetroConfig} */

const config = getDefaultConfig(__dirname);

config.cacheStores = [
  new FileStore({
    root: path.join(__dirname, ".cache", "metro"),
  }),
];

module.exports = config;
