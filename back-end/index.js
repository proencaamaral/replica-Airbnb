import "dotenv/config"
import express from 'express';
import UserRoutes from "./domains/users/routes.js";


const App = express();
const { PORT } = process.env;


App.use(express.json());
App.use('/users',UserRoutes)


App.listen(PORT, () => {
    console.log(`o Servidor está rodando na porta ${PORT}`)
});