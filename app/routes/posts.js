module.exports = (application) => {    
    application.get('/posts', (req, res) => {
        application.app.controllers.posts.listPosts(application, req, res);    
    });

    application.get('/post', (req, res) => {
        application.app.controllers.posts.post(application, req, res);    
    });
};