
document.addEventListener("DOMContentLoaded", () => {
   let showDrinks = document.getElementById("allDrinksBtn")
   showDrinks.addEventListener("click", () => {console.log("I have been clicked")})
   getDrinkList()
})

function getDrinkList(){
   //make the api fetch GET request
   displayDrinkList()
}


function displayDrinkList(){
   //populate ul with li's containing drink names
   
}