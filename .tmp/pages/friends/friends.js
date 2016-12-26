import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendDetails } from '../friend-details/friend-details';
import { FriendsData } from '../../providers/friends-data';
export var FriendsPage = (function () {
    /**
    */
    function FriendsPage(navCtrl, friendsData, ngZone) {
        this.navCtrl = navCtrl;
        this.friendsData = friendsData;
        this.ngZone = ngZone;
        this.friends = [];
    }
    /**
      [ngOnInit description]
      This event fire any time when user access to the view
    */
    FriendsPage.prototype.ngOnInit = function () {
        var _this = this;
        // get all exercises using an observer and add
        // exercises using push method with the value
        // retrieved of firebase
        this.friendsData.friends().subscribe(function (friend) {
            console.log(friend);
            _this.ngZone.run(function () {
                _this.friends.push(friend);
            });
        });
    };
    /**
      [friendDetails description]
      Return friend details and redirecto to details page
    */
    FriendsPage.prototype.friendDetails = function (friend) {
        this.navCtrl.push(FriendDetails, { friend: friend });
    };
    /**
    */
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('Hello Friends Page');
    };
    FriendsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-friends',
                    templateUrl: 'friends.html'
                },] },
    ];
    /** @nocollapse */
    FriendsPage.ctorParameters = [
        { type: NavController, },
        { type: FriendsData, },
        { type: NgZone, },
    ];
    return FriendsPage;
}());
//# sourceMappingURL=friends.js.map