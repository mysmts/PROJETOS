"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../controllers/courseController");
const router = (0, express_1.Router)();
// Rota para listar todos os cursos
router.get("/", courseController_1.getCourses);
// Rota para criar um novo curso
router.post("/", courseController_1.createCourse);
// Rota para atualizar um curso existente
router.put("/:id", courseController_1.updateCourse);
// Rota para deletar um curso
router.delete("/:id", courseController_1.deleteCourse);
exports.default = router;
//# sourceMappingURL=courseRoutes.js.map