// Login
let Submit = document.getElementById("Submit");
Submit.addEventListener('click', function(){
    let Login = document.getElementById("Login-bar");
    Login.style.display = "none";
    let BankArea = document.getElementById("bank-area");
    BankArea.style.display = "block";
});
// Deposit Button Function.
let DepositButton = document.getElementById("DepositBUtton");
DepositButton.addEventListener('click', function(){
    let Input1 = document.getElementById("Deposit-Value").value;
    let Input1ToNumber = parseFloat(Input1);
    let CurrentDeposit = document.getElementById("desposit-Value").innerText;
    let CurrentDepositToNumber = parseFloat(CurrentDeposit);
    let totalDeposit =  Input1ToNumber + CurrentDepositToNumber;
    document.getElementById("desposit-Value").innerText = totalDeposit;

    let currentBalance = document.getElementById("balance-Balue").innerText;
    let CurrentNumber = parseFloat(currentBalance);
    let totalBalance = Input1ToNumber + CurrentNumber;
    document.getElementById("balance-Balue").innerText = totalBalance;

    document.getElementById("Deposit-Value").value= "";
});
// WithDraw.
let WithDrawButon = document.getElementById("withdrawBUtton");
WithDrawButon.addEventListener('click', function(){
    let Input2 = document.getElementById("Input2").value;
    let Input2ToNumber = parseFloat(Input2);
    let CurrentWithdraw = document.getElementById("withDraw-value").innerText;
    let CurrentWithdrawToNumber = parseFloat(CurrentWithdraw);
    let TotalWithDraw = Input2ToNumber + CurrentWithdrawToNumber;
    document.getElementById("withDraw-value").innerText = TotalWithDraw;

    let CurrentBalance2 = document.getElementById("balance-Balue").innerText;
    let CurrentBalance2ToNumber = parseFloat(CurrentBalance2);
    let totalWithdrawBalance = CurrentBalance2ToNumber - Input2ToNumber;
    document.getElementById("balance-Balue").innerText = totalWithdrawBalance;
    document.getElementById("Input2").value = "";
})