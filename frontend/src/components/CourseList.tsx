'use client'; // Diretiva para marcar o arquivo como um client component

import React, { useEffect, useState } from "react";
import axios from "../services/api";

interface Course {
  id: number;
  title: string;
  description: string;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios.get('/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Error fetching courses", error);
      });
  }, []);

  return (
    <div>
      <h2>Our Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
