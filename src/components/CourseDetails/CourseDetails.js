import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import { useParams } from 'react-router';

const CourseDetails = () => {
    const {courseId} = useParams();
    const [detail, setDetail] = useState({});
   
    useEffect( () => {
        setDetail(data);
      } , [])

    
    return (
        <div>
            <p>This is for Course Details: {courseId}</p>
        </div>
    );
};

export default CourseDetails;