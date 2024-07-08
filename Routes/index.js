module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("Welcome to the Practice Project");
    })
}