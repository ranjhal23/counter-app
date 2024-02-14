let contVal= document.querySelector('#cnt');

const increment = () => {
   let value= parseInt(contVal.innerText);
   value= value+1;
   contVal.innerText=value;
};
const decrement = () => {
    let value= parseInt(contVal.innerText);
    value= value-1;
    contVal.innerText=value;
 };
