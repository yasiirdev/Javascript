let api = function (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data);
      resolve("success");
    }, 3000);
  });
};

//promise Chaining

api("123")
  .then((response) => {
    console.log(response);
  })
  .then((response) => {
    api("2333").then((response) => {
      console.log("2=>", response);
    });
  });

 async function f1(){
      const x = await api("123");
      console.log(x);
      let x2 = await api("234")
      console.log(x2);
 }

 f1();

const URLDATE = (data) => {
  return new Promise((resolve, reject) => {
       setTimeout(() => {
      if (data === '123') {
        resolve({ message: 'Data fetched successfully!'} );
      } else {
        reject(new Error('Failed to fetch data.'));
      }
    }, 3000);
  });
};

URLDATE("123")
  .then((respone) => {
    console.log("1");
    console.log(respone);
    return URLDATE("234");
  })
  .then((respone) => {
    console.log("2");
    console.log(respone);
    return URLDATE("456");
  })

async function api() {
    let x = await URLDATE("123");
    console.log(x);
    let x2 = await URLDATE(234);
    console.log(x2);
};

api();

// let allUser = fetch("https://dummyjson.com/users", {
//   method: "GET",
// });

// try {
//   allUser.then((res) => console.log(res.json())).then(obj => console.log(obj.users));
// } catch (error) {
//   console.log(error);
// }

// (async function () {
//   let res = await allUser;
//   console.log(res);
//   let objJson =  res.json();
//   console.log(objJson);
//   let users = await objJson;
//   console.log(users);
// })()



// fetch("https://dummyjson.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((objJson) => console.log(objJson.users));



