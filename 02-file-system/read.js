const fs = require('fs/promises');
const path = require('path');

(async () => {
  let templatePath = path.join(__dirname, 'template.html')
  let template = await fs.readFile(templatePath, 'utf-8')
  console.log(template);
})();