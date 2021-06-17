function createTitle(text) {
  return `
    <h1 class="title">${text}</h1>
  `;
}

export default function renderTitle(data, element) {
  const title = createTitle(data);
  if (element) {
    element.innerHTML = title;
  }

  return title;
}
