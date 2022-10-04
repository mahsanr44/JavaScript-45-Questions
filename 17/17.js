let guests = ["Ali", "Abdullah", "Hammad"];

guests.unshift("Daniyal");
guests.splice(3, 0, "Mustafa");
guests.push("Zia Khan");
console.log(`Hello Everyone, I can invite only two people to the dinner.`);

for (let i = 0; i < guests.length + 1; i++) {
  let guest = guests.pop();
  console.log(`Sorry ${guest}, I can't invite you to the dinner`);
}

for (guest of guests) {
  console.log(`${guest}, You're still Invited to the dinner.`);
}

for (let i = 0; i < guests.length + 1; i++) {
  let guest = guests.pop();
}
console.log(guests);
