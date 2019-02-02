import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Serie } from '../../models/serie';
import { toast } from 'bulma-toast';

declare var M: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DataService]
})
export class DashboardComponent implements OnInit {

  // series = [];
  constructor(public dataService: DataService, private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.getSerie();
  }

  getSerie() {
    this.dataService.getAll()
      .subscribe(res => {
        this.dataService.serie = res as Serie[];
      });
  }

  addSerie(form?: NgForm) {
    console.log(form.value);

    this.dataService.addSerie(form.value)
      .subscribe(res => {
        this.getSerie();
        this.resetForm(form);
        toast({ message: 'Save successfully', type: 'is-info' });
      });

  }

  updateSerie(form?: NgForm) {
    console.log(form.value);
    this.dataService.updateSerie(form.value)
      .subscribe(res => {
        this.resetForm(form);
        toast({ message: 'Updated Successfully', type: 'is-success' });
      });
  }


  editSerie(serie: Serie) {
    this.dataService.selectedSerie = serie;
  }

  deleteSerie(id: number, form: NgForm) {
    if (confirm('Are you sure you want to delete it?')) {
      this.dataService.deleteSerie(id)
        .subscribe(res => {
          this.getSerie();
          this.resetForm(form);
          toast({ message: 'Deleted Succesfully', type: 'is-danger' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.dataService.selectedSerie = new Serie();
    }
  }

}
