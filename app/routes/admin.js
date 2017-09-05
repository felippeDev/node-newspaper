module.exports = (application) => {
    application.get('/admin/addPost', (req, res) => {
        application.app.controllers.admin.createPost(application, req, res);
    });

    application.post('/admin/addPost', (req, res) => {
        application.app.controllers.admin.savePost(application, req, res);
    });
};