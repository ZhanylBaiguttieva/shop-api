import {promises as fs} from 'fs';
const fileName = './test.json';

interface FileContents {
    message: string;
    author: string;
}
const run = async () => {
    try {
        const fileContents  = await fs.readFile(fileName);
        const result  = JSON.parse(fileContents.toString()) as FileContents;
        console.log('Result:', result.message);
    } catch (err) {
        console.log(err);
    }
};

void run();