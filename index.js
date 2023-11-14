console.clear();

// gives multiples of number given

function table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

console.log("table");
//invoking tables()
table(4);

// reverse tables

function reverseTable(num) {
  for (let i = 10; i >= 1; i--) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

console.log("Reverse table");
// invoking reverseTables()
reverseTable(4);

// skipping one field in a table

function skippingOneTable(num) {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
console.log("Skipping multiple of 4 with 5");
// invoing skippingOneTable()
skippingOneTable(4);

// skipping last two fields from a table using condition

function skippingLastTable(num) {
  for (let i = 1; i <= 10; i++) {
    if (i > 8) {
      break;
    }
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

console.log("skipping multiples of 9 and 10 from Table");
// invoking skippingLastTable()
skippingLastTable(4);

// logging only 5 fields  in a multiple using condition

function fiveTable(num) {
  for (let i = 1; i <= 10; i++) {
    if (i > 5) {
      return;
    }
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

console.log("multiples of a number given upto 5");
// invoking fiveTable()
fiveTable(4);

// using or condition in loop

function getEven(num) {
  for (i = 2; i <= 40; i += 2) {
    if (i === 20 || i === 28 || i === 34) {
      continue;
    }
    console.log(i);
  }
}

console.log("skipping 20,28 and 34 using or in condition");
// ivoking getEven()
getEven(4);

// using and condition in loop

function paintNumbers(num) {
  for (let i = 1; i <= 40; i++) {
    if (i >= 23 && i <= 30) {
      continue;
    }
    console.log(i);
  }
}

console.log("skipping 23 to 30 usiong and in condition")
// invoking paintNumbers()

paintNumbers(4);
