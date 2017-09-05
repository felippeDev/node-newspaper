module.exports.listPosts = (application, req, res) => {
    let connection = application.config.db();
    let postsModel = new application.app.models.PostsDAO(connection);

    postsModel.getPosts((error, result) => {
        res.render('posts/listPosts', {posts: result});
    });
};

module.exports.post = (application, req, res) => {
    let connection = application.config.db();
    let postsModel = new application.app.models.PostsDAO(connection);

    postsModel.getPost((error, result) => {
        res.render('posts/post', {post: result});
    });
};