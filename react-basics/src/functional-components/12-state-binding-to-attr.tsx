import { useState } from "react";

export default function Sample(): JSX.Element {
  const [imageURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Sumatran_tiger.JPG"
  );
  const [pageURL] = useState(
    "https://commons.wikimedia.org/wiki/File:Sumatran_tiger.JPG"
  );

  return (
    <>
      <img src={imageURL} alt="Sumatran Tiger" />
      <div>
        <a href={pageURL}>Photo</a> by Kevin1234,&nbsp;
        <a href="https://creativecommons.org/licenses/by/2.0/">CC BY</a>
      </div>
    </>
  );
}
