module.exports.createPost = (application, req, res) => {
    res.render('admin/addPost', { validationErrors: {}, post: {}});
};

module.exports.savePost = (application, req, res) => {
    let newPost = req.body;
    let connection = application.config.db();
    let postsModel = new application.app.models.PostsDAO(connection);

    req.assert('title', 'Title field is required').notEmpty();
    req.assert('author', 'Author field is required').notEmpty();
    req.assert('post_date', 'Date field is required').notEmpty();
    req.assert('summary', 'Summary field is required').notEmpty();
    req.assert('content', 'Content field is required').notEmpty();

    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            console.log('--> Validation failed - /admin/addPost [POST]');
            console.log(result.array());
            res.render('admin/addPost', { validationErrors: result.array(), post: newPost });
            return;
        }

        postsModel.savePost(newPost, (error, result) => {
            res.redirect('/posts');
        });
    });
};