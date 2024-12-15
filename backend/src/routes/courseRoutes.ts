import { Router } from "express";
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController";

const router = Router();

// Rota para listar todos os cursos
router.get("/", getCourses);

// Rota para criar um novo curso
router.post("/", createCourse);

// Rota para atualizar um curso existente
router.put("/:id", updateCourse);

// Rota para deletar um curso
router.delete("/:id", deleteCourse);

export default router;
