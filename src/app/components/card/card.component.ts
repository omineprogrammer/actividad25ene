import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/darkmode.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void { }
  
  swichDarkMode() { this.darkModeService.swichDarkMode() }
  
  getDarkMode() { return this.darkModeService.getDarkMode()}
  
  getBgColor() {
    if (this.getDarkMode()) {
      return 'black'
    } else {
      return 'white'
    }
  }

}
