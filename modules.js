// const xyz = require("./people");

// console.log(xyz.people, xyz.ages); // returns an empty object

// destructring

const { people, ages } = require("./people");
console.log(people, ages);

const os = require("os");
console.log(os.platform(), os.homedir());
