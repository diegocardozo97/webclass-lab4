const history = [];
let actual_expression = [];

function $(query) {
  return document.querySelector(query);
}

function getInputNumberOrNull() {
  const inputNumber = parseFloat($(".inputNumber").value);

  return isNaN(inputNumber) ? null : inputNumber;
}

function onClickReset() {
  console.log("Reset");

  actual_expression = [];
  $(".inputNumber").value = "";
}

function onClickEqual() {
  console.log("Equal");

  const lastNumberOrNull = getInputNumberOrNull();
  if (lastNumberOrNull === null) {
    alert("First add a number.");
    return;
  }

  if (actual_expression.length == 0) {
    return;
  }
  actual_expression.push(lastNumberOrNull);

  const str_expression = actual_expression.join("");
  console.log(`Expression: ${str_expression}`);

  const result = eval(str_expression);
  $("#resultValue").value = result;

  history.unshift(str_expression + " = " + result);
  $("#logInformation").value = history.join("\n");

  actual_expression = [];
  $(".inputNumber").value = "";
}

function onClickOperation(op) {
  console.log(`Operation ${op}`);

  const inputNumber = getInputNumberOrNull();

  if (inputNumber !== null) {
    $(".inputNumber").value = "";
    actual_expression.push(inputNumber);
    actual_expression.push(op);
    return;
  }

  alert("First add a number.");
}