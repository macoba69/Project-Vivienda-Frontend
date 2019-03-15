import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, 
         MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatRadioModule, MatCheckboxModule, MatNativeDateModule,
         MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule, MatDialogModule,
         MatExpansionModule, MatGridListModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
         MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSortModule, MatStepperModule, MatTabsModule, MatTooltipModule,
         MatTreeModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';    
import { TrabajadoresService } from '../../../frontend/src/app/services/trabajadores.service';
import { ListComponent } from './components/shared/list/list.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { LoginComponent } from './components/shared/login/login.component';
import { CreateComponent } from './components/shared/create/create.component';
import { UpdateComponent } from './components/shared/update/update.component';
import { InformeComponent } from './components/shared/informe/informe.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ListComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'informe', component: InformeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'} 
];


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    MenuComponent,
    LoginComponent,
    InformeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule ,
    MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,
    MatDatepickerModule,
    MatRadioModule, 
    MatCheckboxModule, 
    MatNativeDateModule,
    MatAutocompleteModule,
    MatBadgeModule, 
    MatBottomSheetModule, 
    MatButtonToggleModule, 
    MatChipsModule, 
    MatDialogModule,
    MatExpansionModule, 
    MatGridListModule, 
    MatListModule, 
    MatMenuModule, 
    MatPaginatorModule, 
    MatProgressBarModule, 
    MatProgressSpinnerModule,
    MatRippleModule, 
    MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSortModule, MatStepperModule, MatTabsModule, MatTooltipModule,
    MatTreeModule, ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [TrabajadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
