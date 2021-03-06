import {Component, Input, Inject} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'directive-code',
    template: `<pre>{{code}}</pre>`,
})

export class DirectiveCodeComponent {
    code: String = 'Set your src';

    constructor(
        @Inject(Http) private http: Http
    ) {}

    @Input()
    set src(src) {
        this.code = 'Loading';
        this.http.get(src)
        .subscribe(
            (data) => {
                this.code = (data.text());
            },
            (error) => {
                this.code = (`Error Http ${src}`);
            }
        );
    }
}
