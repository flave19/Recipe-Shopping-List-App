import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  ///Output decorator is needed to send this information to the app component outside this folder.
  @Output() featureSelected = new EventEmitter<string>()
  //featureSelected will now be usable outside header component in app component

  onSelect(feature: string){// feature is simply a parameter, the string is from click listener
    this.featureSelected.emit(feature);
  };
  collapsed = true;
}
