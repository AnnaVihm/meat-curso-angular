import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RatingComponent } from '../shared/rating/rating.component';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports:[InputComponent, RadioComponent, CommonModule, FormsModule, ReactiveFormsModule]
})

export class SharedModule {}