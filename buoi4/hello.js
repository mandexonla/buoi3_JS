// function sum() {
//     var a = parseFloat(document.getElementById('numberA').value);
//     var b = parseFloat(document.getElementById('numberB').value);
//     var sum  = a + b;
//     document.getElementById("_result").value  = sum;
//     // document.getElementById('addition').innerText = a + b;
//   }

//   function subtract() {
//     var a = parseFloat(document.getElementById('numberA').value);
//     var b = parseFloat(document.getElementById('numberB').value);

//     document.getElementById('subtraction').innerText = a - b;
//   }

//   function multiply() {
//     var a = parseFloat(document.getElementById('numberA').value);
//     var b = parseFloat(document.getElementById('numberB').value);

//     document.getElementById('multiplication').innerText = a * b;
//   }

//   function divide() {
//     var a = parseFloat(document.getElementById('numberA').value);
//     var b = parseFloat(document.getElementById('numberB').value);

//     if (b !== 0) {
//       document.getElementById('division').innerText = a / b;
//       //document.getElementById('_result').innerText = (a / b).toFixed(15);
//     } else {
//       alert("Division by zero is not allowed.");
//       document.getElementById('division').innerText = "ko dinh dang dc";
//       document.getElementById('_result').innerText = "ko dinh dang dc";
//     }
//   }

//   function calculate() {
//     sum();
//     subtract();
//     multiply();
//     divide();
//   }

// Lấy giá trị từ các ô input dựa trên ID

function Summation() {
  var number_A = parseFloat(document.getElementById("numberA").value);
  var number_B = parseFloat(document.getElementById("numberB").value);
  // Thực hiện phép cộng
  var sum = number_A + number_B;
  // Hiển thị kết quả
  document.getElementById("result").value = sum;
}
function Subtraction() {
  var number_A = parseFloat(document.getElementById("numberA").value);
  var number_B = parseFloat(document.getElementById("numberB").value);
  var Sub = number_A - number_B;
  document.getElementById("result").value = Sub;
}
function Mutiplication() {
  var number_A = parseFloat(document.getElementById("numberA").value);
  var number_B = parseFloat(document.getElementById("numberB").value);
  var Mut = number_A * number_B;
  document.getElementById("result").value = Mut;
}
function Division() {
  var number_A = parseFloat(document.getElementById("numberA").value);
  var number_B = parseFloat(document.getElementById("numberB").value);
  var Div = number_A / number_B;
  document.getElementById("result").value = Div;
}
