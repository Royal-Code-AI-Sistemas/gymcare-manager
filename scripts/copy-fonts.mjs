// Copia as fontes da marca para o dist e ajusta os url() do styles.css.
//
// O Tailwind CLI (v4) não reescreve caminhos relativos ao source: o @font-face escrito em
// src/styles/globals.css aponta para '../fonts/...' (resolvido corretamente no dev/Storybook
// pelo Vite), mas no dist/styles.css esse caminho sairia quebrado. Este script coloca os
// arquivos em dist/fonts/ e reescreve o prefixo para './fonts/...'.
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const dist = join(root, 'dist')

mkdirSync(join(dist, 'fonts'), { recursive: true })
cpSync(join(root, 'src', 'fonts'), join(dist, 'fonts'), { recursive: true })

const cssPath = join(dist, 'styles.css')
const css = readFileSync(cssPath, 'utf8')
writeFileSync(cssPath, css.replaceAll('../fonts/', './fonts/'))

console.log('copy-fonts: fontes em dist/fonts/ e url() ajustados em dist/styles.css')
