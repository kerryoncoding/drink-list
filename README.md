Non-Alcoholic dink-List

This app displays data of Non-Alcoholic Cocktails. The data is fetched from https://www.thecocktaildb.com/api.php

More specifically, the main list of non-alcholic beverages is generated from a GET fetch request to:
www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

User can click on an item from the list to display more details about that particular cocktail.  These details are generated by the "ID" (let's say 12862) of the drink, and another fetch GET request to: 
www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12862

At which point the list of drinks is removed from the DOM and replaced with the name of the drink, it's ingredients, instructions and an image of the beverage.

In addition, if the user performs a mouseover on the image, the recommended type of glass is presented below the image.  This will disappear upon a mouseout of the image. 

To return the DOM back to the original the main list of drinks, the user may click the "Show All Drinks" button.



To view a video demo of this in action: 
https://youtu.be/j0t7vp2G0nI
