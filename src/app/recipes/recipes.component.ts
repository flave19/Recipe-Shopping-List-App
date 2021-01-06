import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService ) { }
  // injects recipe and now all components with this injection, use the same instance of this service

  ngOnInit(): void {
    this.recipeService.recipeSelected
    .subscribe(// will listen and update on this
      (recipe: Recipe) =>{
        this.selectedRecipe = recipe;// the selected recipe is = recipe from the event
      }
    )
  }

}
