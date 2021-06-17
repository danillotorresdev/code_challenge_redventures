function createNoResultsYet() {
  return `
    <div class="container noResultsYet" id="noResultsYet" >
      <div class="grid-8">
          <span class="noResYetTitle"> No results yet… </span>
          <p class="noResYetDescription"> Use the filters above to find the plant that best fits your environment :)   </p>
      </div>
      <div class="grid-4 imageWrapper">
        <img class="noResultsYetImg" src="images/illustrations/no-results.png" alt="No results" />
      <div>
    </div>
  `;
}

export default function renderNoResultsYet() {
  const noResultsYet = createNoResultsYet();

  return noResultsYet;
}
