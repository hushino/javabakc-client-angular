import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Serie } from '../../models/serie';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
  providers: [DataService]
})
export class SerieComponent implements OnInit {


  constructor(public dataService: DataService, private activeroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataService.getAll()
      .subscribe(res => {
        this.dataService.serie = res as Serie[];
      });

  }
  onShowSerie(id: number) {
    this.dataService.getSerieById(id);
    this.router.navigate(['/series', id]);
  }

}
