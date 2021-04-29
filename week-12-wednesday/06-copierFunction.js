const fs = require("fs");
// Using callback Function
fs.mkdir("../week-12-wed-solution", (error) => {
  if (error) {
    throw error;
  } else {
    fs.copyFile(
      "../week-12-wednesday/01-readFileSync.js",
      "../week-12-wed-solution/01-readFileSync.js",
      (error) => {
        if (error) {
          throw error;
        } else {
          fs.copyFile(
            "../week-12-wednesday/02-callbackWithError.js",
            "../week-12-wed-solution/02-callbackWithError.js",
            (error) => {
              if (error) {
                throw error;
              } else {
                fs.copyFile(
                  "../week-12-wednesday/03-readFileAsync.js",
                  "../week-12-wed-solution/03-readFileAsync.js",
                  (error) => {
                    if (error) {
                      throw error;
                    } else {
                      fs.copyFile(
                        "../week-12-wednesday/04-callbackToPromise.js",
                        "../week-12-wed-solution/04-callbackToPromise.js",
                        (error) => {
                          if (error) {
                            throw error;
                          } else {
                            fs.copyFile(
                              "../week-12-wednesday/05-readFilePromise.js",
                              "../week-12-wed-solution/05-readFilePromise.js",
                              (error) => {
                                if (error) {
                                  throw error;
                                } else {
                                  fs.copyFile(
                                    "../week-12-wednesday/06-copierFunction.js",
                                    "../week-12-wed-solution/06-copierFunction.js",
                                    (error) => {
                                      if (error) {
                                        throw error;
                                      } else {
                                        console.log(
                                          "Finished copying all files after creating from week 12 wednesday to week 12 wed solution"
                                        );
                                      }
                                    }
                                  );
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  }
});

// Using Promise
const util = require("util");
const copyFilePromise = util.promisify(fs.copyFile);
const sourcePath = "../week-12-wednesday";
const destinationPath = "../week-12-wed-solution";
let myArray = [
  "01-readFileSync.js",
  "02-callbackWithError.js",
  "03-readFileAsync.js",
  "04-callbackToPromise.js",
  "05-readFilePromise.js",
  "06-copierFunction.js",
];

//Using Async and Await;
