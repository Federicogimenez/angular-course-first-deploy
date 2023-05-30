// a-component to create a component using snnipet by the ease-way 

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    template: ''
})

export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}


// a-module to create a module using snnipets

import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [],
    declarations: [NameComponent],
    providers: [],
})
export class NameModule { }
