let current_users = ["Ali", "Ahsan", "Abdullah", "Ahmed", "Zia"];
let new_users = ["Amna", "Ahsan", "Aysha", "Rabia", "ZIA"];
current_users = current_users.map((users) => users.toLowerCase());
new_users = new_users.map((users) => users.toLowerCase());
for (user of new_users) {
  if (current_users.includes(user)) {
    console.log("Enter a new username!");
  } else {
    console.log(`${user} is available!`);
  }
}
