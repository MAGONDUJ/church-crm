const mongoose = require("mongoose");
const chalk = require("chalk");

const connect = uri => {
  mongoose.set("useCreateIndex", true);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useUnifiedTopology", true);
  mongoose
    .connect(uri)
    .then(() => {
      console.log(chalk.magenta("\nSuccess! You are now Connected to MongoDB"));
    })
    .catch(err => console.log(chalk.red(err)));

  // plug in the promise library:
  mongoose.Promise = global.Promise;

  mongoose.connection.on("error", err => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
};

const memberModel = require("./memberModel");

module.exports = {
  connect,
  memberModel
};
