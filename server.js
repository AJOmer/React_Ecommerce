const express = require("express");
const dbConnect = require("./config/db");
const path = require("path");

const app = express();

//Connecting to the DB \\
dbConnect();

// Middleware Init\\
app.use(express.json({ extended: false }));

// Routes \\

// Static assets if in production (deployment purposes) \\
if (process.env.NODE_ENV === "production") {
    // Set static folder \\
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendfile(path.join(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));