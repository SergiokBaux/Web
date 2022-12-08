import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/Service/Notas.service';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-agrega-banda',
  templateUrl: './agrega-banda.component.html',
  styleUrls: ['./agrega-banda.component.css']
})
export class AgregaBandaComponent {
  Banda=null;

  BandaForm =  new FormGroup({
    NombreBanda: new FormControl(''),
    Ciudad: new FormControl(''),
    Fecha: new FormControl(''),
    Link: new FormControl(''),
  });

  constructor( private Bandassvc:NotasService){

  }

  ngOnInit(): void {
  }

  AltaBanda(): void
  {
    console.log(this.BandaForm.value);
    this.Bandassvc.post(this.BandaForm.value).subscribe(()=>{
      this.BandaForm.reset("");
    })

  }

}
