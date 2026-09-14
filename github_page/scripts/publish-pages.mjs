import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const appDirectory = fileURLToPath(new URL('../', import.meta.url))
const repositoryDirectory = resolve(appDirectory, '..')
const buildDirectory = resolve(appDirectory, 'dist')

if (!existsSync(resolve(repositoryDirectory, '.git'))) {
  throw new Error('저장소 루트를 확인할 수 없습니다.')
}

// GitHub Pages의 main / (root)에 Vite 빌드 결과를 게시합니다.
for (const file of ['index.html', 'assets', 'favicon.svg', 'icons.svg']) {
  cpSync(resolve(buildDirectory, file), resolve(repositoryDirectory, file), {
    recursive: true,
  })
}
const entryFile = resolve(repositoryDirectory, 'index.html')
writeFileSync(entryFile, readFileSync(entryFile, 'utf8').replace(/\r\n/g, '\n'))
writeFileSync(resolve(repositoryDirectory, '.nojekyll'), '')
process.stdout.write('GitHub Pages 루트 배포 파일을 갱신했습니다.\n')
