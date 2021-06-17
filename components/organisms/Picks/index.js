import renderTitleFromSection from "../../molecules/TitleFromSection";
import renderCardProduct from "../../molecules/CardProduct";
import renderNoResultsYet from "../../molecules/NoResultsYet";
import renderButton from "../../atoms/BackToTheTopBtn";
import isDeskTop from "../../../utils/checkIfDesktop";
import checkElement from "../../../utils/checkElement";

function createPickRender(data) {
  if (isDeskTop) {
    return `
      <div class="picksSection">
          <div class="container">
              <div class="titleFromSectionWrapper">
                ${renderTitleFromSection("Our picks for you")}
            </div>
         
    
          <div>
            ${data
              .map((item) => {
                if (item.staff_favorite) {
                  return `<div class="grid-6">${renderCardProduct(item)}</div>`;
                } else {
                  return `<div class="grid-3">${renderCardProduct(item)}</div>`;
                }
              })
              .join("")}
          </div>

        </div>
        ${` <div class="container buttonWrapper">
                  ${renderButton("backToTop")}
              </div>`}

      </div>
    `;
  } else {
    return `
    <div class="picksSection">
      <div class="container">
          <div class="titleFromSectionWrapper">
            ${renderTitleFromSection("Our picks for you")}
        </div>
   
        <div class="glider">
          ${data
            .map((item) => {
              if (item.staff_favorite) {
                return `<div class="grid-6">${renderCardProduct(item)}</div>`;
              } else {
                return `<div class="grid-3">${renderCardProduct(item)}</div>`;
              }
            })
            .join("")}
        </div>

        </div>
        <div class="container buttonWrapper">
              ${renderButton("backToTop")}
        </div>
       
     

    </div>
  `;
  }
}

function createPicksSection(data) {
  let dataArray = [];
  const dataParam = data;

  if (typeof dataParam === "string") {
    dataArray = [...JSON.parse(dataParam)];
  }

  const hasData = dataArray.length > 0;

  if (hasData) {
    createPickRender(dataArray);
  }

  checkElement("#pickers").then((selector) => {
    if (hasData) {
      while (selector.firstChild) {
        selector.removeChild(selector.lastChild);
      }
      selector.insertAdjacentHTML("afterBegin", createPickRender(dataArray));
      document.querySelectorAll(".noResultsYet");
    } else {
      while (selector.firstChild) {
        selector.removeChild(selector.lastChild);
      }
      selector.insertAdjacentHTML("afterBegin", renderNoResultsYet());
    }
  });

  return `<section id="pickers" class="picksSection"></div>`;
}

export default function renderPicks(data) {
  const picksSection = createPicksSection(data);

  return picksSection;
}
