import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        float:"left",
        width:"30%", 
        margin:"8px",
        border: "2px solid gray"    
    },
    media: {
        height: 100,
    },
});

const Course = (props) => {
    const classes = useStyles();
    const { name, instructor, duration, price, id, picture } = props.course;
    const courseStyle = { border: '2px solid blue', margin: '10px', width: '60%', padding: '10px' };
    const handleAddCourse = props.handleAddCourse;
    const history = useHistory();
    const handleClick = (courseId) => {
        const url = `/course/${courseId}`;
        history.push(url);
    }

    return (
        // <div style={courseStyle}>
        //     <h4>{name}</h4>
        //     <p><b>Course Duration:</b> {duration}</p>
        //     <p><b>Instructor:</b> {instructor}</p>
        //     <p><b>Price:</b> {price}TK</p>
        //     <button onClick={() => handleClick(id)} className="btn btn-info" style={{margin: "20px"}}>Show Details {id}</button>
        //     <button onClick={ () => handleAddCourse(props.course)} className="btn btn-primary">Add Course</button>
        // </div>
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={picture}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        </Typography>
                        <p>Instructor: {instructor}</p>
                        <p>Duration: {duration}</p>
                        <p>Price: {price} TK</p>
                    </CardContent>
                    <button onClick={() => handleClick(id)} className="btn btn-info" style={{ margin: "20px" }}>Show Details</button>
                    <button onClick={() => handleAddCourse(props.course)} className="btn btn-primary">Add Course</button>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Course;