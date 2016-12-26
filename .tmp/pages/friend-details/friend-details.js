import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export var FriendDetails = (function () {
    /**
      Constructor
    */
    function FriendDetails(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        // retrived friends params using NavParams
        this.friend = this.params.get("friend");
        // friend count using keys to length
        this.friendCount = Object.keys(this.friend.friends).length;
    }
    FriendDetails.decorators = [
        { type: Component, args: [{
                    selector: 'page-friend-details',
                    templateUrl: 'friend-details.html'
                },] },
    ];
    /** @nocollapse */
    FriendDetails.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return FriendDetails;
}());
//# sourceMappingURL=friend-details.js.map