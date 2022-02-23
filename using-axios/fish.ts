import axios, { AxiosResponse } from "axios";
// API doc at https://www.fishwatch.gov/developers
const fishURL = "https://www.fishwatch.gov/api/species";

type ImageURL = {
  src: string;
  alt: string;
};

/* Enclose property names in quotes when they include
  non-alphanumeric character */
type Species = {
  "Image Gallery": Array<ImageURL>;
  "Scientific Name": string;
  "Species Aliases": string;
  "Species Illustration Photo": Array<ImageURL>;
  "Species Name": string;
  Calories: string;
  Cholesterol: string;
  Feeds: string;
  "Fishing Rate": string;
  Protein: string;
  "Serving Weight": string;
  Servings: string;
  Sodium: string;
};

axios
  .request({ method: "GET", url: fishURL })
  .then((r: AxiosResponse) => r.data)
  .then((myFishArr: Array<Species>) => {
    console.log("Some fish species");
    for (let k = 0; k < myFishArr.length; k++) {
      const aFish = myFishArr[k];
      console.log(aFish["Fishing Rate"]);
      // Use "array subscript" syntax
      // when property name has non - alphanum chars
      console.log(aFish["Scientific Name"]);
      if (aFish["Image Gallery"])
        for (let img of aFish["Image Gallery"]) {
          console.log("\tImage at", img.src);
        }
    }
  });
