"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const dataSource_1 = require("./database/dataSource");
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const testimonialRoutes_1 = __importDefault(require("./routes/testimonialRoutes"));
require("reflect-metadata");
// Carregar variáveis do .env
dotenv_1.default.config();
// Criação da aplicação Express
const app = (0, express_1.default)();
// Configurações do middleware
app.use((0, cors_1.default)()); // Habilitar CORS
app.use(express_1.default.json()); // Parse do corpo da requisição como JSON
// Conectar ao banco de dados
dataSource_1.AppDataSource.initialize()
    .then(() => {
    console.log("Conectado ao banco de dados com sucesso!");
})
    .catch((error) => {
    console.error("Erro ao conectar ao banco de dados", error);
    process.exit(1); // Encerra a aplicação em caso de erro de banco
});
// Rotas
app.use("/courses", courseRoutes_1.default); // Rota para cursos
app.use("/testimonials", testimonialRoutes_1.default); // Rota para depoimentos
// Rota de teste
app.get("/", (req, res) => {
    res.send("API funcionando!");
});
// Iniciar o servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
//# sourceMappingURL=app.js.map