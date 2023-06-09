var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/login", (req, res, next) => {
    res.json("halaman login");
    console.log("berhasil login");
});

app.get("/logout", (req, res, next) => {
    res.json("halaman logout");
    console.log("anda logout");
});

app.get("/register", (req, res, next) => {
    res.json("halaman register");
    console.log("berhasil registrasi akun");
});

app.get("/error", (req, res, next) => {
    res.json("halaman error");
    console.log("error");
});