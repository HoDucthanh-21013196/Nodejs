const newRoutes = require('./news');
const siteRoutes = require('./site');

function route(app) {
    //   app.get("/news", (req, res) => {
    //     res.render("news");
    //   });   // Bỏ phần này và viết câu dưới

    app.use('/news', newRoutes);

    // Routes
    app.get('/', siteRoutes);

    // app.post("/search", (req, res) => {
    //   // console.log(req.body);  //Lấy giá trị
    //   res.send("");
    // });
}

module.exports = route;
