let testDate = Date.parse(prompt("Please enter date in YYYY-MM-DD format?"));
let today = Date.parse(new Date());
console.log(Math.floor((today - testDate) / (1000 * 60 * 60 * 24 * 365.25)));
