import {writeFile}  from 'node:fs';

writeFile('./hello.html', '<h1>learning Node.js<h1>', () => {
    console.log('File was created');
});