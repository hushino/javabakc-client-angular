import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Serie } from '../../models/serie';
@Component({
  selector: 'app-genre-by-id',
  templateUrl: './genre-by-id.component.html',
  styleUrls: ['./genre-by-id.component.scss'],
  providers: [DataService]
})
export class GenreByIdComponent implements OnInit {

  genreId = [];
  constructor(public dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getTagsByGenre(params['id'])
        .subscribe(res => {
          this.dataService.serie = res as Serie[];
        });
    });
  }

  getSeriesByGenre() {

  }
}
