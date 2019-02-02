import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {


  homes = [];

  episodeId = [];

  SerieList2 = [];

  constructor(public dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getHome()
      .subscribe(res => {
        this.dataService.serie = res as Serie[];
      }); /* .subscribe(data => {
      this.homes = data;
    }); */
    /*   this.route.params.subscribe(params => {
         this.dataService.getUniqueEpisode(params['id'],params['id']).subscribe(data => {
           this.episodeId = data
         })
       });  */

  }
  onShowEpisode(id: number, id2: number) {
    /* this.dataService.getUniqueEpisode(id, id2).subscribe(datas => {
      this.SerieList2 = datas;
      console.log(datas)
    }) */
    this.router.navigate(['', id, id2]);
  }

}
