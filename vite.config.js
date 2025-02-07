import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/graphql": {
      // target: "http://localhost:3000", //DEV
      target: "https://the-dating-doc-backend-77b41ab88289.herokuapp.com/", //PROD
      changeOrigin: true,
      secure: false,
    },
  },
})
