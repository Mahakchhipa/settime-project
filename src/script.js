// A function is based on promises and call back hell

// function signup(callback) {
//   setTimeout(() => {
//     console.log("your have sign up the page ");
//     callback();
//   }, 3000);
// }
// function logedin(callback) {
//   setTimeout(() => {
//     console.log("your have loged in the page ");
//     callback();
//   }, 2000);
// }
// function addtocart(callback) {
//   setTimeout(() => {
//     console.log("your have to add product in the page ");
//     callback();
//   }, 3000);
//  }
// // signup => (() => {
// //   logedin(() => {
// //     addtocart(() => {
// //       console.log("hurrh you have succesfully enterd in the page");
// //     });
// //   });
// // });

// signup(() => {
//   logedin(() => {
//     addtocart(() => {
//       console.log("Hurrah! You have successfully entered the page.");
//     });
//   });
// });

function signup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("your have sign up the page ");
      resolve();
    }, 3000);
  });
}
function logedin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("your have loged in the page ");
      resolve();
    }, 2000);
  });
}
function addtocart() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("your have to add product in the page ");
      resolve();
    }, 3000);
  });
}

signup()
  .then(() => logedin())
  .then(() => addtocart())
  .then(() => {
    console.log(
      " All the best you have succesfully entered in this page !!!!!!!"
    );
  });
