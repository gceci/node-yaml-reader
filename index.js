

const util = require('util');
const fs = require('fs');
const yaml = require('js-yaml');
const fileLocation = './data.yaml';

fs.readFile(fileLocation, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    data = yaml.load(fs.readFileSync(fileLocation, 'utf8'));
    console.log(
      util.inspect(data, {
        showHidden: false,
        depth: null,
        colors: true,
      })
    );
    console.log(data.subject.name);
  } catch (e) {
    console.log(e);
  }
});
