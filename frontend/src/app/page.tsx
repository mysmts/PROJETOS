// app/page.tsx ou src/app/page.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseList from '../components/CourseList';
import Testimonials from '../components/Testimonial';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <CourseList />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

// Certifique-se de que o componente é exportado corretamente
export default Home;
