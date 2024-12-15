import { Router } from "express";
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController";

const router = Router();

router.get("/", getTestimonials); // Listar todos
router.post("/", createTestimonial); // Criar novo
router.put("/:id", updateTestimonial); // Atualizar
router.delete("/:id", deleteTestimonial); // Deletar

export default router;
