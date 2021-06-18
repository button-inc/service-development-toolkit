const fs = require('fs');
const components = require('../docs/components.js');

const fileLocation = './docs/components.md';

const beginTable = components => {
  let html = '<table><tr>';
  const component = components[0] || {};
  Object.keys(component).forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr>';
  return html;
};

const addComponent = component => {
  let html = '<tr>';
  Object.values(component).forEach(value => {
    if (typeof value === 'string') {
      html += `<td>${value}</td>`;
    } else if (Array.isArray(value)) {
      if (value.length === 0) {
        html += `<td>None</td>`;
      } else {
        html += `<td><ul>`;
        value.forEach(entry => {
          html += `<li>${entry}</li>`;
        });
        html += `</ul></td>`;
      }
    }
  });
  html += '</tr>';
  return html;
};

const createTable = components => {
  let html = beginTable(components);
  components.forEach(component => {
    html += addComponent(component);
  });
  html += '</table>';
  return html;
};

const createDocs = (components, fileLocation) => {
  const html = createTable(components);
  const markdown = `## Components \n\n ${html}`;
  fs.writeFile(fileLocation, markdown, err => {
    if (err) throw err;
    console.log('Great Success');
  });
};

createDocs(components, fileLocation);
