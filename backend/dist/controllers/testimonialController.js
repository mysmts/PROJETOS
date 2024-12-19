"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getTestimonials = void 0;
const dataSource_1 = require("../database/dataSource");
const Testimonial_1 = require("../models/Testimonial");
const class_validator_1 = require("class-validator");
const testimonialRepository = dataSource_1.AppDataSource.getRepository(Testimonial_1.Testimonial);
// Listar todos os depoimentos
const getTestimonials = async (_, res) => {
    try {
        const testimonials = await testimonialRepository.find({
            order: { createdAt: "DESC" },
        });
        res.status(200).json(testimonials);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar depoimentos", error });
    }
};
exports.getTestimonials = getTestimonials;
// Criar um novo depoimento
const createTestimonial = async (req, res) => {
    try {
        const testimonial = testimonialRepository.create(req.body);
        const errors = await (0, class_validator_1.validate)(testimonial);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        const savedTestimonial = await testimonialRepository.save(testimonial);
        res.status(201).json(savedTestimonial);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao criar depoimento", error });
    }
};
exports.createTestimonial = createTestimonial;
// Atualizar um depoimento
const updateTestimonial = async (req, res) => {
    const { id } = req.params;
    try {
        const testimonial = await testimonialRepository.findOneBy({ id: Number(id) });
        if (!testimonial) {
            return res.status(404).json({ message: "Depoimento não encontrado" });
        }
        testimonialRepository.merge(testimonial, req.body);
        const errors = await (0, class_validator_1.validate)(testimonial);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        const updatedTestimonial = await testimonialRepository.save(testimonial);
        res.status(200).json(updatedTestimonial);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao atualizar depoimento", error });
    }
};
exports.updateTestimonial = updateTestimonial;
// Deletar um depoimento
const deleteTestimonial = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await testimonialRepository.delete(id);
        if (result.affected === 0) {
            return res.status(404).json({ message: "Depoimento não encontrado" });
        }
        res.status(200).json({ message: "Depoimento deletado com sucesso" });
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao deletar depoimento", error });
    }
};
exports.deleteTestimonial = deleteTestimonial;
//# sourceMappingURL=testimonialController.js.map