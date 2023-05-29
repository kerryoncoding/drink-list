
document.addEventListener("DOMContentLoaded", () => {
   const showDrinks = document.getElementById("allDrinksBtn")
   showDrinks.addEventListener("click", () => {getDrinkList()})
   getDrinkList()
})


const url = "https://www.thecocktaildb.com/api/json/v1/1/"


function getDrinkList(){
   const ul = document.getElementById("drinkList")
   ul.innerHTML = ""
   const div = document.getElementById("singleDrink")
   div.innerHTML = ""
   fetch(url + `filter.php?a=Non_Alcoholic`)
   .then((resp)=>resp.json())
   .then((json)=> {
      (json.drinks).forEach(element => {
         ul.innerHTML += `<li><a href="#" data-id="${element.idDrink}" class="drinkName">${element.strDrink}</a></li>`
      })
      addLinksToList()
   })
}


function addLinksToList(){
   const linkArry = document.querySelectorAll(".drinkName")
   linkArry.forEach(element => getDrinkDetails(element))
  }


function getDrinkDetails(element){

   element.addEventListener("click", () => {
      const ul = document.getElementById("drinkList")
      ul.innerHTML = ""
      const div = document.getElementById("singleDrink")
      fetch(url + `lookup.php?i=${element.dataset.id}`)
      .then((resp)=>resp.json())
      .then((data)=> {
         const ingredients = getIngrdientsList(data)
         div.innerHTML = `
         <h2>${data.drinks[0].strDrink}</h2>
         <p><strong>Ingredients: </strong></p>
         <p>${ingredients}</p>
         <p><strong>Instructions: </strong></p>
         <p> ${data.drinks[0].strInstructions}</p>
         <img class="picture" src="${data.drinks[0].strDrinkThumb}" alt="image of ${data.drinks[0].strDrink}">
         <div id="glass"></div>
         `
         const image = document.querySelector('img')
         const glassType = document.getElementById("glass")
         image.addEventListener("mouseover", ()=> {
            glassType.innerHTML = 
            `<h3>Serve in a ${data.drinks[0].strGlass}.</h3>`
         })
         const image2 = document.querySelector('img')
         image2.addEventListener("mouseout", ()=> {
            glassType.innerHTML = ``
         })   
      })
   })
}


function getIngrdientsList(data){
   let foo = data.drinks[0]
   let ingredientArr = [foo.strIngredient1, foo.strIngredient2, foo.strIngredient3, foo.strIngredient4, foo.strIngredient5, foo.strIngredient6, foo.strIngredient7, foo.strIngredient8, foo.strIngredient9, foo.strIngredient10, foo.strIngredient11, foo.strIngredient12, foo.strIngredient13, foo.strIngredient14, foo.strIngredient15]
   let ingredientShortArr = []
   ingredientArr.forEach((element)=> {
      if (element != null){
         ingredientShortArr.push(element)
      }
   })
   const ingredientString = (ingredientShortArr.join(", "))
   return (ingredientString)
}