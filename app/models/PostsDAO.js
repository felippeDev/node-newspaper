class PostsDAO {
    constructor(connection){
        this._connection = connection;
    };

    getPosts(callback) {
        this._connection.query('select * from posts', callback);
    };

    getPost(callback) {
        this._connection.query('select * from posts where id=1', callback);
    };

    savePost(newPost, callback) {
        this._connection.query('insert into posts set ?', newPost, callback);
    };
};

module.exports = () => {
    return PostsDAO;
};