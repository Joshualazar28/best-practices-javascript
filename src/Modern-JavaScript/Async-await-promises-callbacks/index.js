// Async JS Programming
// Callbacks, promises . Async & await

const datas = [
  { name: 'Joshua', Profession: 'Software Engineer' },
  { name: 'john', Profession: 'Software Engineer' },
]; 

function getDatas() {
  setTimeout(() => {
    let output = '';
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li> `;
    });

    document.body.innerHTML = output;
  }, 5000); 
}
getDatas(); 

function createData(newdata) {
  setTimeout(() => {
    datas.push(newdata);
  }, 2000);
}

createData({ name: 'mark', Profession: 'Software Engineer' });
