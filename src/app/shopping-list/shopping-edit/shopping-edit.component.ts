import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // #nameInput = local ref from html
  @ViewChild('nameInput',{static:false})nameInputRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  //output passing object with parameters needed in onAddItem to be passed to shopping-list (parent)
  @Output() ingredientAdded = new EventEmitter<{name:string, amount:number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
