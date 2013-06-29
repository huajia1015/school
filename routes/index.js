/*
 * GET home page.
 */

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render('index', { title : '首页' });
    });
    app.get("/prospectus", function (req, res) {
        res.render('prospectus', { title : '招生简章', index : 0});
    });
    app.get("/schedule", function (req, res) {
        res.render('schedule', { title : '课程安排', index : 4});
    });
    app.get("/picture", function (req, res) {
        res.render('picture', { title : '课堂实录', index : 2});
    });
    app.get("/team", function (req, res) {
        res.render('team', { title : '师资团队', index : 3});
    });
    app.get("/notice", function (req, res) {
        res.render('notice', { title : '成绩排行榜', index : 1});
    });
    app.get("/address",function(req,res){
        res.render('address', { title : '联系我们', index : 5});
    });
};