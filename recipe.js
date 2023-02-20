// Define built-in recipes
const recipes = [
    {
      name: "Scrambled Eggs",
      ingredients: ["eggs", "milk", "butter", "salt", "pepper"]
    },
    {
      name: "Grilled Cheese Sandwich",
      ingredients: ["bread", "cheese", "butter"]
    },
    {
      name: "Caesar Salad",
      ingredients: ["romaine lettuce", "parmesan cheese", "croutons", "caesar dressing"]
    },
    {
      name: "Tomato Soup",
      ingredients: ["tomatoes", "onion", "garlic", "vegetable broth"]
    },
    {
      name: "Spaghetti Bolognese",
      ingredients: ["spaghetti", "ground beef", "onion", "garlic", "tomato sauce"]
    }
  ];
  
  // Add new recipe function
  const addNewRecipe = () => {
    let recipeName = document.getElementById("recipeName").value;
    let recipeIngredients = document.getElementById("recipeIngredients").value;
    // Convert the input string to an array of lowercase ingredients
    recipeIngredients = recipeIngredients.toLowerCase().split(", ");
    // Add the new recipe to the recipes array
    recipes.push({
      name: recipeName,
      ingredients: recipeIngredients
    });
    // Confirm that the new recipe was added
    alert("Recipe added successfully:\n\n- Name: " + recipeName + "\n- Ingredients: " + recipeIngredients.join(", "));
  };
  
  // Show available recipes function
  const showAvailableRecipes = () => {
    let availableIngredients = document.getElementById("availableIngredients").value;
    // Convert the input string to an array of lowercase ingredients
    availableIngredients = availableIngredients.toLowerCase().split(", ");
    // Filter the recipes to find those that can be made with the available ingredients
    const matchedRecipes = recipes.filter(recipe => {
      return recipe.ingredients.every(ingredient => availableIngredients.includes(ingredient.toLowerCase()));
    });
    // Display the matching recipes
    let matchingRecipesDiv = document.getElementById("matchingRecipes");
    if (matchedRecipes.length > 0) {
      let html = "<ul>";
      for (let i = 0; i < matchedRecipes.length; i++) {
        html += "<li>" + matchedRecipes[i].name + "</li>";
      }
      html += "</ul>";
      matchingRecipesDiv.innerHTML = html;
    } else {
      matchingRecipesDiv.innerHTML = "No matching recipes found.";
    }
  };
  