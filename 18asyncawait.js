const { readFile } = require(`fs`);
const gettext = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, `utf8`, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const start = async () => {
  try {
    const first = await gettext('./content/first.txt');
    const second = await gettext('./content/secondt.txt');
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
