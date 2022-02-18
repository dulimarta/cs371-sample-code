import axios, { AxiosResponse } from "axios";
import { RandomUser, User } from "./datatypes";

const limitInput: Element | null = document.getElementById("input1");
const fetchBtn = document.getElementById("btn1");
const myTable = document.getElementById("mars");

// Define a click listener on the button
fetchBtn?.addEventListener("click", () => {
  removeOldData();
  fetchNewData();
});

function removeOldData() {
  // Use the class name fromAPI to select all the rows
  // in the table which are generated axios data
  const rows: NodeListOf<HTMLTableRowElement> =
    document.querySelectorAll(".fromAPI");

  for (let k = 0; k < rows.length; k++) {
    // Remove the row from the parent (myTable)
    myTable?.removeChild(rows[k]);
  }
}

function fetchNewData() {
  // Use the user input to control the number of random users to fetch
  const fetchLimit = (limitInput as HTMLInputElement)?.value ?? 10;
  axios
    .request({
      method: "GET",
      url: "https://randomuser.me/api",
      params: { results: fetchLimit },
    })
    .then((r: AxiosResponse) => r.data)
    .then((ru: RandomUser) => {
      for (let k = 0; k < ru.results.length; k++) {
        const u: User = ru.results[k];
        const aRow = document.createElement("tr");
        // Use a unique class name so it is easy to remove rows later
        aRow.setAttribute("class", "fromAPI");
        myTable?.appendChild(aRow);

        // Create a table data cell to show first name and last name
        const nameCell = document.createElement("td");
        nameCell.innerText = `${u.name.first} ${u.name.last}`;
        aRow.appendChild(nameCell);

        // Create a table data cell to show date of birth
        const DOBCell = document.createElement("td");
        DOBCell.innerText = u.dob.date.substring(0, 10);
        aRow.appendChild(DOBCell);
        aRow.appendChild(DOBCell);

        // Create a table data cell to show the picture
        const photoCell = document.createElement("td");
        aRow.appendChild(photoCell);
        const image = document.createElement("img");
        image.setAttribute("src", u.picture.thumbnail);
        photoCell.appendChild(image);
      }
    });
}

fetchNewData();
