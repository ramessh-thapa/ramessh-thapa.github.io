const express = require('express');
const Course = require("../models/course");


const router = express.Router();

//get all courses
router.get('/', (req, res, next) => {
    res.status(200).json(Course.getAll());
});

//get course by courseId
router.get('/:courseId', (req, res, next) => {
    const fetchedCourse = Course.findById(req.params.courseId);
    if(!fetchedCourse){
        res.status(404).send($`Invalid Course Id: '${req.params.courseId}'`);
    }
    else{
        res.status(200).json(fetchedCourse);
    }
});

//Add new course
router.post('/', (req, res, next) => {
    if(req.body.code == null || req.body.name == null || req.body.code.trim() == "" || req.body.name.trim() == ""){
        res.status(400).send('Please pass valid course code and name');
    }
    else{
        const newCourse = new Course(9000, req.body.code.trim(), req.body.name.trim()).save();
        res.status(201).json(newCourse);
    }
});



module.exports = router;