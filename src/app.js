const express = require("express");
require("../src/db/conn");
const router = require("../src/routers/Men")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`Connection Is Successful At ${port}`);
});
