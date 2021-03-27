import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import { useEffect, useState } from 'react';
import Course from './components/Course/Course';
import Cart from './components/Course/Cart';


function App() {
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }

 useEffect( () => {
  setCourse(data);
 },[])



  return (
    <div className="App">
      <h1>Online Class</h1>
      <h2>Course Loaded: {course.length}</h2>
         
      <Cart cart= {cart}></Cart>  
      <ul>
        {
          course.map(course => <Course handleAddCourse={handleAddCourse} course={course}>{course.name}</Course>)
        }
        
      </ul>
     
    </div>
  );
}

export default App;
