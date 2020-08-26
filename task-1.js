let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

delete user.hobby;
delete user.premium;

user.hobby = "skydiving";
user.premium = false;
user.mood = "happy";
user["full time"] = true;

const { age, hobby, name, premium, mood } = user;

const keys = Object.keys(user);

for (const key of keys) {
  message += `${key}: ${user[key]}\n`;
}

console.log(message);
