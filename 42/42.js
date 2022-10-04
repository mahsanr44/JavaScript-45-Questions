const great_magicians = ["Joker", "Pinkro", "Neuro"];

function show_magicians(great_magicians) {
  console.log(`${great_magicians}`);
}
function make_great(great_magicians) {
  for (let i = 0; i < great_magicians.length; i++) {
    great_magicians[i] = "the great " + great_magicians[i];
    console.log(great_magicians[i]);
  }
}
make_great(great_magicians);
show_magicians(great_magicians);
