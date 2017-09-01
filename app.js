const app = require('./config/server.js');

const route_addPost = require('./app/routes/addPost')(app);
const route_posts = require('./app/routes/posts')(app);
const route_home = require('./app/routes/home')(app);

app.listen(3000, () => {
    console.log('Server listening on 3000');
});