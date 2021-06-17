import renderCardConditions from "../../molecules/CardConditions";
import sun from "../../../images/illustrations/sun.png";
import wateringcan from "../../../images/illustrations/wateringcan.png";
import dog from "../../../images/illustrations/dog.png";

function createConditionsSection() {
  return `
    <section class="conditionsSection">
    <div class="container">
    <div class="conditions">
      ${renderCardConditions({
        selectName: "sun",
        cardImg: sun,
        cardImgSrc: "sun",
        description:
          "<b>1.</b> Set the amount of <b>sunlight</b> your plant will get.",
        selectData: [
          { name: "No sunlight", value: "no" },
          { name: "Low sunlight", value: "low" },
          { name: "high_sunlight", value: "high" }
        ]
      })}
      
      ${renderCardConditions({
        selectName: "water",
        cardImg: wateringcan,
        cardImgSrc: "wateringcan",
        description:
          "<b>2.</b> How often do you want to <b>water</b> your plant?",
        selectData: [
          { name: "Regularly", value: "regularly" },
          { name: "Daily", value: "daily" },
          { name: "Rarely", value: "rarely" }
        ]
      })}

      ${renderCardConditions({
        selectName: "pets",
        cardImg: dog,
        cardImgSrc: "dog",
        description: "<b>3.</b> Do you have pets? Do they <b>chew</b> plants? ",
        selectData: [
          { name: "No/They don’t care", value: "false" },
          { name: "Yes", value: "true" }
        ]
      })}
    </div>
    </div>
    </section>
  `;
}

export default function renderConditionsSection(data) {
  const conditionsSection = createConditionsSection();

  return conditionsSection;
}
