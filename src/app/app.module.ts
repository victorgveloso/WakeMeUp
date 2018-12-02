import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlarmePage } from '../pages/alarme/alarme';
import { NovoPage } from '../pages/novo/novo';
import { HistoricoPage } from '../pages/historico/historico';
import { AmigosPage } from '../pages/amigos/amigos';

@NgModule({
  declarations: [
    MyApp,
    AlarmePage,
    NovoPage,
    AmigosPage,
    HistoricoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlarmePage,
    NovoPage,
    AmigosPage,
    HistoricoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
