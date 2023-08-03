const fs = require('fs');

const files = ['./.mesh/index.ts', './dist/.mesh/index.js'];
const strToReplace = [{ str: '/Users/jpaladino/Desktop/Proyects/BEF/bef-gateway/', value: '../' }, { str: './src/utils/custom-fetch.js', value: '../src/utils/custom-fetch.js' }];

const replaceInFile = (path) => {
    fs.readFile(path, 'utf8', (err,data) => {
        if (err) {
          return err;
        }

        let result;
        strToReplace.map((item) => {
            const regex = new RegExp(`${item.str}`, 'g');
            result = data.replace(regex, item.value);
        });
      
        fs.writeFile(path, result, 'utf8', (err) => {
           if (err) return err;
        });
    });
};

files.map(filePath => replaceInFile(filePath));
