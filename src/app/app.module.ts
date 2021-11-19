import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { AppState } from './app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: true,
      compatibility: { strictContentSecurityPolicy: false },
      selectorOptions: { injectContainerState: false, suppressErrors: false },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
