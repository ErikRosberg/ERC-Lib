import React, { useState } from "react";
import {container, card, content } from "./Flyout.style.js";

function Flyout({ toolTip, children }) {
  const testData = [
    {
      strId: 1,

      controlplans: [{ name: "företag1-cp1-indent0", controls: 2 }],

      children: [
        {
          strId: 2,

          controlplans: [
            { name: "reg1-cp1-inde1", controls: 3 },
            { name: "reg1-cp2-indent1", controls: 3 },
          ],

          children: [
            {
              strId: 2,

              controlplans: [
                { name: "prop11-cp1-inde2", controls: 3 },
                { name: "prop11-cp2-indent2", controls: 3 },
              ],

              children: [],
            },
          ],
        },

        {
          strId: 3,

          controlplans: [{ name: "qreg2-cp1-indent1", controls: 3 }],

          children: [
            {
              strId: 4,

              controlplans: [{ name: "prop1-cp1-indent2", controls: 3 }],

              children: [],
            },
          ],
        },
      ],
    },
  ];
  const renderTestData = (temp, res) => {
    if (!temp) return res;

    temp.forEach((x) => {
      x.controlplans.forEach((cpObj) => res.push(cpObj));

      if (x.children.length !== 0) {
        var q = renderTestData(x.children, res);

        if (q) {
          res = q;
        }
      }
    });

    console.log(res);

    return res;
  };
  const renderTestData2 = (temp, res) => {
    var d = renderTestData(temp, res);

    return d.map((x) => (
      <p>
        {x.name}:{x.controls}
      </p>
    ));
  };
  const [hover, setHover] = useState();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <container
      onClick={() => setIsClicked(!isClicked)}
      style={{ position: "relative" }}
    >
      {(isClicked || hover) && (
        <card
          onMouseEnter={() => setHover(true)}
          onMouseDown={() => {
            if (isClicked) {
              setHover(false);
            }
          }}
          onMouseLeave={() => setHover(false)}
        >
          {renderTestData2(testData, [])}
        </card>
      )}

      <content
        onMouseEnter={() => setHover(true)}
        onMouseDown={() => {
          if (isClicked) {
            setHover(false);
          }
        }}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </content>
    </container>
  );
}

export default Flyout;


<div id="open-modal" class="modal-window">
  <div>
    <a href="#" title="Close" class="modal-close">Close</a>
    <h1>Voilà!</h1>
    <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
    <br>
    <div><small>Check out 👇</small></div>
    <a href="https://chrome.google.com/webstore/detail/chroma/pkgejkfioihnchalojepdkefnpejomgn?utm_campaign=chromapromo&utm_source=codepen.io" target="_blank">
      Your new favorite eyedropper tool!
  </div>
</div>