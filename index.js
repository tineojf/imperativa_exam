function unique(arr) {
  let conjunto = new Set();
  for (let item of arr) {
    conjunto.add(item);
  }
  return conjunto;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); 