import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Course = (props) => {
   const {name, instructor, duration, price,id} = props.course;
   const courseStyle =  {border:'2px solid blue', margin:'10px', width:'60%', padding:'10px'};
   const handleAddCourse = props.handleAddCourse;
   
   const history = useHistory();
   const handleClick = (courseId) => {
       const url = `/course/${courseId}`;
       history.push(url);
   }  
   
   
   return (
        <div style={courseStyle}>
            <h4>{name}</h4>
            <p><b>Course Duration:</b> {duration}</p>
            <p><b>Instructor:</b> {instructor}</p>
            <p><b>Price:</b> {price}TK</p>
            <button onClick={() => handleClick(id)} className="btn btn-info" style={{margin: "20px"}}>Show Details {id}</button>
            <button onClick={ () => handleAddCourse(props.course)} className="btn btn-primary">Add Course</button>
        </div>
       
    );
};

export default Course;