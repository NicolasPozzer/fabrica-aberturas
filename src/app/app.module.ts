import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RedesComponent } from './components/redes/redes.component';
import { LoginComponent } from './components/login/login.component';
import { EditAberturaComponent } from './components/catalogo/edit-abertura/edit-abertura.component';
import { NewAberturaComponent } from './components/catalogo/new-abertura/new-abertura.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    NavbarComponent,
    RedesComponent,
    LoginComponent,
    EditAberturaComponent,
    NewAberturaComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
