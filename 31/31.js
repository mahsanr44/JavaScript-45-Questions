let usernames = [];
if (usernames.length > 0) {
  for (username of usernames) {
    if (username == "admin") {
      document.write(" Hello admin, would you like to see a status report? ");
    } else {
      document.write(` Hello ${username}, thank you for logging in again.  `);
    }
  }
} else {
  document.write("We need to find some users!");
}
