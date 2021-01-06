import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shoyu Ramen',
      'Not your dollar store ramen',
      'https://i.pinimg.com/originals/b9/7c/28/b97c289c55ded52825e263d242e14418.jpg'
    ),
    new Recipe(
      'Spicy Fried rice',
      'Careful this spicy fried rice fights back',
      'data:image/jpeg;base64,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'
    ),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
