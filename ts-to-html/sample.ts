console.debug("Hello world");
const root = document.getElementById("insertHere");

// Create <h1>Hello</h1>
const firstHeading = document.createElement("h1");
firstHeading.innerText = "Hello";
root?.appendChild(firstHeading);

/**

type Atom = {
  name: string;
  weight: number;
};

const atoms: Array<Atom> = [
  { name: "Hydrogen", weight: 1.008 },
  { name: "Argon", weight: 39.948 },
  { name: "Carbon", weight: 12.011 },
  { name: "Oxygen", weight: 15.999 },
  { name: "Potassium", weight: 39.098 },
];

// Create <p>A short list of atoms:</p>
const firstPar = document.createElement("p");
firstPar.innerText = "A short list of atoms:";
root?.appendChild(firstPar);

// Make an unordered list (<ul>) of atoms
const atomicList = document.createElement("ul");
root?.appendChild(atomicList);
for (let a of atoms) {
  const atomicItem = document.createElement("li");
  atomicItem.innerText = `${a.name}  (${a.weight})`;
  atomicList.appendChild(atomicItem);
}

// Create <p>A 2-column table of  atoms</p>
const secondPar = document.createElement("p");
secondPar.innerText = "A 2-column table of atoms";
root?.appendChild(secondPar);

// Make an unordered list (<ul>) of atoms
const atomicTable = document.createElement("table");
root?.appendChild(atomicTable);

// Create the header row of the table
// <tr><th>Name</th><th>Weight</th></tr>
const firstRow = document.createElement("tr");
atomicTable.appendChild(firstRow);
const leftTitle = document.createElement("th");
leftTitle.innerText = "Name";
firstRow.appendChild(leftTitle);
const rightTitle = document.createElement("th");
rightTitle.innerText = "Weight";
firstRow.appendChild(rightTitle);

for (let a of atoms) {
  // Create a new row
  const atomicRow = document.createElement("tr");
  atomicTable.appendChild(atomicRow);

  // Create the first cell for this row
  const atName = document.createElement("td");
  atName.innerText = a.name;
  atomicRow.appendChild(atName);

  // Create the second cell for this row
  const atWeight = document.createElement("td");
  atWeight.innerText = `${a.weight}`;
  atomicRow.appendChild(atWeight);
}

// Create <p>More atoms details: <a href="....">Periodic Table</a>
const thirdPar = document.createElement("p");

// Use #extLink in CSS
thirdPar.id = "extLink";
root?.appendChild(thirdPar);
const someText = document.createTextNode("More atoms details: ");
thirdPar.appendChild(someText);

// Create <a href="____">Periodic Table</a>
const anchorToPtable = document.createElement("a");
anchorToPtable.innerText = "Periodic Table";
anchorToPtable.setAttribute("href", "https://ptable.com/?lang=en");
thirdPar.appendChild(anchorToPtable);
const mdayah = document.createTextNode(" by Michael Dayah");
thirdPar.append(mdayah);
****/
