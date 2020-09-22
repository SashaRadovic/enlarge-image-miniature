import React from "react";
import "./styles.css";

const enlargeImage = () => {
  document.querySelector("#imgTest").style.backgroundSize = "350%";
  document.querySelector("#imgTest").style.backgroundPosition = "center center";
};

const backToStart = () => {
  document.querySelector("#imgTest").style.backgroundSize = "cover";
  document.querySelector("#imgTest").style.backgroundPosition = "center";
};
const moveImage = (e) => {
  let image = document.querySelector("#imgTest");
  image.style.backgroungOrigin = "content-box";
  var rect = e.target.getBoundingClientRect();

  let cX = rect.right - e.clientX; //x position within the element.
  let cY = rect.bottom - e.clientY; //y position within the element.
  if (cX > 100) {
    cX = 100;
  }
  if (cY > 100) {
    cY = 100;
  }
  let x = cX + "%";
  let y = cY + "%";

  image.style.backgroundPosition = "" + x + " " + y + "";
};
export default function App() {
  return (
    <div className="App">
      <div
        id="imgTest"
        onMouseEnter={enlargeImage}
        onMouseMove={moveImage}
        onMouseLeave={backToStart}
        alt="pic"
      ></div>
    </div>
  );
}
