import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule,ModalModule   } from 'ngx-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module'
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { httpInterceptorProviders } from './common/http-interceptors'
import { AuthService } from './common/service/auth.service'
import { AuthGuard } from './common/service/auth-guard.service';
import { SessionStorage } from './common/session.storage';
import { ConfirmWindowComponent } from './common/modal/confirm-modal'

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: { timeout: 1000} };

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ConfirmWindowComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'BMS' }),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    TypeaheadModule,
    ModalModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  entryComponents:[AppComponent, ConfirmWindowComponent],
  providers: [AuthService, AuthGuard, httpInterceptorProviders, SessionStorage,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
 }
