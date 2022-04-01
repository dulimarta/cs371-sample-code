import React, { useState } from "react";

export default function Sample(): JSX.Element {
  const [now] = useState(new Date());

  const myAlphaList = (
    <ul>
      <li>a</li>
      <li>b</li>
    </ul>
  );

  return (
    <>
      <h3>You visited Functional at {now.toTimeString()}</h3>
      {now.getHours() < 12 ? (
        <p>Good Morning</p>
      ) : now.getHours() < 18 ? (
        { myAlphaList }
      ) : (
        <p>Good evening</p>
      )}
    </>
  );
}
