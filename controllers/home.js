const Article = require('../models/article');
const User = require('../models/user');

module.exports = {
    index: (req, res) => {
        Article.findAll({limit: 6, include: [{
            model: User
            }]}).then(articles => {
                res.render('home/index', {articles: articles});
        });
    }
};





