import renderBanner from "../../organisms/Banner";
import renderConditions from "../../organisms/Conditions";
import renderPicks from "../../organisms/Picks";
import checkElement from "../../../utils/checkElement";

function state() {
  let state;

  function getState() {
    return state;
  }

  function setState(newState) {
    state = newState;
  }

  return { getState, setState };
}

function createHomePage() {
  const sunSelectedOption = state();
  const waterSelectedOption = state();
  const petsSelectedOption = state();

  const handleSelector = (selectorID) => {
    checkElement(selectorID).then((selector) => {
      selector.addEventListener("click", function () {
        const options = selector.querySelectorAll("option");
        const count = options.length;
        if (typeof count === "undefined" || count < 2) {
          addActivityItem();
        }
      });
      selector.addEventListener("change", function () {
        addActivityItem(selector.value);
      });

      const fetchData = () => {
        const sun = sunSelectedOption.getState();
        const water = waterSelectedOption.getState();
        const pets = petsSelectedOption.getState();
        fetch(
          `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sun}&water=${water}&pets=${pets}`
        ).then((res) => {
          if (res.status !== 422) {
            res.text().then((result) => {
              renderPicks(result);
            });
          } else {
            renderPicks([]);
          }
        });
      };

      function addActivityItem(data) {
        switch (selectorID) {
          case "#sun":
            sunSelectedOption.setState(data);
            fetchData({ data, selectorID });
            break;

          case "#water":
            waterSelectedOption.setState(data);
            fetchData({ data, selectorID });
            break;

          case "#pets":
            petsSelectedOption.setState(data);
            fetchData({ data, selectorID });
            break;

          default:
            break;
        }
      }
    });
  };

  handleSelector("#sun");
  handleSelector("#water");
  handleSelector("#pets");

  return `
      ${renderBanner()}
      ${renderConditions()}
      ${renderPicks()}
  `;
}

export default function renderHomePage(data, element) {
  const banner = createHomePage();
  element.innerHTML = banner;

  return banner;
}
