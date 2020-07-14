import React, { useState, useEffect } from "react";
import "./AboutPage.scss";
// class AboutPage extends React.Component {
//   render() {
//     return <h2>About</h2>;
//   }
// }

function AboutPage() {
  const [count, setCount] = useState(0);
  const [mail, setEmail] = useState(0);

  useEffect(() => {
    console.log("aggiornato");
    (document.getElementById("test") as HTMLElement).innerText =
      "hai cliccato " + count + " volte";
  }, [count]);
  return (
    <>
      <div>
        <div id="test" className="test">
          pippo
        </div>
        <p>You clicked {count} times</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCount(() => count + 1)}
        >
          Click Me
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setEmail(() => mail + 1)}
        >
          Click mail
        </button>
      </div>
    </>
  );
}

export default AboutPage;
