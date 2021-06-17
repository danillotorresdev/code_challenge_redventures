function createTitleFromSection(title) {
  return `
    <div class="titleFromSection">
      <div class="titleImage"></div>
       <h2 class="titleSection">${title}</h2>
    </div>
  `;
}

export default function renderTitleFromSection(title) {
  const titleFromSection = createTitleFromSection(title);

  return titleFromSection;
}
