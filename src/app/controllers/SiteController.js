const courses = require('../models/Course')

class SiteControllers{
    //[get] /home
    async index(req, res, next){
        courses.find({}).then(courses =>{
          courses = courses.map(courses => courses.toObject())
          res.render('home', {courses})
        }).catch(next)
    }


    //[get] /search
    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteControllers