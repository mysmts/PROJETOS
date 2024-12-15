"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testimonialController_1 = require("../controllers/testimonialController");
const router = (0, express_1.Router)();
router.get("/", testimonialController_1.getTestimonials); // Listar todos
router.post("/", testimonialController_1.createTestimonial); // Criar novo
router.put("/:id", testimonialController_1.updateTestimonial); // Atualizar
router.delete("/:id", testimonialController_1.deleteTestimonial); // Deletar
exports.default = router;
//# sourceMappingURL=testimonialRoutes.js.map