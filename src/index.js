
document.addEventListener("DOMContentLoaded", () => {
   let showDrinks = document.getElementById("allDrinksBtn")
   showDrinks.addEventListener("click", () => {console.log("I have been clicked")})
   getDrinkList()
})

let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"

function getDrinkList(){
   //make the api fetch GET request
   const ul = document.getElementById("drinkList")
   fetch(url)
   .then((resp)=>resp.json())
   .then((json)=> {
      (json.drinks).forEach(element => {
         console.log(element.strDrink)
         ul.innerHTML += `<li><a href="# id="drinkName">${element.strDrink}</a></li>`
    })
   }
   )
   displayDrinkList()
}


function displayDrinkList(){
   //populate ul with li's containing drink names

}