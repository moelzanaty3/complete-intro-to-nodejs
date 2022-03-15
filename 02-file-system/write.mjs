import { readFile, writeFile } from 'fs/promises'

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

const data = {
  title: 'My new file',
  body: 'I wrote this file to disk using node'
}

for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value)
}

await writeFile(new URL('./index.html', import.meta.url), template)
