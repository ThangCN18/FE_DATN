import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, parse } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          if (parse(asset.name).name === 'externalImage') {
            return "images/src/[name][extname]";
          }
          return "assets/[name].[hash][extname]";
        }
      },
    },
}
})
