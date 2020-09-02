import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';

@NgModule({
  declarations: [
    AppComponent,
	CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    MyLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    HttpClientModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }