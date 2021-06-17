import renderTitle from "../../atoms/Title";

function createBanner() {
  return `
    <section class="banner">
      <div class="banner__background--desktop">
        <div class="leftLeaves"></div>
        <div class="plantPerson"></div>
        <div class="rightLeaves"></div>
      </div>

      <div class="banner__background--mobile">
        <div class="mobileLeaves"></div>
        <div class="mobilePlantPerson"></div>
      </div>
   
      <div class="contentBanner">
   
        <div class="container" id="banner">
          
          <img class="logo" src="images/icons/logo-white.svg" alt="Greenthumb" />

          <div class="titleWrapper">
            ${renderTitle(
              "Find your next green friend",
              document.getElementById("banner")
            )}
          </div>

          <div class="arrowDown"></div>
        </div>
      </div>
    </section>
  `;
}

export default function renderBanner() {
  const banner = createBanner();

  return banner;
}
