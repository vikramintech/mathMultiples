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

console.log("skipping multiples of 9 and 10 from Table")
// invoking skippingLastTable()
skippingLastTable(4);
