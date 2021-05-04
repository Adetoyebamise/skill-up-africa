const fs = require("fs");
// Using callback Function
// fs.mkdir("../week-12-wed-solution", (error) => {
//   if (error) {
//     throw error;
//   } else {
//     fs.copyFile(
//       "../week-12-wednesday/01-readFileSync.js",
//       "../week-12-wed-solution/01-readFileSync.js",
//       (error) => {
//         if (error) {
//           throw error;
//         } else {
//           fs.copyFile(
//             "../week-12-wednesday/02-callbackWithError.js",
//             "../week-12-wed-solution/02-callbackWithError.js",
//             (error) => {
//               if (error) {
//                 throw error;
//               } else {
//                 fs.copyFile(
//                   "../week-12-wednesday/03-readFileAsync.js",
//                   "../week-12-wed-solution/03-readFileAsync.js",
//                   (error) => {
//                     if (error) {
//                       throw error;
//                     } else {
//                       fs.copyFile(
//                         "../week-12-wednesday/04-callbackToPromise.js",
//                         "../week-12-wed-solution/04-callbackToPromise.js",
//                         (error) => {
//                           if (error) {
//                             throw error;
//                           } else {
//                             fs.copyFile(
//                               "../week-12-wednesday/05-readFilePromise.js",
//                               "../week-12-wed-solution/05-readFilePromise.js",
//                               (error) => {
//                                 if (error) {
//                                   throw error;
//                                 } else {
//                                   fs.copyFile(
//                                     "../week-12-wednesday/06-copierFunction.js",
//                                     "../week-12-wed-solution/06-copierFunction.js",
//                                     (error) => {
//                                       if (error) {
//                                         throw error;
//                                       } else {
//                                         console.log(
//                                           "Finished copying all files after creating from week 12 wednesday to week 12 wed solution"
//                                         );
//                                       }
//                                     }
//                                   );
//                                 }
//                               }
//                             );
//                           }
//                         }
//                       );
//                     }
//                   }
//                 );
//               }
//             }
//           );
//         }
//       }
//     );
//   }
// });

// Using Promise

const { promisify } = require("util");
const myPromisifiedFolder = promisify(fs.mkdir);
const myPromisifiedFile = promisify(fs.copyFile);
// myPromisifiedFolder("../week-12-wed-solution")
//   .then((resolve) => {
//     myPromisifiedFile(
//       "../week-12-wednesday/01-readFileSync.js",
//       "../week-12-wed-solution/01-readFileSync.js"
//     ).then((resolve) => {
//       myPromisifiedFile(
//         "../week-12-wednesday/02-callbackWithError.js",
//         "../week-12-wed-solution/02-callbackWithError.js"
//       )
//         .then((resolve) => {
//           myPromisifiedFile(
//             "../week-12-wednesday/03-readFileAsync.js",
//             "../week-12-wed-solution/03-readFileAsync.js"
//           );
//         })
//         .then((resolve) => {
//           myPromisifiedFile(
//             "../week-12-wednesday/04-callbackToPromise.js",
//             "../week-12-wed-solution/04-callbackToPromise.js"
//           );
//         })
//         .then((resolve) => {
//           myPromisifiedFile(
//             "../week-12-wednesday/05-readFilePromise.js",
//             "../week-12-wed-solution/05-readFilePromise.js"
//           );
//         })
//         .then((resolve) => {
//           myPromisifiedFile(
//             "../week-12-wednesday/06-copierFunction.js",
//             "../week-12-wed-solution/06-copierFunction.js"
//           );
//         })
//         .then((resolve) => {
//           console.log(
//             "Finished copying all files after creating from week 12 wednesday to week 12 wed solution"
//           );
//         });
//     });
//   })
//   .catch((error) => console.log(error));

//Using Async and Await;
const copier = async () => {
  const folderCreation = await myPromisifiedFolder("../week-12-wed-solution");
  const fileCreationOne = await myPromisifiedFile(
    "../week-12-wednesday/01-readFileSync.js",
    "../week-12-wed-solution/01-readFileSync.js"
  );
  const fileCreationTwo = await myPromisifiedFile(
    "../week-12-wednesday/02-callbackWithError.js",
    "../week-12-wed-solution/02-callbackWithError.js"
  );
  const fileCreationThree = await myPromisifiedFile(
    "../week-12-wednesday/03-readFileAsync.js",
    "../week-12-wed-solution/03-readFileAsync.js"
  );
  const fileCreationFour = await myPromisifiedFile(
    "../week-12-wednesday/04-callbackToPromise.js",
    "../week-12-wed-solution/04-callbackToPromise.js"
  );
  const fileCreationFive = await myPromisifiedFile(
    "../week-12-wednesday/05-readFilePromise.js",
    "../week-12-wed-solution/05-readFilePromise.js"
  );
  const fileCreationSix = await myPromisifiedFile(
    "../week-12-wednesday/06-copierFunction.js",
    "../week-12-wed-solution/06-copierFunction.js"
  );
};
copier();
