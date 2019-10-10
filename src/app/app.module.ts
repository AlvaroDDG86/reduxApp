import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrs
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { componentReducer } from './components/components.reducer';

import { AppComponent } from './app.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { NietoComponent } from './components/nieto/nieto.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: componentReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
