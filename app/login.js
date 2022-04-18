const checkBox = document.querySelector('input');
const para = document.querySelector('p');
let shoppingDone = false;

checkBox.addEventListener('change', () => {
  checkBox.disabled = true;
  shoppingDone = true;
  mDown(obj);
});


function mDown(obj){
      if (shoppingDone === true) {
          window.location.href = "telaInitProdutor.html";
      }else{
          window.location.href = "telaInicial.html";
      }
      
  }


mDown(obj);