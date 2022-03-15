const fs = require('fs/promises');
const path = require('path');

(async () => {
  let templatePath = path.join(__dirname, 'template.html')
  let template = await fs.readFile(templatePath, 'utf-8')
  const data = {
    title: 'My new file',
    body: 'I wrote this file to disk using node'
  }
  for (const [key, value] of Object.entries(data)) {
    template = template.replace(`{${key}}`, value)
  }
  await fs.writeFile(path.join(__dirname, 'index.html'), template, 'utf-8')
})();