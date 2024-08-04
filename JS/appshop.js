
var produits=[];

function AjouterProduit() {
const prod = document.getElementById('prod').value;
if (prod!='') {
    const obj = {title: prod, createddate: new Date()};
    produits.push(obj);
    initView(); 
    document.getElementById('prod').value='';
}    
}

function formatDate(date){
return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
}

function initView() {
    let list = document.getElementById('list');
list.innerHTML='';
produits.map((prod,index)=>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${prod.title}</div>
${formatDate(prod.createddate)}    </div>
    <span class="">
    <button class="btn btn-sm btn-danger " onclick="removeProduct(${index})">Remove</button>
    </span>
  </li> `;
  list.innerHTML+=html;
})

}



function removeProduct(index) {
    produits.splice(index,1);
    initView();
    
}