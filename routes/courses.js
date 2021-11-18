var express = require('express');
let courses = require('../courses.json');

var router = express.Router();

/* GET render courses.pug and load in varibles title and courses object. */
router.get('/', function(req, res, next) {
  res.render('courses', { title: 'Courses', courses: courses });
});
        
/* 
GET specific course
Find course that matches with param _id 
*/
router.route('/:_id')
.get((req, res, next) => {
    let course = courses.find(c => c._id == req.params._id);
    res.send(course);
}) //Delete specific course, make new courses with the _id match filtered out
.delete((req, res, next) => {
    courses = courses.filter(c => c._id != req.params._id);
    //res.status(200).send("DELETE ID: " + req.params._id).render(courses);
    res.render('courses', { title: 'Courses', courses: courses });
});

module.exports = router;
