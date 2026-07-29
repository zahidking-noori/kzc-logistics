import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { promises as fs } from 'node:fs'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'github-pages-spa-fallback',
      apply: 'build',
      async closeBundle() {
        const outDir = path.resolve(__dirname, 'dist')
        const indexPath = path.resolve(outDir, 'index.html')
        const fallbackPath = path.resolve(outDir, '404.html')
        await fs.copyFile(indexPath, fallbackPath)
        // Ensure both capitalized and lowercase team legacy filenames exist
        try {
          const teamSrc = path.resolve(outDir, 'Team.html')
          const teamDst = path.resolve(outDir, 'team.html')
          // only copy if the source exists
          const stat = await fs.stat(teamSrc).catch(() => null)
          if (stat) await fs.copyFile(teamSrc, teamDst)
        } catch (e) {
          // non-fatal: building should continue even if copy fails
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})