const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/side-widget/runtime.js',
    './dist/side-widget/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/side-widget.js');
  await fs.copyFile(
    './dist/side-widget/styles.css',
    'elements/styles.css'
  );
})();

