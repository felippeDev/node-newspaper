module.exports = (app) => {
    app.get('/admin/addPost', (req, res) => {
        res.render('admin/addPost', { validationErrors: null });
    });

    app.post('/admin/addPost', (req, res) => {
        let newPost = req.body;
        let connection = app.config.db();
        let postsModel = new app.app.models.PostsDAO(connection);

        req.assert('title', 'This field is required').notEmpty();
        req.assert('author', 'This field is required').notEmpty();
        req.assert('post_date', 'This field is required').notEmpty();
        req.assert('summary', 'This field is required').notEmpty();
        req.assert('content', 'This field is required').notEmpty();

        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                console.log('--> Validation failed - /admin/addPost [POST]');
                res.render('admin/addPost', { validationErrors: result.array(), post: newPost });
                return;
            }

            postsModel.savePost(newPost, (error, result) => {
                res.redirect('/posts');
            });
        });
    });
};