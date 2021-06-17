import renderSelectInput from "../Select";
function createCardConditions({
  cardImg,
  cardImgSrc,
  description,
  selectData,
  selectName
}) {
  return `
    <div class="cardConditions">
        <div class="cardConditionsHeader"> 
            <div class="cardConditionsHeader__imageWrapper">
              <img class="cardImage" src=${cardImg} alt={${cardImgSrc}} />
            </div>
            <p class="cardConditionsHeader__description">
              ${description}
            </p>
        </div>
        
        <div class="cardConditionsBottom">
          ${renderSelectInput({ selectData, selectName })}
        </div>
    </div>
  `;
}

export default function renderCardConditions(data) {
  const CardConditions = createCardConditions(data);

  return CardConditions;
}
