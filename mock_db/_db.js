/* eslint-disable global-require */
// db.js
const Path = require('path');
const glob = require('glob');

const apiFiles = glob.sync(`${Path.resolve(__dirname, './')}/**/[!_]*.js`, {
  nodir: true,
});

const data = {};
const URL_EXTENSION_LENGTH = 3;
const FILENAME_LENGTH = 9;

apiFiles.forEach((filePath) => {
  // eslint-disable-next-line import/no-dynamic-require
  const api = require(filePath);
  let [, url] = filePath.split('mock_db/');
  url =
    url.slice(url.length - FILENAME_LENGTH) === '/index.js'
      ? url.slice(0, url.length - FILENAME_LENGTH) // remove /index.js
      : url.slice(0, url.length - URL_EXTENSION_LENGTH); // remove .js
  data[url.replace(/\//g, '-')] = api;
});

// data will be something like:
// { 'blog-comments': [ { id: 1, body: 'some comment', postId: 1 } ],
//   'blog-posts': [ { id: 1, title: 'json-server', author: 'tydpicode' } ],
//   'blog-profile': { name: 'typicode' },
//   'documents-query': { data: 123 } }

module.exports = () => {
  return data;
};
