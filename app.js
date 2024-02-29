const allSeats = document.querySelectorAll(".kbd");
const newSeat = [];
const apply = document.getElementById("coupon-apply");
let sum = 1;
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const next = document.getElementById('next');
if(apply.hasAttribute('disabled')){
  apply.classList.add('bg-gray-300','text-black');
}
for (const seat of allSeats) {
  seat.style.cursor = "pointer";
  const div = document.getElementById("seat-name");
  const div1 = document.getElementById("class");
  const div2 = document.getElementById("price");
  const name = document.createElement("p");
  const classes = document.createElement("p");
  const price = document.createElement("p");
  seat.addEventListener("click", function () {
    const seatName = seat.innerText;
    if (newSeat.includes(seatName) === false) {
      if (newSeat.length >= 4) {
        return alert("You can't buy more than 4 seats");
      }
      
      newSeat.push(seatName);
      // adding seat names & price
      const fare = convertToNumber("fare");
      price.innerText = fare;
      name.innerText = seatName;
      classes.innerText = "Economy";
      div.appendChild(name);
      div1.appendChild(classes);
      div2.appendChild(price);
      //   adding colors to button
      seat.classList.add("bg-[rgb(29,209,0)]", "text-white");
      //   button color ends here
      const left = document.getElementById("seats-left");
      const added = document.getElementById("added-seat");
      const seatsLeft = convertToNumber("seats-left");
      const addedSeat = convertToNumber("added-seat");
      // adding seat count to checkout
      added.innerText = addedSeat + 1;
      // substracting from total seat
      left.innerText = seatsLeft - 1;
      //   total calculation
      const taka = document.getElementById("taka");
      taka.innerText = totalPrice();
      sum++;
      grandTotal();
      if(newSeat.length === 4){
        apply.classList.remove('bg-gray-300','text-black');
        apply.removeAttribute('disabled');
      }
    } else {
      const index = newSeat.indexOf(seatName);
      newSeat.splice(index, 1);
      div.removeChild(name);
      div1.removeChild(classes);
      div2.removeChild(price);
      //   removing colors from button
      seat.classList.remove("bg-[rgb(29,209,0)]", "text-white");
      // button color ends here
      if(newSeat.length !== 4){
        apply.setAttribute('disabled',true);
        apply.classList.add('bg-gray-300','text-black');
      }
      const left = document.getElementById("seats-left");
      const added = document.getElementById("added-seat");
      const seatsLeft = convertToNumber("seats-left");
      const addedSeat = convertToNumber("added-seat");
      added.innerText = addedSeat - 1;
      // substracting from total seat
      left.innerText = seatsLeft + 1;
      const taka = document.getElementById("taka");
      const moneyMinus = parseInt(taka.innerText);
      const substractingAmout = moneyMinus - 550;
      taka.innerText = substractingAmout;
      sum = 1;
      const grand = document.getElementById("final-taka");
      const convertGrand = parseInt(grand.innerText);
      const final = convertGrand - 550;
      grand.innerText = final;
    }
  });
}

function convertToNumber(id) {
  const element = document.getElementById(id).innerText;
  const number = parseInt(element);
  return number;
}

function totalPrice() {
  const fare = convertToNumber("fare");
  const total = fare * sum;
  return total;
}
apply.addEventListener("click", function () {
  const discountField = document.getElementById('discount');
  const couponField = document.getElementById('coupon-field');
  const grand = document.getElementById("final-taka");
  const convert = parseInt(grand.innerText);
  const couponInput = document.getElementById("coupon-input");
  const value = couponInput.value;
  if (value === "NEW15") {
    const discount = convert * 0.15;
    const final = convert - discount;
    grand.innerText = final;
    couponField.classList.add('hidden');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    p1.innerText = 'Discount';
    p.classList.add('inter','font-medium','text-base','text-[rgb(3,7,18)]');
    p1.classList.add('inter','font-medium','text-base','text-[rgb(3,7,18)]');
    p.innerText = `BDT ${discount}`;
    discountField.appendChild(p1);
    discountField.appendChild(p);
  } else if (value === "Couple 20") {
    const discount = convert * 0.2;
    const final = convert - discount;
    grand.innerText = final;
    couponField.classList.add('hidden');
    const p1 = document.createElement('p');
    p1.innerText = 'Discount';
    const p = document.createElement('p');
    p.classList.add('inter','font-medium','text-base','text-[rgb(3,7,18)]');
    p1.classList.add('inter','font-medium','text-base','text-[rgb(3,7,18)]');
    p.innerText = `BDT ${discount}`;
    discountField.appendChild(p1);
    discountField.appendChild(p);
  } else {
    grand.innerText = convert;
  }
});

if(next.hasAttribute('disabled')){
  next.classList.add('bg-gray-300','text-black');
}

function validateForm(){
  const text = name.value;
  const number = phone.value;
  const convert = parseInt(number);
  if(text !== '' && typeof text === 'string' && !isNaN(convert) && number !== ''){
    next.removeAttribute('disabled');
    next.classList.remove('bg-gray-300','text-black');
  }
}
name.addEventListener('keyup',validateForm);
phone.addEventListener('keyup',validateForm);
function grandTotal() {
  const grand = document.getElementById("final-taka");
  const taka = document.getElementById("taka");
  const amount = parseInt(taka.innerText);
  grand.innerText = amount;
}
