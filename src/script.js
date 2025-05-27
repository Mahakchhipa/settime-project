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
      console.log("Mene isko band krke reject kr diya hai ");
      reject();
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
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally sare kaam ho gye hai ab ");
  });

// this code is .then method use promise

// async function Ecommerceapp() {
//   await signup();
//   await logedin();
//   await addtocart();
//   console.log("You have sucseesfully signup in the page !!!!!1!");
// }
// Ecommerceapp();
async function Ecommerceapp() {
  try {
    await signup();
    await logedin();
    await addtocart();
    console.log("You have sucseesfully signup in the page !!!!!1!");
  } catch (error) {
    console.log(error);
  }
}
Ecommerceapp();
console.log("Thanks for the shoping with us ");

// hme toh only yeh wala fxn concept use krna yaad krna h

async function fetchdata() {
  try {
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchdata();
