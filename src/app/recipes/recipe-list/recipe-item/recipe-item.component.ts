import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //[recipe] property is being bound to 'recipe' below  with input
  // input is used to connect the information coming from recipe-list(parent) to update child component
  @Input() recipe: Recipe;
    // @ output is sending recipe item selected in html up a folder to recipe list
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeSelected.emit()
  }

}
