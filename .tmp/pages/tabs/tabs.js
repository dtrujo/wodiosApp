import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { FriendsPage } from '../friends/friends';
import { ExercisesPage } from '../exercises/exercises';
import { NotebookPage } from '../notebook/notebook';
export var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = AboutPage;
        this.tab3Root = FriendsPage;
        this.tab4Root = ExercisesPage;
        this.tab5Root = NotebookPage;
    }
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [];
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map