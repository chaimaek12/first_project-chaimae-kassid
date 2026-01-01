let users = [];
let emails = [];

// ================== BOUCLE PRINCIPALE ==================
while (true) {
    let ask = prompt("Choose: sign up, log in, change password, exit");

    if (ask === "sign up") signup();
    else if (ask === "log in") login();
    else if (ask === "change password") changePassword();
    else if (ask === "exit") break;
}

// ================== CLASS USER ==================
class User {
    constructor(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;

        this.balance = 2000;
        this.credit = 0;
        this.invest = 0;
        this.history = [];
    }

    logout() {
        alert("Logged out");
    }

    withdrawMoney() {
        let amount = Number(prompt("Amount to withdraw"));
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push("Withdraw: " + amount);
            alert("Success. Balance: " + this.balance);
        } else {
            alert("Invalid amount");
        }
    }

    depositMoney() {
        let amount = Number(prompt("Amount to deposit (max 1000)"));
        if (amount > 0 && amount <= 1000) {
            this.balance += amount;
            this.history.push("Deposit: " + amount);
            alert("Success. Balance: " + this.balance);
        } else {
            alert("Invalid amount");
        }
    }

    takeLoan() {
        let amount = Number(prompt("Loan amount (max 20%)"));
        if (amount > 0 && amount <= 0.2 * this.balance) {
            this.balance += amount;
            this.credit += amount;
            this.history.push("Loan: " + amount);
            alert("Loan accepted. Balance: " + this.balance);
        } else {
            alert("Loan refused");
        }
    }

    investMoney() {
        let amount = Number(prompt("Amount to invest"));
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.invest += amount;
            this.balance += amount * 1.2;
            this.history.push("Invest: " + amount);
            alert("Investment done. Balance: " + this.balance);
        } else {
            alert("Invalid investment");
        }
    }
}

// ================== SIGN UP ==================
function signup() {
    let name = prompt("Enter your name").trim();
    if (name.length < 5) {
        alert("Invalid name");
        return;
    }

    let age = prompt("Enter your age").trim();
    if (!/^\d{1,2}$/.test(age)) {
        alert("Invalid age");
        return;
    }

    let email = prompt("Enter your email").trim().toLowerCase();
    if (!email.includes("@") || email.length < 10 || emails.includes(email)) {
        alert("Invalid or existing email");
        return;
    }

    let password = prompt("Enter your password").trim();
    if (password.length < 7 || password.includes(" ")) {
        alert("Invalid password");
        return;
    }

    let confirm = prompt("Confirm your password");
    if (password !== confirm) {
        alert("Passwords do not match");
        return;
    }

    let user = new User(name, email, age, password);
    users.push(user);
    emails.push(email);

    alert("Account created successfully");
}

// ================== LOGIN ==================
function login() {
    let email = prompt("Enter your email").trim().toLowerCase();
    let password = prompt("Enter your password").trim();

    let index = emails.indexOf(email);
    if (index === -1) {
        alert("Email not found");
        return;
    }

    let user = users[index];
    if (user.password !== password) {
        alert("Wrong password");
        return;
    }

    alert("Welcome " + user.name);
    bank(user);
}

// ================== CHANGE PASSWORD ==================
function changePassword() {
    let email = prompt("Enter your email").trim().toLowerCase();
    let index = emails.indexOf(email);

    if (index === -1) {
        alert("Email not found");
        return;
    }

    let newPass = prompt("New password").trim();
    let confirm = prompt("Confirm new password");

    if (newPass.length < 7 || newPass.includes(" ")) {
        alert("Invalid password");
        return;
    }

    if (newPass !== confirm) {
        alert("Passwords do not match");
        return;
    }

    users[index].password = newPass;
    alert("Password updated");
}

// ================== BANK MENU ==================
function bank(user) {
    while (true) {
        let menu = prompt(
            "Choose: balance, withdraw, deposit, loan, invest, history, logout"
        );

        if (menu === "balance") alert("Balance: " + user.balance);
        else if (menu === "withdraw") user.withdrawMoney();
        else if (menu === "deposit") user.depositMoney();
        else if (menu === "loan") user.takeLoan();
        else if (menu === "invest") user.investMoney();
        else if (menu === "history") alert(user.history.join("\n"));
        else if (menu === "logout") {
            user.logout();
            break;
        }
    }
}
