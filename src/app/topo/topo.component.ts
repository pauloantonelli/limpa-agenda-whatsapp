import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
  public logo = 'https://zoominit.com.br/whatsapp/imagens/logo-178x49.jpg';
  constructor() { }

  ngOnInit() {
  }

}
