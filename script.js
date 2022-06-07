const erreurBudget = document.querySelector(".erreurBudget");
const erreurExpense = document.querySelector(".erreurExpense");
const budgetInput = document.getElementById('budgetInput');
const expenseInput = document.getElementById('expenseInput');
const amountInput = document.getElementById('amountInput');
const balanceTotal = document.getElementById('balanceTotal');
const balanceExpense = document.getElementById('balanceExpense');
const balanceValue = document.getElementById('balanceValue');
const btnExpense = document.getElementById('addExpense');
const btncal= document.getElementById('calElem');
const container = document.getElementById('container')
let budget=0
let expenTotal =[];
let gaspil =0;
let i = 0;

 btncal.addEventListener('click', (e)=>{
     e.preventDefault()
     const value = budgetInput.value;
     if (value ===""|| value <  0){
        erreurBudget.style.display = 'block';
        budgetInput.value = ""
        setTimeout(function() {
          erreurBudget.style.display = 'none';
        }, 3000);
        }else {
            budget = budgetInput.value;
            balanceTotal.textContent= budget;
            balanceValue.textContent = budget;
            budgetInput.value="";
        }
   
 });


 btnExpense.addEventListener('click', (e) =>{
     e.preventDefault();const expenseValue = expenseInput.value;
     const amountValue = amountInput.value;
     if(expenseValue ===""||amountValue===""|| amountValue <0){
       erreurExpense.style.display ='block';
       setTimeout(function() {
         erreurExpense.style.display ='none';
       }, 3000);
    }else{

   
     expenTotal =[]
     expenTotal.push({nom:expenseInput.value,prix:amountInput.valueAsNumber})
    gaspil += amountInput.valueAsNumber;
    balanceExpense.textContent = gaspil;
    balanceValue.textContent = budget - gaspil;
     expenseInput.value = "";
     amountInput.value = "";
    
     
    expenTotal.forEach(tablo =>
    container.innerHTML+=`  
    <div class="row">
    <div class="col">
    <p>${tablo.nom}</p>
    <span class="expenseTitle"></span>
    </div>
    <div class="col">
        <p>${tablo.prix}</p>
        <span class="expenseValue"></span>
    </div>
    <div class="col">
    <button class="btn deleteEl" data-index ="${i}"><i class="bi bi-trash3-fill text-danger"></i></button>
        <button class="btn editEl" data-index ="${i}"><i class="bi bi-pencil-fill text-success"></i></button>
    </div>
           </div>
        `
       
    ) }
    i++
    console.log(i)
 
        







container.querySelectorAll(".deleteEl").forEach(btn=>
         btn.addEventListener("click",()=>{        
            let supEl= btn.parentNode.parentNode
            let valMoin = parseInt(supEl.children[1].children[0].textContent)         
            gaspil -= valMoin;
            balanceExpense.textContent = gaspil;
            balanceValue.textContent = budget - gaspil;
            container.removeChild(supEl)
        })
        )
container.querySelectorAll(".editEl").forEach(btn=>
         btn.addEventListener("click",()=>{          
            let supEl= btn.parentNode.parentNode
            let valMoin = parseInt(supEl.children[1].children[0].textContent)
            gaspil -= valMoin;
            balanceExpense.textContent = gaspil;
            balanceValue.textContent = budget - gaspil;           
            expenseInput.value =supEl.children[0].children[0].textContent;
            amountInput.value = valMoin;
            container.removeChild(supEl)           
        })
        )
 })




