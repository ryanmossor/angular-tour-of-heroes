import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  // @Input decorator necessary to receive data from parent component via 1-way property binding
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute, // holds info about the route (e.g., route params) to this instance of the component
    private heroService: HeroService, // gets hero data from remote server; component displays this data
    private location: Location // Angular service for interacting w/ browser; lets you navigate to previous view
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot: static image of the route info shortly after component was created
    // paramMap: dictionary of route param values extracted from URL; 'id' key returns ID of the hero to fetch
    // Number() used since route params are always strings, and we want hero's ID to be a number
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
