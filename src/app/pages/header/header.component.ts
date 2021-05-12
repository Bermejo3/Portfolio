import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public mostrar:boolean=false
  constructor() { }

  mostrarMenu(){
    this.mostrar = !this.mostrar
  }

  ngOnInit(): void {
  }

}
