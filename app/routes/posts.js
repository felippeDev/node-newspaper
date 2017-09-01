const dbConnection = require('../../config/db');

module.exports = (app) => {
    let connection = dbConnection();

    app.get('/posts', (req, res) => {
        connection.query('select * from posts', (error, result) => {
            res.render('posts/listPosts', {posts: result});
        });
    });
};