function createSelectInput({ selectData, selectName }) {
  return `
  <div class="dropdown">
  <select class="selectInput" name=${selectName} id=${selectName}>
    <option value="0">Select...</option>
    ${
      selectData &&
      selectData.map(
        (item) => `<option value=${item.value}>${item.name}</option>`
      )
    }
      
    </select>
  </div>
  `;
}

export default function renderSelectInput(selectData) {
  const selectInput = createSelectInput(selectData);

  return selectInput;
}
