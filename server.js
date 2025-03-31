import express from 'express';

const app = express();
app.use(express.json());
const PORT = 3000;

app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`);
});