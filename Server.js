require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 6800;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const chalk = require("chalk");
const cors = require("cors");
const compression = require("compression"); // Compression middleware, compress responses from all routes
const helmet = require("helmet"); // Protect against web vunerablities

const app = express();

const routes = require("./routes");
require("./models").connect(process.env.dbUri);

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/membership", routes.membership);
app.use("/api/giving", routes.giving);

app.listen(port, async () => {
  console.log(
    chalk.blue(`All systems go. Backend ready to take off on port ${port}`)
  );
  console.log(chalk.yellow(`   Connecting to mongoDB...`));
});
