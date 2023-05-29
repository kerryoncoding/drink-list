//first event listener - DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
   let showDrinks = document.getElementById("allDrinksBtn")
   //second event listener - CLICK
   showDrinks.addEventListener("click", () => {getDrinkList()})
   getDrinkList()
})

let url = "https://www.thecocktaildb.com/api/json/v1/1"

function getDrinkList(){
   //make the api fetch GET request
   const ul = document.getElementById("drinkList")
   ul.innerHTML = ""
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
   //another click event listener
   element.addEventListener("click", () => {
   ul = document.getElementById("drinkList")
   ul.innerHTML = ""
   console.log(element)
   console.log(element.dataset.id)
   fetch(url + `/lookup.php?i=${element.dataset.id}`)
      .then((resp)=>resp.json())
      .then((data)=> {
         let ingredients = getIngrdientsList(data)
         ul.innerHTML = `
         <h2>${data.drinks[0].strDrink}</h2>
         <p><strong>Ingredients: </strong></p>
         <p>${ingredients}</p>
         <p><strong>Instructions: </strong></p>
         <p> ${data.drinks[0].strInstructions}</p>
         <img class="picture" src="${data.drinks[0].strDrinkThumb}" alt="image of ${data.drinks[0].strDrink}">
         `
         let image = document.querySelector('img')
         image.addEventListener("mouseover", ()=> alert(`Serve in a ${data.drinks[0].strGlass}`))
   
            //   console.log(data.drinks[0].strIngredient1)
            //   console.log(data.drinks[0].strIngredient15)
      })
      
   })
}

function getIngrdientsList(data){
   let ingredientArr = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3, data.drinks[0].strIngredient4, data.drinks[0].strIngredient5, data.drinks[0].strIngredient6, data.drinks[0].strIngredient7, data.drinks[0].strIngredient8, data.drinks[0].strIngredient9, data.drinks[0].strIngredient10, data.drinks[0].strIngredient11, data.drinks[0].strIngredient12, data.drinks[0].strIngredient13, data.drinks[0].strIngredient14, data.drinks[0].strIngredient15]
 //  console.log(ingredientArr)
   let ingredientShortArr = []
   ingredientArr.forEach((element)=> {
      if (element != null){
         ingredientShortArr.push(element)
      }
   })
   const ingredientString = (ingredientShortArr.join(", "))
   return (ingredientString)
}