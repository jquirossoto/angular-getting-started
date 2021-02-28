import { Component, OnChanges, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  componentWidth = 75;
  starWidth: number;

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  constructor() { }

  ngOnInit() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
