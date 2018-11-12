var btnList=document.querySelectorAll('.btn-group .btn');
var totalQty=document.getElementsByName('totalQty')[0];

// //获取所有加号按钮
// var increaseBtns=document.getElementsByName('totalQty');
// //为所有加号注册单机事件
// // for(let i=0;i<increaseBtns.length;i++){
// //     increaseBtns[i].addEventListener('click',increaseValue);
// // }
var btnadd=document.getElementsByName('increase');
var btnzero=document.getElementsByName('qty');
var btnjf=document.getElementsByName('decrease');
var btncart=document.getElementsByName('addToCart');

console.log(btncart);
for(var i=0;i<btnadd.length;i++)
{
    btnadd[i].addEventListener('click',increaseValue);
}

for(var i=0;i<btnjf.length;i++)
{
    btnjf[i].addEventListener('click',decreaseValue);
}

for(var i=0;i<btncart.length;i++)
{     btncart[i].addEventListener('click',addToCart);
}




// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch(element.name){
//             case 'increase':element.addEventListener('click',increaseValue);break;
//             case 'decrease':element.addEventListener('click',decreaseValue);break;
//             case 'addToCart':element.addEventListener('click',addToCart);break;
//         }        
//     }
// }
function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}
