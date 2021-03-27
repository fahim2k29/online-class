import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Course = (props) => {
    const {name, price, duration, instructor} = props.course;
    const courseStyle =  {border:'2px solid blue', margin:'10px', width:'60%', padding:'10px'};
    const handleAddCourse = props.handleAddCourse;
    
    return (
        <div style={courseStyle}>
                  
                        <p><b>Course Duration:</b> {duration}</p>
                        <p><b>Instructor:</b> {instructor}</p>
                        <p><b>Price:</b> {price}TK</p>
                        <button className="btn btn-primary" onClick={ () => handleAddCourse(props.course)}>Add Course</button>
                
        </div>
       
    );
};

export default Course;