import { Injectable, Pipe } from '@angular/core';
/**
 Pipe to convert [object object] into a single array
*/
export var ObjectToArray = (function () {
    function ObjectToArray() {
    }
    ObjectToArray.prototype.transform = function (val) {
        return Array.isArray(val)
            ? val : [val];
    };
    ObjectToArray.decorators = [
        { type: Pipe, args: [{
                    name: 'objectToArray'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    ObjectToArray.ctorParameters = [];
    return ObjectToArray;
}());
//# sourceMappingURL=objectToArray.js.map