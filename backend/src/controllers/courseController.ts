import { Request, Response } from "express";
import { AppDataSource } from "../database/dataSource";
import { Course } from "../models/Course";
import { validate } from "class-validator";

const courseRepository = AppDataSource.getRepository(Course);

// Listar todos os cursos
export const getCourses = async (_: Request, res: Response) => {
  try {
    const courses = await courseRepository.find({
      order: { createdAt: "DESC" }, // Ordenar por data de criação, caso deseje
    });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar cursos", error });
  }
};

// Criar um novo curso
export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = courseRepository.create(req.body);
    const errors = await validate(course);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const savedCourse = await courseRepository.save(course);
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar curso", error });
  }
};

// Atualizar um curso
export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const course = await courseRepository.findOneBy({ id: Number(id) });

    if (!course) {
      return res.status(404).json({ message: "Curso não encontrado" });
    }

    courseRepository.merge(course, req.body);
    const errors = await validate(course);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const updatedCourse = await courseRepository.save(course);
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar curso", error });
  }
};

// Deletar um curso
export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await courseRepository.delete(id);

    if (result.affected === 0) {
      return res.status(404).json({ message: "Curso não encontrado" });
    }

    res.status(200).json({ message: "Curso deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar curso", error });
  }
};
