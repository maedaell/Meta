import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CompromissoPage } from '../pages/compromisso/compromisso';
import { CategoriasPage } from '../pages/categorias/categorias';
import { MetasPage } from '../pages/metas/metas';
import { MetasService } from '../services/metas.service';
import { MetaPage } from '../pages/meta/meta';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CompromissoPage,
    CategoriasPage,
    MetasPage,
    MetaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CompromissoPage,
    CategoriasPage,
    MetasPage,
    MetaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MetasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
