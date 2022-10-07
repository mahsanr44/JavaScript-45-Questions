let age = parseInt(prompt("Enter your Age:", ""));
if (age) {
  if (age < 2) {
   console.loge("The person is a baby");
  } else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
  } else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
  } else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
  } else if (age >= 20 && age < 60) {
    console.log("The person is an adult");
  } else {
    console.log("The person is an elder");
  }
} else {
  console.log("Please Enter your age in numbers!!!");
}
