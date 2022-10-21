import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/Service/Notas.service';


@Component({
  selector: 'app-escucha',
  templateUrl: './escucha.component.html',
  styleUrls: ['./escucha.component.css']
})
export class EscuchaComponent implements OnInit {

  bandasList: any []=[];

  constructor( private Bandassvc:NotasService){

  }

  ngOnInit(): void {
    this.Bandassvc.getAllBandas().subscribe((result:any)=>{
      this.bandasList=result;
    console.log("result")})
  }

}
