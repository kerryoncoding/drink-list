
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
         ul.innerHTML += `<li>${element.strDrink}</li>`
         // const li = document.createElement("li")
         // li.className = "drinkName"
         // li.append(element.strDrink)
         // ul.append(li)
         // console.log(document.getElementById("drinkName"))
         //.addEventListener("click", ()=> console.log('drink has been selected'))
      })
   }
   )
   displayDrinkList()
}


function displayDrinkList(){
   //populate ul with li's containing drink names

}