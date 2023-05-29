
document.addEventListener("DOMContentLoaded", () => {
   let showDrinks = document.getElementById("allDrinksBtn")
   showDrinks.addEventListener("click", () => {console.log("I have been clicked")})
   getDrinkList()
})

let url = "https://www.thecocktaildb.com/api/json/v1/1"

function getDrinkList(){
   //make the api fetch GET request
   const ul = document.getElementById("drinkList")
   fetch(url + `/filter.php?a=Non_Alcoholic`)
   .then((resp)=>resp.json())
   .then((json)=> {
      (json.drinks).forEach(element => {
        // console.log(element.idDrink)
         ul.innerHTML += `<li><a href="#" data-id="${element.idDrink}" class="drinkName">${element.strDrink}</a></li>`
    })
    addLinksToList()
})
}


function addLinksToList(){
   const linkArry = document.querySelectorAll(".drinkName")
   //linkArry.forEach((e)=> console.log(e.dataset.id))
   // console.log($(this).data("id"))
   linkArry.forEach(element => getDrinkDetails(element))
  }


function getDrinkDetails(element){
   element.addEventListener("click", () => {
   document.getElementById("drinkList").innerHTML = ""
   console.log(element)
   console.log(element.dataset.id)
   fetch(url + `/lookup.php?i=${element.dataset.id}`)
      .then((resp)=>resp.json())
      .then((data)=> {
              console.log(data.drinks[0].strDrink)
              console.log(data.drinks[0].strIngredient1)
              console.log(data.drinks[0].strIngredient15)
              console.log(data.drinks[0].strInstructions)
              console.log(data.drinks[0].strDrinkThumb)
      })
   })
}