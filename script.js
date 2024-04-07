var sum = 0;
do {
  var number = Number(
    prompt(
      "please enter a number and will return the sum once you write '0' or sum exceeds 100"
    )
  );
  sum += number;
} while (sum <= 100 && number !== 0);
document.writeln("<h1>" + sum + "</h1>");
// console.log(sum);
