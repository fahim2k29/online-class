import React from 'react';
import data from '../../data/data.json';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
const Home = () => {
    const [course, setCourse] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddCourse = (course) => {
      const newCart = [...cart, course]
      setCart(newCart);
    }

    useEffect( () => {
      setCourse(data);
    } , [] )
  

    return (
        <div className="App">
      <h1>Online Class</h1>
      <h2>Course Loaded: {course.length} </h2>
      <Cart cart={cart}></Cart>
      <ul>
        {
          course.map(course => <Course handleAddCourse={handleAddCourse} course={course}></Course>)
        }
      </ul>
     
    </div>
    );
};

export default Home;