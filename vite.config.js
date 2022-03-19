import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  createStyleImportPlugin,
  VantResolve,
} from 'vite-plugin-style-import'
import postCssPxToRem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({// 样式加载
      resolves: [
        VantResolve()
      ],
      libs: [
        // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          },
        },
      ],
    }),
  ],
  css:{ //css选项中可配置postcss
    postcss: {
      plugins: [
        postCssPxToRem({ // px到rem的转换
          rootValue: 37.5,
          propList: ['*'],
        })
      ]
    }
  },
  resolve:{
    alias:{
      "@":"/src"
    }
  }
})
