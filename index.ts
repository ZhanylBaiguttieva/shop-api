import express from 'express';
import productsRouter from "./routers/products";
import fileDb from "./fileDb";
import cors from 'cors';

const app = express();
const port = 8000;


app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/products', productsRouter);

const run  = async () => {

    await fileDb.init();

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
}

void run();


