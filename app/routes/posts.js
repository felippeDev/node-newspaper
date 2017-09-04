module.exports = (app) => {    
    app.get('/posts', (req, res) => {
        let connection = app.config.db();
        let postsModel = new app.app.models.PostsDAO(connection);

        postsModel.getPosts((error, result) => {
            res.render('posts/listPosts', {posts: result});
        });
    });
};