import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Shoyu Ramen', 'Not your dollar store ramen', 'https://i.pinimg.com/originals/b9/7c/28/b97c289c55ded52825e263d242e14418.jpg'),
    new Recipe('Spicy Fried rice', 'Careful this spicy fried rice fights back', 'https://static.wikia.nocookie.net/shokugekinosoma/images/5/5b/Soma%27s_Fragranceless_Fried_Rice_%28Anime_Version%29.png/revision/latest?cb=20200911210531')
  ];


  constructor() {}

  ngOnInit(): void {}
}
