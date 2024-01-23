import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Product, ProductWithoutId} from "./types";

const fileName = './db.json';
let data: Product[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(fileName);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: ProductWithoutId) {
        const id = crypto.randomUUID();
        const product = {id, ...item};
        data.push(product);
        await this.save();

        return product;
    },
    async save() {
        return fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;