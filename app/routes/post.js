module.exports = (app) => {    
    app.get('/post', (req, res) => {
        let connection = app.config.db();
        let postsModel = new app.app.models.PostsDAO(connection);

        postsModel.getPost((error, result) => {
            res.render('posts/post', {post: result});
        });
    });
};