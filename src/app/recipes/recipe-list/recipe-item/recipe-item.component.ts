import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //[recipe] property is being bound to 'recipe' below  with input
  // input is used to connect the information coming from recipe-list(parent) to update child component
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }
  // this is injecting the service sp we can use it on line 22

  ngOnInit(): void {
  }

  onSelected(){// this function is using the click listener
    this.recipeService.recipeSelected.emit(this.recipe)
    //this.recipeService= the file, recipeSelected = the method, emitting(some data), this.recipe = the single recipe item
  }

}
