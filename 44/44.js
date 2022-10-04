function make_sandwich(...items) {
  for (item of items) {
    console.log(`adding ${item} in your sandwhich`);
  }
  console.log("Your Sandwhich is Ready!");
}
make_sandwich("beef", "cheese", "lettuce", "dijon");
make_sandwich("slice", "apple slices", "honey mustard");
make_sandwich("peanut butter", "jam");
