import checkElement from "../../../utils/checkElement";

function createButton() {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };

  checkElement("#backToTopBTN").then((selector) => {
    selector.onclick = function (e) {
      e.preventDefault();
      scrollToTop();
    };
  });

  return `
    <button class="btn" id="backToTopBTN">
      <div class="btnContent">
        <div class="arrowUp" />
        back to the top
      </div>
    </button>
  `;
}

export default function renderButton(data) {
  const button = createButton(data);

  return button;
}
