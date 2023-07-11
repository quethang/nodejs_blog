const Course = require('../models/Course')


class MeControllers {
    //[pos] /stored/courses
    storedCourses(req, res, next) {
        Course.find({}).then(
            Course => {
                Course = Course.map(Course => Course.toObject())
                res.render('me/stored-courses', { Course })
            }
        ).catch(next)
    }

}

module.exports = new MeControllers