const API_URL = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';
const SELECTORS = {
  tbody: document.querySelector('.currency table tbody'),
};

const getData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createRow = (row) => {
  return `
    <tr>
        <td>${row.Cur_Name}</td>
        <td>${row.Cur_Scale} ${row.Cur_Abbreviation}</td>
        <td>${row.Cur_OfficialRate}</td>
    </tr>
    `;
};

const renderRows = (data) => {
  for (let i = 0; i < data.length; i++) {
    SELECTORS.tbody.insertAdjacentHTML('beforeend', createRow(data[i]));
  }
};

const start = async () => {
  renderRows(await getData());
};

start();
