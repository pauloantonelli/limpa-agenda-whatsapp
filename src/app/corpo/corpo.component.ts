import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.scss']
})
@NgModule({
  imports: [
    FormsModule,
  ]
})
export class CorpoComponent implements OnInit {
  public plataforma: any;
  public ddi = 55;
  public ddd: number;
  public telefone: number;
  public mensagem: string;
  public erros: string;
  public OnOffdisplay: string;
  public ddds: any = [
    { ddd: '', name: 'Escolha o DDD'},
    { ddd: 11, name: 'São Paulo' },
    { ddd: 12, name: 'Santos' },
    { ddd: 13, name: 'São Vicente' },
  ];
  public selectedValue: any;
  constructor() {
    if (this.selectedValue === undefined) {
      this.selectedValue = this.ddds[0];
    }
    this.plataforma = () => {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            ) {
            return true;
        } else {
            return false;
        }
    };
  }
detecta(tel: number) {
  this.ddd = this.selectedValue.ddd;
  if (this.mensagem === undefined) {
    this.mensagem = 'Oi ';
  }
  if (this.plataforma() === true) {
    this.tel(tel);
  } else {
    this.web(tel);
  }
}
web(tel) {
  if (tel === null) {
    this.erros = 'digite um numero';
    (<HTMLElement>document.getElementById('displayErros')).style.display = 'block';
  } else {
    (<HTMLElement>document.getElementById('displayErros')).style.display = 'none';
    window.open('https://web.whatsapp.com/send?phone=' + this.ddi + this.ddd + this.telefone + '&text=' + this.mensagem);
  }
}
tel(tel) {
  if (tel === null) {
    this.erros = 'digite um numero';
    (<HTMLElement>document.getElementById('displayErros')).style.display = 'block';
  } else {
    (<HTMLElement>document.getElementById('displayErros')).style.display = 'none';
    window.open('https://api.whatsapp.com/send?phone=' + this.ddi + this.ddd + this.telefone + '&text=' + this.mensagem);
    }
}

  ngOnInit() {
  }
}
