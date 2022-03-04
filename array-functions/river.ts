type River = {
  name: string;
  length: number;
  countries: Array<string>;
};

const waters: Array<River> = [
  { name: "Amazon", countries: ["Brazil", "Columbia", "Peru"], length: 4_388 },
  {
    name: "Paraná",
    countries: ["Brazil"],
    length: 3_032,
  },
  {
    name: "Tocantins",
    countries: ["Brazil"],
    length: 1_640,
  },
  { name: "Nile", countries: ["Egypt"], length: 4_132 },
  { name: "Mississippi", countries: ["US"], length: 2_340 },
  {
    name: "Mekong",
    countries: ["China", "Myanmar", "Laos", "Thailand", "Vietnam"],
    length: 2_703,
  },
  { name: "YangTze", countries: ["China"], length: 3_915 },
  { name: "Ganges", countries: ["India", "Bangladesh"], length: 1_560 },
];

// Is there a river longer than 5000 miles?
const fiveK = waters.some((r: River): boolean => r.length > 5000);

console.log("Any river longer than 500 miles?", fiveK);

// #1. Select rivers whose name has an "e"
const eRivers = waters
  .filter((r: River) => r.name.includes("e"))
  .map((r: River): string => r.name);
console.log("Rivers with 'e'", eRivers);

// #2a. The shortest river name (using sort)
const riversSortedByName = waters.sort(
  (a: River, b: River): number => a.name.length - b.name.length
);
console.log(`Shortest river name is ${riversSortedByName[0].name}`);

// #2b. The shortest river name (using reduce)
const shortestRiverName = waters.reduce((prev: River, curr: River): River => {
  if (prev.name.length < curr.name.length) return prev;
  else return curr;
});
console.log(`Shortest river name is ${shortestRiverName.name}`);

// #3a. Find the longest river (using sort)
const riversSortedByLength = waters.sort(
  (a: River, b: River): number => b.length - a.length
);
console.log("Longest river is ", riversSortedByLength[0]);

// #3b. Find the longest river (using reduce)
const longestRiver = waters.reduce((prev: River, curr: River): River => {
  if (prev.length < curr.length) return curr;
  else return prev;
});
console.log(
  `Longest river is ${longestRiver.name} (${longestRiver.length} miles)`
);

// #4. Rivers that go thru China
const thruChina = waters
  .filter((r: River): boolean => r.countries.includes("China"))
  .map((r: River) => r.name);
console.log("Rivers passing China", thruChina);

// #5a. Find the river that goes thru most countries (using sort)
const riversSortedByCountry = waters.sort(
  (a: River, b: River) => b.countries.length - a.countries.length
);
console.log(riversSortedByCountry[0].name);

// #5b. Find the river that goes thru most countries (using reduce)
const mostCountries = waters.reduce((prev: River, curr: River): River => {
  if (prev.countries.length > curr.countries.length) return prev;
  else return curr;
});
console.log(mostCountries.name);

// To enable flatMap(), the "target" option in tsconfig.json must be set to ES2019
// Country with the longest name (using flatMap and sort)
const sortedRiverNames = waters
  .flatMap((r: River): Array<string> => r.countries)
  .sort((a: string, b: string) => b.length - a.length);
console.log("Longest country name", sortedRiverNames[0]);

// #6. Country with the longest name (using flatMap and reduce)
const longestRiverName = waters
  .flatMap((r: River): Array<string> => r.countries)
  .reduce((a: string, b: string) => {
    if (a.length < b.length) return b;
    else return a;
  });
console.log("Longest country name", longestRiverName);

// #7. Show country names which are passed by river longer than 3000 miles
const countriesWithRiver3000 = waters
  .filter((r: River) => r.length > 3000)
  .flatMap((r: River) => r.countries);
console.log(countriesWithRiver3000);
