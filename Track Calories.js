document.addEventListener("DOMContentLoaded", function (event) {

 let user1 = function(foodname, calories){
 this.foodname = foodname;
 this.calories = parseInt(calories);
 }
UserCalorie = [];
});
function userinfo(){
let user1= {
 foodname: document.getElementById("foodname").value,
 calories: document.getElementById("Calories").value,
 }
document.getElementById("foodname").value = "";
document.getElementById("Calories").value = "";

UserCalorie.push(user1);
console.log(UserCalorie);

let num = 0;

for( let i=0; i < UserCalorie.length; i++){
       num += parseInt(UserCalorie[i].calories ) ;
    
}
document.getElementById("CaloriesTotal").value = num;
}


    


