const BASE_URL="https://2024-03-06.currency-api.pages.dev/v1/currencies";


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");



for(let select of dropdowns){
  for(Currcode in countryList){
    let newOption = document.createElement("option");
    newOption.value = Currcode;
    newOption.innerText = countryList[Currcode];
    if(select.name === "from" && Currcode === "USD"){
      newOption.selected ="selected";
    } else if(select.name === "to" && Currcode === "BDT"){
      newOption.selected = "selected";
    }
    select.append(newOption)

  }
  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  });

}
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// btn.addEventListener("click",(evt)=>{
//   evt.preventDefault();
//   let amount = document.querySelector(".amount input");
//   let amtVal= amount.value;
//   if(amtVal === "" || amtVal <= 1){
//     // alert("Please enter a valid amount");
//     amtVal = 1;
//     amount.value = amtVal;
//     //amount.value = "1";
//   }
//   console.log(fromCurr.value,toCurr.value);

// })


// btn.addEventListener("click", (evt) => {
//   evt.preventDefault(); // ফর্ম সাবমিট বন্ধ করা
  
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;

//   // যদি ইনপুট খালি বা ভুল হয়
//   if (amtVal === "" || amtVal <= 0 || isNaN(amtVal)) {
//     amtVal = 1;
//     amount.value = amtVal;
//   }

//   // কারেন্সি কোড ছোট হাতের অক্ষরে নেওয়া
//   let from = fromCurr.value.toLowerCase();
//   let to = toCurr.value.toLowerCase();

//   // এক্সচেঞ্জ রেট API থেকে ডেটা আনা
//   fetch(`${BASE_URL}/${from}.json`)
//     .then(res => res.json())
//     .then(data => {
//       let rate = data[from][to];
//       let total = (amtVal * rate).toFixed(2);
//       document.querySelector(".msg").innerText = 
//         `${amtVal} ${fromCurr.value} = ${total} ${toCurr.value}`;
//     })
//     .catch(err => {
//       document.querySelector(".msg").innerText = "এক্সচেঞ্জ রেট আনতে সমস্যা হয়েছে।";
//     });
// });




// btn.addEventListener("click", async (evt) => {
//   evt.preventDefault(); // ফর্ম সাবমিট বন্ধ করা

//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;

//   // যদি ইনপুট খালি বা ভুল হয়
//   if (amtVal === "" || amtVal <= 0 || isNaN(amtVal)) {
//     amtVal = 1;
//     amount.value = amtVal;
//   }

//   // কারেন্সি কোড ছোট হাতের অক্ষরে নেওয়া
//   let from = fromCurr.value.toLowerCase();
//   let to = toCurr.value.toLowerCase();

//   try {
//     // এক্সচেঞ্জ রেট API থেকে ডেটা আনা
//     const res = await fetch(`${BASE_URL}/${from}.json`);
//     const data = await res.json();
    
//     let rate = data[from][to];
//     let total = (amtVal * rate).toFixed(2);
    
//     document.querySelector(".msg").innerText =
//       `${amtVal} ${fromCurr.value} = ${total} ${toCurr.value}`;
//   } catch (err) {
//     document.querySelector(".msg").innerText =
//       "এক্সচেঞ্জ রেট আনতে সমস্যা হয়েছে।";
//   }
// });






  btn.addEventListener("click", async(evt)=>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal= amount.value;
  if(amtVal === "" || amtVal <= 1){
    // alert("Please enter a valid amount");
    amtVal = 1;
    amount.value = amtVal;
    //amount.value = "1";
  }
  let from = fromCurr.value.toLowerCase();
  let to = toCurr.value.toLowerCase();
   try{
    const URL = `${BASE_URL}/${from}.json`;
    const res = await fetch(URL);
    const data = await res.json();
    let rate = data[from][to];
    let total = (amtVal * rate).toFixed(2);
    document.querySelector(".msg").innerText = 
      `${amtVal} ${fromCurr.value} = ${total} ${toCurr.value}`;
  } catch (err) {
    document.querySelector(".msg").innerText = "এক্সচেঞ্জ রেট আনতে সমস্যা হয়েছে।";
   }

})