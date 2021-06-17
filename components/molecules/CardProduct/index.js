import isDeskTop from "../../../utils/checkIfDesktop";

const mobileCardFooter = (footerData) => {
  return `<div class="cardProductFooter">
      <div>
        <p class="cardProductTitle">${footerData.name}</p>
      </div>
      <div class="priceAndConditions">
          <div>
            <div class="price">
                $${footerData.price}
              </div>
          </div>
          <div>
          
          <div class="classification">
              ${
                footerData.sun === "high"
                  ? `<img class="classificationIcon" src="images/icons/low-sun.svg" alt="Low sun" />`
                  : ""
              }
              ${
                footerData.sun === "low"
                  ? `<img class="classificationIcon" src="images/icons/low-sun.svg" alt="Low sun" />`
                  : ""
              }
              ${
                footerData.sun === "no"
                  ? `<img class="classificationIcon" src="images/icons/no-sun.svg" alt="No sun" />`
                  : ""
              }
              ${
                footerData.water === "rarely"
                  ? ` <img class="classificationIcon" src="images/icons/1-drop.svg" alt="One drops" />`
                  : ""
              }
              ${
                footerData.water === "regularly"
                  ? `<img class="classificationIcon" src="images/icons/2-drops.svg" alt="Two drops" />`
                  : ""
              }
              ${
                footerData.toxicity
                  ? `<img class="classificationIcon" src="images/icons/toxic.svg" alt="Toxic" />`
                  : ""
              }
          </div>
        </div>
      </div>
    </div>`;
};

const desktopCardFooter = (footerData) => {
  return `<div class="cardProductFooter">
  <div class="leftContent">
    <p class="cardProductTitle">${footerData.name}</p>
  </div>

  <div class="rightContent">
    <div class="price">
      $${footerData.price}
    </div>
      <div class="classification">
        ${
          footerData.sun === "high"
            ? `<img class="classificationIcon" src="images/icons/low-sun.svg" alt="Low sun" />`
            : ""
        }
        ${
          footerData.sun === "low"
            ? `<img class="classificationIcon" src="images/icons/low-sun.svg" alt="Low sun" />`
            : ""
        }
        ${
          footerData.sun === "no"
            ? `<img class="classificationIcon" src="images/icons/no-sun.svg" alt="No sun" />`
            : ""
        }
        ${
          footerData.water === "rarely"
            ? ` <img class="classificationIcon" src="images/icons/1-drop.svg" alt="One drops" />`
            : ""
        }
        ${
          footerData.water === "regularly"
            ? `<img class="classificationIcon" src="images/icons/2-drops.svg" alt="Two drops" />`
            : ""
        }
        ${
          footerData.toxicity
            ? `<img class="classificationIcon" src="images/icons/toxic.svg" alt="Toxic" />`
            : ""
        }
      </div>
    </div>
 </div>`;
};

function createCardProduct(data) {
  if (data.staff_favorite) {
    return `
    <div class="cardProduct cardProduct__product--staffFavorite">
        <div class="ribbon">✨ Staff favorite</div>
        <div class="cardProductHeader">
            <div class="imageWrapper__favorite">
               <img class="cardProductImage" src=${data.url} alt="Greenthumb" />
            </div>
        </div>
        ${
          isDeskTop ? `${desktopCardFooter(data)}` : `${mobileCardFooter(data)}`
        }
    </div>
  `;
  } else {
    return `
      <div class="cardProduct">
        <div class="cardProductHeader">
          <div class="imageWrapper">
            <img class="cardProductImage" src=${data.url} alt="Greenthumb" />
          </div>
        </div>
        <div class="cardProductFooter">
            <div>
              <p class="cardProductTitle">${data.name}</p>
            </div>
            <div class="priceAndConditions">
                <div>
                  <div class="price">
                      $${data.price}
                    </div>
                </div>
                <div>
                
                <div class="classification">
                    ${
                      data.sun === "high"
                        ? `<img class="classificationIcon" src="images/icons/low-sun.svg" alt="Low sun" />`
                        : ""
                    }
                    ${
                      data.sun === "low"
                        ? `<img class="classificationIcon" src="images/icons/low-sun.svg" alt="Low sun" />`
                        : ""
                    }
                    ${
                      data.sun === "no"
                        ? `<img class="classificationIcon" src="images/icons/no-sun.svg" alt="No sun" />`
                        : ""
                    }
                    ${
                      data.water === "rarely"
                        ? ` <img class="classificationIcon" src="images/icons/1-drop.svg" alt="One drops" />`
                        : ""
                    }
                    ${
                      data.water === "regularly"
                        ? `<img class="classificationIcon" src="images/icons/2-drops.svg" alt="Two drops" />`
                        : ""
                    }
                    ${
                      data.toxicity
                        ? `<img class="classificationIcon" src="images/icons/toxic.svg" alt="Toxic" />`
                        : ""
                    }
                </div>
              </div>
            </div>
          </div>
      </div>
    `;
  }
}

export default function renderCardProduct(data) {
  const CardProduct = createCardProduct(data);

  return CardProduct;
}
