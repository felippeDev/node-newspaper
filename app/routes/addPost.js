module.exports = (app) => {
    app.get('/admin/addPost', (req, res) => {
        res.render('admin/addPost');
    });
};