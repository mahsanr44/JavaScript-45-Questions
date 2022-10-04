let guests = ["Ali", "Abdullah", "Hammad"];
console.log(
  `Hello Everyone, I just found a bigger table, let's invite three more people`
);

guests.unshift("Daniyal");
guests.splice(3, 0, "Mustafa");
guests.push("Zia Khan");
for (guest of guests) {
  console.log(`Hello ${guest}, you're invited to dinner at my home today.`);
}

console.log(`I'm inviting ${guests.length} guests at Dinner.`);
