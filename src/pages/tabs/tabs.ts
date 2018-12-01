import { Component } from '@angular/core';
import { AmigosPage } from '../amigos/amigos';
import { HistoricoPage } from '../historico/historico';
import { NovoPage } from '../novo/novo';
import { AlarmePage } from '../alarme/alarme';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabAlarmes = AlarmePage;
  tabNovo = NovoPage;
  tabHistorico = HistoricoPage;
  tabAmigos = AmigosPage;

  constructor() {

  }
}
