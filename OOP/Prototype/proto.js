// * understanding the conspt of classNamees , function , object and prototype inheritance

const user = {
  eat() {
    console.log("eat");
  },
  sleep() {
    console.log("sleeping");
  },
};

const newuser = {
  game() {
    console.log("playing games ");
  },
  cirket() {
    console.log("he love playing game ");
  },
};

newuser.__proto__ = user;
console.log(newuser);

newuser.eat();
newuser.sleep();
