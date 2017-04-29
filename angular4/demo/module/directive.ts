import {Component} from '@angular/core';
@Component({
    selector: 'my-demo',
    template: `
        <h1>Angular directives collection</h1>
        <a routerLink="/Directive1">Directive1</a>
        <a routerLink="/Directive2">Directive2</a>
        <router-outlet></router-outlet>
    `
})
class BootComponent {}
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {Directive1Component} from './../src/directive/Component/Directive1Component';
import {Directive2Component} from './../src/directive/Component/Directive2Component';
const appRoutes: Routes = [
    {path: 'Directive1', component: Directive1Component},
    {path: 'Directive2', component: Directive2Component},
];
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '/',
        }
    ],
    declarations: [BootComponent, Directive1Component, Directive2Component],
    bootstrap: [BootComponent]
})
class AppModule {}
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule);