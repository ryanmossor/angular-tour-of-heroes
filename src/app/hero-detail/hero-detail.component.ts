import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  // @Input decorator necessary to receive data from parent component via 1-way property binding
  @Input() hero?: Hero;
}
