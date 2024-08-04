// electron.vite.config.ts
import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@store": resolve("src/renderer/store"),
        "@views": resolve("src/renderer/views"),
        "@components": resolve("src/renderer/components")
      }
    },
    server: {
      proxy: {
        "/api": {
          target: "http://uat.crm.xuexiluxian.cn",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    plugins: [
      vue(),
      vuetify({ autoImport: true })
    ]
  }
});
export {
  electron_vite_config_default as default
};
