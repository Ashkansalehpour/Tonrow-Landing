import domGenerator from "dom-generator";
import "./index.scss";
import "./index.scss";

import { whyTonrowGenerator } from "../whyTonrowComponent/whyTonrowComponent";
import { whyTonrowGenerator } from "../whyTonrowComponent/whyTonrowComponent";
import renderBreakMotor from "../motorCycleComponent/motorCycleComponent";
import generateBrandTrust from "../brandTrust/brandTrustComponent";
import generateBrandTrust from "../brandTrust/brandTrustComponent";
import animationTooltips from "../mapComponent/tooltipAnimation";
import generatorDOMWhatDoesTonrowDo from "../whatDoesTonrowDo";
import contactUs from "../contactUsComponent/contactUs";
import heroBannerSection from "../heroBannerComponent";
import heroBannerSection from "../heroBannerComponent";
// import flashMaker from "../flashComponent/flashes";
import renderMap from "../mapComponent/mapComponent";
import flashMaker from "../flashComponent/flashes";
// import flashMaker from "../flashComponent";

"use strict";



/**
 * @returns {HTMLElement} - container Dom element.
 */
function containerComponent() {
  const container = domGenerator({
    tag: "container",
    attributes: { class: "container" },
    dataAttributes: { font: "iranSans" },
    children: [
      {
        tag: heroBannerSection(),
      },
      // What services does Tonro provide section
      {
        tag: generatorDOMWhatDoesTonrowDo(),
      },
      // map section
      // {
      //   tag:....,
      // },
      // Why choose Tenero section
      {
        tag: flashMaker({ urlFlash: "/images/Vector 4flashblue.svg" }),
      },
      {
        tag: whyTonrowGenerator(),
      },
      {
        tag: renderBreakMotor(),
      },
      {
        tag: renderMap(),
      },
      {
        tag: flashMaker({ urlFlash: "/images/Vector 40red.svg" }),
      },
      // What brands trusted us section
      {
        tag: generateBrandTrust(),
      },
      // flashes
      {
        tag: flashMaker({ urlFlash: "/images/Vector 4flash.svg" }),
      },
      // contact us part.
      {
        tag: contactUs(),
      },
    ],
  });
  return container;
}

export default containerComponent;
