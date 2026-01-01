// const prompt = require("prompt-sync")();
//*ncree data fen aykon endi dakchy b3da 
let users = [];
let emails=[]
let passwords=[]

while (true ){  // mahed luser madarch exist atb9a t3awed endi lboucle 


    let ask = prompt("Choose: sign up, log in, change password, or exit");

    if (ask === "sign up") signup();
    else if(ask === "log in") login();
    else if (ask === "change password") changermdp();
      else if (ask==="exit") break

}



class User {
    constructor(name, email, age, password,passwordConfirmed ) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        this.passwordConfirmed=passwordConfirmed;
         this.historique=[]
         this.lflousli3ndo=2000
         this.credit=0
         this.invest=0
   
    }


// *ankhdem partie lkhra as a methode  fluser 
//deconexion
logout(user){
    //hady gi bach taffichy leh chhal endo dyal lflous 
    if(ask===("login in")){
        console.log(this.lflousli3ndo);
        

    }
    
}
//retirer l'argent
withdrawMoney(){
    let argent= Number(prompt("chhal bgity tkhrej dyal lflou?"))
    if(argent<=this.lflousli3ndo){
        alert("ok t9der tkhrej lflous ")
        this.lflousli3ndo-=argent
       

    }else{
        alert("invalid operation")
    }
}
 
depositMoney(){
    let money= Number(prompt("chhal bgyty thet dyal lfous"))
    if(money<1000){
        this.lflousli3ndo+=money
    this.historique.push(`${money}`)
    }else{
        alert("invalid operation")
    }

}
//credit
takeALoan(){
    let credit= Number(prompt("chhal lcredit li bgity takhod ?"))
   if( credit <= 0,2*this.lflousli3ndo){//dakchy li3ndo sger mn 20% dyal dakchy li bga flcredit
     this.lflousli3ndo+=credit
     this.credit =+credit   //dek li lcredit li 3tetha 0 flclass ayt3mr blcredi li khda 
     if(ask===login){this.lflousli3ndo-=this.credit*0,1
        
     }
  
     this.historique.push(`${credit}`)


   } else{
    alert("credit refused")
   }





}
invest(){
    let montant= Number(prompt("choisir un montant a investir"))
    this.lflousli3ndo+=this.lflousli3ndo*0,2
    this.invest+=montant   //inv kan khawi flcalass ay3mer 
     this.historique.push(`${montant}`)
}
 historique(){}
}














 function signup () {

      let name=prompt("enter tour name ").trim()
//           //*condition dyal  name
   if( (name.length<5    && !name.includes("@")   &&  name===name[0].toUpperCase()+name.slice(1) ) ){
    alert("your name is invalid")
    return}

        let age=prompt("enter your age")

//         //*condition dyal age 
   age =age.trim()
   if ( !  ( age!=='' && age.length >0 && age.length<3  )){

    alert("your age isn't valid")
    return

   }
        let email=prompt("enter your email")


//         //*conditions dyal email
 email= email.trim().toLowerCase()
 if( !(email.length>10   && !email.includes(" ")  && email.split("@").length===2)){
    alert("your email is invalid")
    return}
    if(emails.includes(email)){
        alert ("your email est deja utiliser ")
        return
    }
    

 
        let password=prompt("enter your password")
//         //*condition dyal password
password=password.trim() 
 if(! ( password.length>=7 &&!password.includes(" ")  ) ){
 
    alert("your passworl is invalid")
    return
 }

        let Password_confirmed=prompt("confirmer ton password")
//         //*password confirmee
if( password!==Password_confirmed){
            alert("password ne matche pas password-confirmed")
            return
        }

let user =new User(name,email,age ,password)
users.push(user)
emails.push(email)
    }

// Fonction login
function login(){

         let email=prompt("enter your email")
        let password=prompt("enter your password")
        if(User.email===email && User.password===password){
            alert("welcome ")


        }else{
            alert(" we don't have this email")

        }
        
            
        }
         


    


// Fonction changer mot de passe
function changermdp(){
   let askemail=prompt("enter ur email")
   if ( emails.includes(askemail)){
    alert("you can changer tn mdp ")

//*or une autre methode blindexof
// let index =emails.indexOf(email)
// if(index===-1){
//     alert("email not found")
//     return
// }


    let newmdp=prompt("enter your new mdp")
    let Password_confirmed=prompt("enter you password confirmed ")
     
    
    if( newmdp.length>=7 &&!newmdp.includes(" ")   ){
 alert ("your passworld is valid ")
 } else {
    alert("your passworl is invalid")
 }





    if ( newmdp===Password_confirmed){
        alert("your mdp is valid")

    }else{
        alert("your mdp is invalid")
    }


    //*pour stoker le nouveau mdp 


   


    let chercher=emails.indexOf(askemail)
    users[chercher].password=newmdp
    alert("now you your new mpd is apdates")
   


   
}


}


function bank(user) {
    let menu = prompt(" choose logout or withdraw or deposit or loan or invest or historique");

    if (menu === "logout") {
        user.logout();
        return;
    }

    if (menu === "withdraw") {
        user.withdrawMoney();
    }

    if (menu === "deposit") {
        user.depositMoney();
    }

    if (menu === "loan") {
        user.takeALoan();
    }

    if (menu === "invest") {
        user.invest();
    }

    if (menu === "historique") {
        alert(user.historique);
    }
}








// ## First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.
