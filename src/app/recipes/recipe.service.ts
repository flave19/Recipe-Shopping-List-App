import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Shoyu Ramen',
      'Not your dollar store ramen',
      'https://i.pinimg.com/originals/b9/7c/28/b97c289c55ded52825e263d242e14418.jpg'
    ),
    new Recipe(
      'Spicy Fried rice',
      'Careful this spicy fried rice fights back',
      'https://i.pinimg.com/originals/05/a6/ac/05a6ac3663cb807556aebd61ebf77761.gif'
    ),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index]
  }
}
