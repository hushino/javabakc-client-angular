import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-serie-by-id',
  templateUrl: './serie-by-id.component.html',
  styleUrls: ['./serie-by-id.component.scss'],
  providers: [DataService]
})
export class SerieByIdComponent implements OnInit {


  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.dataService.getSerieById(params['id'])
        .subscribe(res => {
          this.dataService.serie = res as Serie[];
        });
    });
    // this.getUrl();
  }
  onShowEpisode(id: number, id2: number) {
    this.router.navigate(['', id, id2]);
  }
  /*   getUrl() {
      // tslint:disable-next-line:quotemark
      return "url('https:// cdn.discordapp.com/attachments/423287746547810324/513538646880813076/3035.jpg')";
    } */
  onShowTag(id: number, name: string) {
    this.router.navigate(['tag/genre/', id, name]);
  }
}
