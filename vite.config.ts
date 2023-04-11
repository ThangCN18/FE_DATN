// @ts-ignore
// * No declaration file for less-vars-to-js
import lessToJS from "less-vars-to-js";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import { ViteAliases } from "vite-aliases";
import Inspect from "vite-plugin-inspect";
import reactJsx from "vite-react-jsx";
import { resolve } from "path";
import fs from "fs";

const pathResolver = (path: string) => resolve(__dirname, path);
const themeVariables = lessToJS(
  fs.readFileSync(pathResolver("./config/variables.less"), "utf8")
);

export default defineConfig({
  base: "./",
  plugins: [
    Inspect(),
    ViteAliases({}),
    reactJsx(),
    reactRefresh(),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: "antd",
    //       style: (name) => {
    //         if (name === "col" || name === "row") {
    //           return "antd/lib/style/index.less";
    //         }
    //         return `antd/es/${name}/style/index.less`;
    //       },
    //     },
    //   ],
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
});

// // @ts-ignore
// // * No declaration file for less-vars-to-js
// import lessToJS from "less-vars-to-js";
// import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";
// import vitePluginImp from "vite-plugin-imp";
// import { ViteAliases } from "vite-aliases";
// import Inspect from "vite-plugin-inspect";
// import reactJsx from "vite-react-jsx";
// import { resolve } from "path";
// import fs from "fs";

// const pathResolver = (path: string) => resolve(__dirname, path);
// const themeVariables = lessToJS(
//   fs.readFileSync(pathResolver("./config/variables.less"), "utf8")
// );

// export default defineConfig({
//   base: "./",
//   plugins: [
//     Inspect(),
//     ViteAliases({}),
//     reactJsx(),
//     reactRefresh(),
//     vitePluginImp({
//       libList: [
//         {
//           libName: "antd",
//           style: (name) => {
//             if (name === "col" || name === "row") {
//               return "antd/lib/style/index.js";
//             }
//             return `antd/es/${name}/index.js`;
//           },
//         },
//       ],
//     }),
//   ],
//   css: {
//     preprocessorOptions: {
//       less: {
//         javascriptEnabled: true,
//         modifyVars: themeVariables,
//       },
//     },
//   },
//   build: {
//     rollupOptions: {
//         output:{
//             manualChunks(id) {
//                 if (id.includes('node_modules')) {
//                     return id.toString().split('node_modules/')[1].split('/')[0].toString();
//                 }
//             }
//         }
//     }
// }
// });
