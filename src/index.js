
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
        // console.log(element.idDrink)
         ul.innerHTML += `<li><a href="#" data-id="${element.idDrink}" class="drinkName">${element.strDrink}</a></li>`
    })
   const linkArry = document.querySelectorAll(".drinkName")
   //linkArry.forEach((e)=> console.log(e.dataset.id))
  // console.log($(this).data("id"))
   linkArry.forEach(element => element.addEventListener("click", ()=> console.log(element.dataset.id)))
   })
}

