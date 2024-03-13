import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { _isNumberValue } from '@angular/cdk/coercion';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '0';
  primoClick = true;
  saveNumber = 0;
  operation = "";

  buttons: string[] = ["7", "8", "9", "+", "Back", "4", "5", "6", "-", "Ans", "1", "2", "3", "X", "RND", "0", ".", "AC ", "/", "="];

  clicked = (b: string) => {
    if (this.primoClick) {

      if (_isNumberValue(b)) this.title = b;
      this.primoClick = false;
    } else {

      if (_isNumberValue(b)) this.title += b;

      if (b == "+" || b == "-" || b == "X" || b == "/") {

        this.saveNumber = parseInt(this.title);
        this.title = "0";
        this.primoClick = true;

      }


    }



  }
}
