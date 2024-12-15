import React from 'react';

// Exemplo de dados de depoimentos
const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Estudante de Medicina',
    testimonial: 'O UaiPassei me ajudou a organizar meus estudos e alcançar a aprovação no vestibular de Medicina. A plataforma é incrível!',
    image: '/images/testimonial-joao.jpg',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    role: 'Estudante de Engenharia',
    testimonial: 'Com os simulados e o planejamento de estudos, consegui me preparar de forma eficiente para o vestibular de Engenharia. Recomendo!',
    image: '/images/testimonial-maria.jpg',
  },
  {
    id: 3,
    name: 'Carlos Pereira',
    role: 'Estudante de Direito',
    testimonial: 'Acompanhar meu progresso e ajustar meu plano de estudos foi fundamental para minha aprovação no vestibular de Direito.',
    image: '/images/testimonial-carlos.jpg',
  },
];

const TestimonialList: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-6">O que nossos alunos dizem</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-lg p-6 max-w-xs flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-600 mb-2">{testimonial.name}</h4>
            <p className="text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
