const seatsLeft = document.getElementById("seats-left");
const seats = document.querySelectorAll(".kbd");
const addedSeats = document.getElementById("added-seat");
const fare = document.getElementById("fare").innerText;
const dynamicName = document.getElementById("seat-name");
const coupon1 = "NEW15";
const coupon2 = "Couple 20";
const apply = document.getElementById("coupon-apply");
const couponInput = document.getElementById("coupon-input");
const dynamicClass = document.getElementById("class");
const dynamicPrice = document.getElementById("price");
const taka = document.getElementById("taka");
const finalAmount = document.getElementById("final-taka");
const next = document.getElementById("next");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const bookedSeat = [];
let sum = 1;
for (const seat of seats) {
  seat.addEventListener("click", function () {
    const text = seat.innerText;
    if (bookedSeat.includes(text) === false) {
      const price = parseInt(fare);
      bookedSeat.push(text);
      if (bookedSeat.length > 4) {
        return alert("You can't buy more than 4 tickets");
      }
      const values = addedSeats.innerText;
      const convertedValues = parseInt(values);
      const value = seatsLeft.innerText;
      const convertedValue = parseInt(value);
      const concat = convertedValues + 1;
      const minus = convertedValue - 1;
      addedSeats.innerText = concat;
      seatsLeft.innerText = minus;
      seat.classList.add("seat-bg", "text-white");
      const p = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      p.innerText = text;
      p2.innerText = price;
      p3.innerText = "Economy";
      dynamicName.appendChild(p);
      dynamicPrice.appendChild(p2);
      dynamicClass.appendChild(p3);
      const increment = sum++;
      const totalCost = increment * price;
      taka.innerText = totalCost;
      grandTotal();
      if(bookedSeat.length === 4){
        couponInput.addEventListener("keyup", function (event) {
          const text = event.target.value;
          if (text === "NEW15" || text === "Couple 20") {
            apply.removeAttribute("disabled");
            apply.classList.remove("bg-gray-300", "text-black");
          }else{
            apply.setAttribute('disabled',true);
            apply.classList.add("bg-gray-300", "text-black")
          }
        });
    }
    }
  });
}


if (apply.hasAttribute("disabled")) {
  apply.classList.add("bg-gray-300", "text-black");
}


function grandTotal() {
  const couponField = document.getElementById("coupon-field");
  const value = couponInput.value;
  const amount = document.getElementById("taka");
  const convert = amount.innerText;
  const convertedAmount = parseInt(convert);
  finalAmount.innerText = convertedAmount;
  if (value == "Couple 20") {
    const discount = document.getElementById('discount');
    const discountPrice = convertedAmount * 0.2;
    const total = convertedAmount - discountPrice;
    finalAmount.innerText = total;
    couponField.classList.add("hidden");
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    p.classList.add("inter" ,"font-medium", "text-base", "text-[rgb(3,7,18)]");
    p2.classList.add("inter" ,"font-medium", "text-base", "text-[rgb(3,7,18)]");
    p2.innerText = '20% discount :'
    p.innerText = discountPrice;
    discount.appendChild(p2)
    discount.appendChild(p);
    couponInput.value = "";
  } else if (value == "NEW15") {
    const discount = document.getElementById('discount');
    const discountPrice = convertedAmount * 0.15;
    const total = convertedAmount - discountPrice;
    finalAmount.innerText = total;
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    p.classList.add("inter" ,"font-medium", "text-base", "text-[rgb(3,7,18)]");
    p2.classList.add("inter" ,"font-medium", "text-base", "text-[rgb(3,7,18)]");
    p2.innerText = '15% discount :'
    p.innerText = discountPrice;
    discount.appendChild(p2);
    discount.appendChild(p);
    couponInput.value = "";

    couponField.classList.add("hidden");
  } else {
    if (value === "" || value != "NEW15" || value != "Couple 20") {
      finalAmount.innerText = convertedAmount;
    }
  }
}

if (next.hasAttribute("disabled")) {
  next.classList.add("bg-gray-300", "text-black");
}

function validateInput() {
  const text = name.value;
  const number = phone.value;
  const convert = parseInt(number);

  if (text != "" && typeof text === "string" && !isNaN(convert) && number != "") {
    next.removeAttribute("disabled");
    next.classList.remove("bg-gray-300", "text-black");
  }
}

name.addEventListener("keyup", validateInput);
phone.addEventListener("keyup", validateInput);

// function setTextFirst(appendId,value){
//     const element = document.createElement('p');
//     element.innerText = value;
//     const div = document.getElementById(appendId);
//     // div.appendChild(element);
//     div.appendChild(element);
//     // append.insertBefore(element,append.children[0]);

// }