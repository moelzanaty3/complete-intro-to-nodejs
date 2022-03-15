import { readFile } from 'fs/promises'

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

console.log(template);