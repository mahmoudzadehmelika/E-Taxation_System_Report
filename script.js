const calculateBtn = document.getElementById("calculateBtn");

function formatNumber(number) {
  return Number(number).toLocaleString("fa-IR");
}

function calculateTax(income) {
  let rate = 0;

  if (income <= 100000000) {
    rate = 0.10;
  } else if (income <= 300000000) {
    rate = 0.15;
  } else {
    rate = 0.20;
  }

  const tax = income * rate;

  return {
    rate,
    tax
  };
}

if (calculateBtn) {
  calculateBtn.addEventListener("click", function () {
    const incomeInput = document.getElementById("incomeInput");
    const resultBox = document.getElementById("resultBox");
    const incomeResult = document.getElementById("incomeResult");
    const rateResult = document.getElementById("rateResult");
    const taxResult = document.getElementById("taxResult");

    const income = Number(incomeInput.value);

    if (!income || income <= 0) {
      alert("لطفاً مبلغ درآمد را به صورت عددی و صحیح وارد کنید.");
      return;
    }

    const result = calculateTax(income);

    incomeResult.textContent = `${formatNumber(income)} تومان`;
    rateResult.textContent = `${result.rate * 100}٪`;
    taxResult.textContent = `${formatNumber(result.tax)} تومان`;

    resultBox.classList.remove("hidden");
  });
}
