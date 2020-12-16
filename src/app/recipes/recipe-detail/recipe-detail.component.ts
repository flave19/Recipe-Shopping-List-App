import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  //input coming from recipe(parent) and can now pass {{recipe.name}} and other attributes to html
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
