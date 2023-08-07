class NewsController {
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('Welcome NEWS');
    }
}

module.exports = new NewsController();
