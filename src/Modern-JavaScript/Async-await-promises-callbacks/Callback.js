// Async JS Programming
// Callbacks, promises . Async & await



// ****************************Callback ************************************************ 
// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete an action 

const data1 = [
  { name: 'Joshua', Profession: 'Software Engineer' },
  { name: 'john', Profession: 'Software Engineer' },
]; 
// first function 
function getData() {
  setTimeout(() => {
    let output = '';
    data1.forEach((item, index) => {
      output += `<li>${item.name}</li> `;
    });
    document.body.innerHTML = output;
  }, 1000);  
}
getData(); 

// Second function 
function createData(newData) {
  setTimeout(() => {
    data1.push(newData);
  }, 2000);
}
createData({ name: 'mark', Profession: 'Software Engineer' });

// output ************************** i
// joshua
// john 

//  jb first function chla jata hai tu DOM update hojata hai 
// jiski waja se seond Function ki vlaue nhi arhi thi 

// but jb hum first function ka andr jo setTimeout function ko 5000 ==> 5second value  de 
// tu per humera pass ye  output 
// output **************************
// joshua
// john
// mark


// hum chahta hai k first function  ko  setTimeout 1000 => 1second or jasa hee first function
//  ka time complete hojyge tu second  // function run hojyge 2second ka bd 



// how to solve this issue ?
// using Callback()
//*  first function getData() ko createData ka  arguments main call krdeye 
// *  createdata k function parameters main recived krha hai callback ko call kiye 
// *  or per jb humera pass final data ayjyge tu hun callback ko call krlega 


// Final Answer 
const data2 = [
    { name: 'Joshua', Profession: 'Software Engineer' },
    { name: 'john', Profession: 'Software Engineer' },
  ]; 

  function getData() {
    setTimeout(() => {
      let output = '';
      data2.forEach((item, index) => {
        output += `<li>${item.name}</li> `;
      });
      document.body.innerHTML = output;
    }, 1000);  
  }

  
  // Second function 
  function createData(newData, callback) {
    setTimeout(() => {
      data2.push(newData);
      callback();
    }, 2000);
  }
  createData({ name: 'mark', Profession: 'Software Engineer' }, getData); 



 
//   ***********************END ************************************************