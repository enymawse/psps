import { RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, inject, OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
    title = 'psps';
    mobileQuery: MediaQueryList;

    navItems = ['Discover', 'Scenes', 'Movies', 'Studios'];

    private _mobileQueryListener: () => void;

    constructor() {
        const changeDetectorRef = inject(ChangeDetectorRef);
        const media = inject(MediaMatcher);

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
