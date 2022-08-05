
let cel_data = [];

const valGet = (val) =>{
    
    cel_data.push(val);
    
    document.querySelector('.top-monitor').innerHTML = cel_data.join('')
    document.querySelector('.main-monitor').innerHTML = 0;
    
}


const allClear = () => {
    cel_data = [] ;

    document.querySelector('.top-monitor').innerHTML = 0;
    document.querySelector('.main-monitor').innerHTML = '';
}





const back = () => {
    cel_data.pop();
    document.querySelector('.top-monitor').innerHTML = cel_data.join('')
}





const finalresult = () => {
 
    let cel_string = cel_data.join('');

    document.querySelector('.main-monitor').innerHTML = eval(cel_string);
}


const off = () => {

    document.querySelector('.top-monitor').innerHTML = '';
    document.querySelector('.main-monitor').innerHTML = '';

}

const on = () => {
    document.querySelector('.top-monitor').innerHTML = 0;

}