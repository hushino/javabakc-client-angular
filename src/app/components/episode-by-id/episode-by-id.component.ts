import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Serie } from '../../models/serie';
declare var jwplayer: any;
@Component({
  selector: 'app-episode-by-id',
  templateUrl: './episode-by-id.component.html',
  styleUrls: ['./episode-by-id.component.scss'],
  providers: [DataService]
})
export class EpisodeByIdComponent implements OnInit {

  SerieList2 = [];
  ids = [];
  loadAPI: Promise<any>;

  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getUniqueEpisode(params['id'], params['id2']).subscribe(res => {
        this.dataService.serie = res as Serie[];
      });
    });

    /* setTimeout(() => {
       this.loadAPI = new Promise((resolve) => {
         this.loadScript('../assets/js/jwplayer.js');
       });
     this.loadAPI = new Promise((resolve) => {
       this.loadJwplayer();
     });
     }, 100);  */
  }
  onShowSerie(id: number) {
    this.dataService.getSerieById(id); /* .subscribe(datas => {
      this.SerieList2 = datas;
      // console.log(data)
    }); */
    this.router.navigate(['/series', id]);
  }

  // https://content.jwplatform.com/libraries/bfIbW5Pe.js
  // tslint:disable-next-line:use-life-cycle-interface
  async ngAfterViewInit() {
    await this.loadScript('https://content.jwplatform.com/libraries/bfIbW5Pe.js');
    setTimeout(() => {
      this.loadJwplayer();
    }, 600);
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  loadJwplayer() {
    jwplayer('player').setup({
      // playlist: 'https://cdn.jwplayer.com/v2/media/8L4m9FJB',
      file: '../assets/videos/buta.mp4',
      image: '../assets/images/asobi.png',
      width: '100%',
      height: '100%',
      aspectratio: '16:9',
      mute: false,
      autostart: false,
      primary: 'html5',
      preload: 'metadata',
      playbackRateControls: [0.25, 1, 1.25, 2],
    });
  }

}
