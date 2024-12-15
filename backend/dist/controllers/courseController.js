"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.createCourse = exports.getCourses = void 0;
const dataBase_1 = require("../database/dataBase");
const Course_1 = require("../models/Course");
const class_validator_1 = require("class-validator");
const courseRepository = dataBase_1.AppDataSource.getRepository(Course_1.Course);
// Listar todos os cursos
const getCourses = async (_, res) => {
    try {
        const courses = await courseRepository.find({
            order: { createdAt: "DESC" }, // Ordenar por data de criação, caso deseje
        });
        res.status(200).json(courses);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar cursos", error });
    }
};
exports.getCourses = getCourses;
// Criar um novo curso
const createCourse = async (req, res) => {
    try {
        const course = courseRepository.create(req.body);
        const errors = await (0, class_validator_1.validate)(course);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        const savedCourse = await courseRepository.save(course);
        res.status(201).json(savedCourse);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao criar curso", error });
    }
};
exports.createCourse = createCourse;
// Atualizar um curso
const updateCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await courseRepository.findOneBy({ id: Number(id) });
        if (!course) {
            return res.status(404).json({ message: "Curso não encontrado" });
        }
        courseRepository.merge(course, req.body);
        const errors = await (0, class_validator_1.validate)(course);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        const updatedCourse = await courseRepository.save(course);
        res.status(200).json(updatedCourse);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao atualizar curso", error });
    }
};
exports.updateCourse = updateCourse;
// Deletar um curso
const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await courseRepository.delete(id);
        if (result.affected === 0) {
            return res.status(404).json({ message: "Curso não encontrado" });
        }
        res.status(200).json({ message: "Curso deletado com sucesso" });
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao deletar curso", error });
    }
};
exports.deleteCourse = deleteCourse;
//# sourceMappingURL=courseController.js.map