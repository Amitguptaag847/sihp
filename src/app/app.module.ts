import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HistoryComponent } from './history/history.component';
import { MaterialsComponent } from './materials/materials.component';
import { WastageComponent } from './wastage/wastage.component';

import { HistoryService } from './history.service';
import { MaterialsService} from './materials.service';
import { WastageService } from './wastage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HistoryComponent,
    MaterialsComponent,
    WastageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HistoryService,
    MaterialsService,
    WastageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
