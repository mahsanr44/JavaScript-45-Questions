let equal_unequal = "metaverse";
console.log(equal_unequal == "metaverse");
console.log(equal_unequal == "meta");

let cases = "WEB";
console.log(cases == "WEB");
console.log(cases == "web");

let numerical = 5;
console.log(numerical == 5);
console.log(numerical != 5);
console.log(numerical > 5);
console.log(numerical < 5);
console.log(numerical >= 5);
console.log(numerical <= 5);

let andor = "piaic";
if (andor == "piaic" || andor == "iaic") {
  console.log(true);
} else {
  console.log(false);
}

if (andor == "piaic" && andor == "aic") {
  console.log(true);
} else {
  console.log(false);
}

let arr = ["one", "two", "three"];
console.log(arr.includes("one"));
console.log(arr.includes("five"));
