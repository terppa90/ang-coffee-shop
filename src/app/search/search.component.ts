import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: String = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // IF searchTerm has any value
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  search(): void {
    // Check if we have a valid search term
    if (this['searchTerm'])
      this.router.navigateByUrl('/search/' + this.searchTerm);
  }
}
