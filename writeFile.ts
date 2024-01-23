import {promises as fs} from 'fs';

const fileName = './test.txt';
const run = async () => {
    try {
        await fs.writeFile(fileName, 'Hello world');
        console.log('File was served!');
    } catch (e) {
        console.log(e);
    }
};
void run();