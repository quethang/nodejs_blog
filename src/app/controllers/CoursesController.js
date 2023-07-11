const courses = require('../models/Course')
const Course = require('../models/Course')

class CoursesControllers{
    //[get] /home
    // async index(req, res, next){
    //     courses.find({}).then(courses =>{
    //       courses = courses.map(courses => courses.toObject())
    //       res.render('home', {courses})
    //     }).catch(next)
    // }


    //[get] /course/:slug
    show(req, res, next){
        courses.findOne({ slug: req.params.slug }).
        then(courses =>{
            courses = courses.toObject() //vi chi nhan dc 1 gia tri duy nhat(neu nhan nhieu thi lam nhu ben SiteControllers)
            res.render('courses/show', {courses})
        }).catch(next)
    }

    //[get] courses/create
    create(req, res, next){
        res.render('courses/create')
    }

    //[pos] courses/store
    store(req, res, next){
        const formData = req.body
        formData.image = 'https://th.bing.com/th/id/OIP.fzSnClvueUiDCZNJINMWywHaEK?pid=ImgDet&rs=1'
        const course = new Course(formData)
        course.save().then(() => res.redirect('/')).catch(error => {})
    }

    //[get] courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id).then(Course => {
            res.render('courses/edit', {Course : Course.toObject()})}).catch(next)        
    }


     //[put] courses/:id
     update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body).then(() => res.redirect('/me/stored/courses')).catch(next)
    }

     //[delete] courses/:id
     delete(req, res, next){
        Course.deleteOne({_id: req.params.id}).then(() => res.redirect('back')).catch(next)
    }
}

module.exports = new CoursesControllers