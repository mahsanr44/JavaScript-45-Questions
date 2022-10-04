let guests = ["Ali", "Abdullah", "Hammad"];
console.log(`${guests[2]} not coming due to some issue.`);
guests.pop();

guests.push("Zia Khan");
for (guest of guests) {
  console.log(`Hello ${guest}, you're invited to dinner at my home today.`);
}
