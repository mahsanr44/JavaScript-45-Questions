let usernames = ["admin", "Eric", "Ahsan", "Zia", "Daniyal"];
for (username of usernames) {
  if (username == "admin") {
    console.log(" Hello admin, would you like to see a status report? ");
  } else {
   console.loge(` Hello ${username}, thank you for logging in again.  `);
  }
}
console.log