const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 9
}

let token = jwt.sign(data, 'somesecret');

console.log(token);


 let decoded = jwt.verify(token, 'sdfsf');

 console.log("decoded", decoded);

let string = "some string";
let hash = SHA256(string).toString();

// var data = {
//   id: 4
// }
//
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// }
//
//
// token.data.id = 3;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString();
//
// if (resultHash === token.hash) {
//   console.log("gfood to go");
// } else {
//   console.log("something changed");
// }
