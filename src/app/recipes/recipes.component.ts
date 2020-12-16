import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  //onSelected(item html) >recipeSelected (item.ts > list.html)> onRecipeSelected() (list.html > list.ts)>
  //  >recipeWasSelected (list.ts > recipe.html) > selectedRecipe(recipe.html>recipe.ts) > [recipe]=selectedRecipe(recipe.html > detail.ts) )
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
