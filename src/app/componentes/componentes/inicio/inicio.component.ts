import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/Service/Notas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  notasList: any []=[];

  constructor( private Notassvc:NotasService){

  }

  ngOnInit(): void {
    this.Notassvc.getAll().subscribe((result:any)=>{
      this.notasList=result;
    console.log("result")})
  }

}
