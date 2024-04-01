import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [
        RouterOutlet
    ],
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'src';
}
