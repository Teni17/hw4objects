let user1 = function(foodname, calories){
 this.foodname = foodname;
 this.calories = parseInt(calories);
 }
UserCalorie = [];

function userinfo(){
let user1= {
 foodname: document.getElementById("foodname").value,
 calories: document.getElementById("Calories").value
}
document.getElementById("foodname").value = "";
document.getElementById("Calories").value = "";

UserCalorie.push(user1);
console.log(UserCalorie);
}

function totalcalories(){
    let calorietotal = 0;
   // calorietotal = document.getElementById("CaloriesTotal").value;
   // for(i=0; i < UserCalorie.length; i++){
        //  calorietotal = UserCalorie[i];

//    }
    

}
