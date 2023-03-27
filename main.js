// console.log('meow')


function income(){

    const income = parseFloat(document.getElementById('income').value);
    return income;
}



function expenses(){

    const food = parseFloat(document.getElementById('food').value);
    const rent = parseFloat( document.getElementById('rent').value);
    const clothes = parseFloat(document.getElementById('clothes').value);
     
    return eval(food+rent+clothes);

}


document.getElementById('calculate').addEventListener('click',function(){


  const totalincome= income()
  const totalexpense= expenses()

  if(totalexpense>totalincome){

    alert('Cut your coat according to your cloth');
}

else{



  const balance= totalincome-totalexpense;
  document.getElementById('expenses-total').innerText=totalexpense;
  document.getElementById('Balance-total').innerText=balance;

  console.log(totalincome);
  console.log(totalexpense);

  


}

})


document.getElementById('save-btn').addEventListener('click',function(){

const totalincome= income();

const savepercentage= parseFloat (document.getElementById('save').value);

const save= savepercentage/100;

const  savings= save*totalincome;
const balance=parseFloat(document.getElementById('Balance-total').innerText);

if( balance<savings ){

  alert('You don`t have enough money to save!')

}

else{
document.getElementById('saving').innerText=savings;


const remaining= balance-savings;

document.getElementById('remain').innerText=remaining;


}






})