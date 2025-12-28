
let date = new Date();
console.log(date.toUTCString());  // * iso standard 2024-02-12T05:00:00z



//* get minutes is a method that get minutes for lastest time 
let minutes = date.getMinutes();
 console.log(minutes,'min');
 
//* get second is a method that get minutes for lastest time
 let second = date.getSeconds();
 console.log(second,'sec');


 //* get minutes is a method that get minutes for lastest time
 let hours = date.getHours();
 console.log(hours,'h');
 
 
 // *get day is a method that get minutes for lastest time
 let day = date.getDay();
 console.log(day,'day');
 

 // *get date is a method that get minutes for lastest time
 let timeDate = date.getDate();
 console.log(timeDate,'date');
 
// *get full date in local formitting
date.toLocaleDateString("en-US", {});
//* get full time in local formitting
date.toLocaleTimeString("en-US", {});

const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};
// Explicitly sets format to e.g., "01/17/2025" or "17/01/2025" depending on the locale
console.log(date.toLocaleDateString("en-Uk", options));
console.log(date.toLocaleTimeString("en-Uk", { timeZone: "Asia/Karachi" }));

