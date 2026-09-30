import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local development uses '/'.
//
// GitHub Actions automatically detects whether this is:
//
// johnmarkobura.github.io
// -> https://johnmarkobura.github.io/
// -> base = /
//
// OR a project repo such as portfolio
// -> https://johnmarkobura.github.io/portfolio/
// -> base = /portfolio/
//
// VITE_BASE_PATH can override either behavior.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]

const automaticGithubBase =
  repositoryName && repositoryName !== 'johnmarkobura.github.io'
    ? `/${repositoryName}/`
    : '/'

export default defineConfig({
  plugins: [react()],
  base:
    process.env.VITE_BASE_PATH ||
    (process.env.GITHUB_ACTIONS ? automaticGithubBase : '/'),
})
