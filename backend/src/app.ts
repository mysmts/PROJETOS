import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./database/dataSource";
import courseRoutes from "./routes/courseRoutes";
import testimonialRoutes from "./routes/testimonialRoutes";
import "reflect-metadata";

// Carregar variáveis do .env
dotenv.config();

// Criação da aplicação Express
const app = express();

// Configurações do middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Parse do corpo da requisição como JSON

// Conectar ao banco de dados
AppDataSource.initialize()
  .then(() => {
    console.log("Conectado ao banco de dados com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados", error);
    process.exit(1); // Encerra a aplicação em caso de erro de banco
  });

// Rotas
app.use("/courses", courseRoutes); // Rota para cursos
app.use("/testimonials", testimonialRoutes); // Rota para depoimentos

// Rota de teste
app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// Iniciar o servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
