import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // recipe is comparing to string within click listener in header
  // loaded feature will be added as ngIf condition in the app html to render recipe or shopping list
  loadedFeature = 'recipe';

  //onNavigate is created to pass featureSelected from header component via the app html
  onNavigate(feature: string){//feature is simply a parameter name not the same as header comp
    this.loadedFeature = feature
  }
}
