/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './tabs';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import11 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import12 from 'ionic-angular/navigation/nav-controller';
import * as import13 from 'ionic-angular/navigation/view-controller';
import * as import14 from 'ionic-angular/components/app/app';
import * as import15 from 'ionic-angular/config/config';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from 'ionic-angular/platform/platform';
import * as import18 from 'ionic-angular/navigation/deep-linker';
import * as import19 from 'ionic-angular/util/keyboard';
import * as import20 from '@angular/core/src/zone/ng_zone';
import * as import21 from '@angular/core/src/linker/component_factory_resolver';
import * as import22 from 'ionic-angular/gestures/gesture-controller';
import * as import23 from 'ionic-angular/transitions/transition-controller';
import * as import24 from 'ionic-angular/components/tabs/tab';
import * as import25 from 'ionic-angular/components/tabs/tabs';
export var Wrapper_TabsPage = (function () {
    function Wrapper_TabsPage() {
        this.changed = false;
        this.context = new import0.TabsPage();
    }
    Wrapper_TabsPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_TabsPage;
}());
var renderType_TabsPage_Host = null;
var _View_TabsPage_Host0 = (function (_super) {
    __extends(_View_TabsPage_Host0, _super);
    function _View_TabsPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabsPage_Host0, renderType_TabsPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabsPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TabsPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TabsPage_0_4 = new Wrapper_TabsPage();
        this._appEl_0.initComponent(this._TabsPage_0_4.context, [], compView_0);
        compView_0.create(this._TabsPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_TabsPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.TabsPage) && (0 === requestNodeIndex))) {
            return this._TabsPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_TabsPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TabsPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_TabsPage_Host0;
}(import1.AppView));
function viewFactory_TabsPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabsPage_Host === null)) {
        (renderType_TabsPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TabsPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var TabsPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_TabsPage_Host0, import0.TabsPage);
var styles_TabsPage = [];
var renderType_TabsPage = null;
var _View_TabsPage0 = (function (_super) {
    __extends(_View_TabsPage0, _super);
    function _View_TabsPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_TabsPage0, renderType_TabsPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_TabsPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-tabs', null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import10.viewFactory_Tabs0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Tabs_0_4 = new import10.Wrapper_Tabs(this.parentInjector.get(import12.NavController, null), this.parentInjector.get(import13.ViewController, null), this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), new import16.ElementRef(this._el_0), this.parentInjector.get(import17.Platform), this.renderer, this.parentInjector.get(import18.DeepLinker));
        this._appEl_0.initComponent(this._Tabs_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_2, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_2, 'tabIcon', 'md-home');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Tab0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Tab_2_4 = new import11.Wrapper_Tab(this._Tabs_0_4.context, this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), this.parentInjector.get(import19.Keyboard), new import16.ElementRef(this._el_2), this.parentInjector.get(import20.NgZone), this.renderer, this.parentInjector.get(import21.ComponentFactoryResolver), compView_2.ref, this.parentInjector.get(import22.GestureController), this.parentInjector.get(import23.TransitionController), this.parentInjector.get(import18.DeepLinker, null));
        this._appEl_2.initComponent(this._Tab_2_4.context, [], compView_2);
        compView_2.create(this._Tab_2_4.context, [], null);
        this._text_3 = this.renderer.createText(null, '\n  ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_4, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_4, 'tabIcon', 'md-hand');
        this._appEl_4 = new import3.AppElement(4, 0, this, this._el_4);
        var compView_4 = import11.viewFactory_Tab0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Tab_4_4 = new import11.Wrapper_Tab(this._Tabs_0_4.context, this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), this.parentInjector.get(import19.Keyboard), new import16.ElementRef(this._el_4), this.parentInjector.get(import20.NgZone), this.renderer, this.parentInjector.get(import21.ComponentFactoryResolver), compView_4.ref, this.parentInjector.get(import22.GestureController), this.parentInjector.get(import23.TransitionController), this.parentInjector.get(import18.DeepLinker, null));
        this._appEl_4.initComponent(this._Tab_4_4.context, [], compView_4);
        compView_4.create(this._Tab_4_4.context, [], null);
        this._text_5 = this.renderer.createText(null, '\n  ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_6, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_6, 'tabIcon', 'md-people');
        this._appEl_6 = new import3.AppElement(6, 0, this, this._el_6);
        var compView_6 = import11.viewFactory_Tab0(this.viewUtils, this.injector(6), this._appEl_6);
        this._Tab_6_4 = new import11.Wrapper_Tab(this._Tabs_0_4.context, this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), this.parentInjector.get(import19.Keyboard), new import16.ElementRef(this._el_6), this.parentInjector.get(import20.NgZone), this.renderer, this.parentInjector.get(import21.ComponentFactoryResolver), compView_6.ref, this.parentInjector.get(import22.GestureController), this.parentInjector.get(import23.TransitionController), this.parentInjector.get(import18.DeepLinker, null));
        this._appEl_6.initComponent(this._Tab_6_4.context, [], compView_6);
        compView_6.create(this._Tab_6_4.context, [], null);
        this._text_7 = this.renderer.createText(null, '\n  ', null);
        this._el_8 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_8, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_8, 'tabIcon', 'md-trophy');
        this._appEl_8 = new import3.AppElement(8, 0, this, this._el_8);
        var compView_8 = import11.viewFactory_Tab0(this.viewUtils, this.injector(8), this._appEl_8);
        this._Tab_8_4 = new import11.Wrapper_Tab(this._Tabs_0_4.context, this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), this.parentInjector.get(import19.Keyboard), new import16.ElementRef(this._el_8), this.parentInjector.get(import20.NgZone), this.renderer, this.parentInjector.get(import21.ComponentFactoryResolver), compView_8.ref, this.parentInjector.get(import22.GestureController), this.parentInjector.get(import23.TransitionController), this.parentInjector.get(import18.DeepLinker, null));
        this._appEl_8.initComponent(this._Tab_8_4.context, [], compView_8);
        compView_8.create(this._Tab_8_4.context, [], null);
        this._text_9 = this.renderer.createText(null, '\n  ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_10, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_10, 'tabIcon', 'md-book');
        this._appEl_10 = new import3.AppElement(10, 0, this, this._el_10);
        var compView_10 = import11.viewFactory_Tab0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Tab_10_4 = new import11.Wrapper_Tab(this._Tabs_0_4.context, this.parentInjector.get(import14.App), this.parentInjector.get(import15.Config), this.parentInjector.get(import19.Keyboard), new import16.ElementRef(this._el_10), this.parentInjector.get(import20.NgZone), this.renderer, this.parentInjector.get(import21.ComponentFactoryResolver), compView_10.ref, this.parentInjector.get(import22.GestureController), this.parentInjector.get(import23.TransitionController), this.parentInjector.get(import18.DeepLinker, null));
        this._appEl_10.initComponent(this._Tab_10_4.context, [], compView_10);
        compView_10.create(this._Tab_10_4.context, [], null);
        this._text_11 = this.renderer.createText(null, '\n', null);
        compView_0.create(this._Tabs_0_4.context, [[].concat([
                this._text_1,
                this._el_2,
                this._text_3,
                this._el_4,
                this._text_5,
                this._el_6,
                this._text_7,
                this._el_8,
                this._text_9,
                this._el_10,
                this._text_11
            ])], null);
        this._text_12 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12
        ], [], []);
        return null;
    };
    _View_TabsPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.Tab) && (2 === requestNodeIndex))) {
            return this._Tab_2_4.context;
        }
        if (((token === import24.Tab) && (4 === requestNodeIndex))) {
            return this._Tab_4_4.context;
        }
        if (((token === import24.Tab) && (6 === requestNodeIndex))) {
            return this._Tab_6_4.context;
        }
        if (((token === import24.Tab) && (8 === requestNodeIndex))) {
            return this._Tab_8_4.context;
        }
        if (((token === import24.Tab) && (10 === requestNodeIndex))) {
            return this._Tab_10_4.context;
        }
        if (((token === import25.Tabs) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Tabs_0_4.context;
        }
        return notFoundResult;
    };
    _View_TabsPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Tabs_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_0 = this.context.tab1Root;
        this._Tab_2_4.check_root(currVal_0, throwOnChange, false);
        var currVal_1 = 'md-home';
        this._Tab_2_4.check_tabIcon(currVal_1, throwOnChange, false);
        this._Tab_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        var currVal_4 = this.context.tab2Root;
        this._Tab_4_4.check_root(currVal_4, throwOnChange, false);
        var currVal_5 = 'md-hand';
        this._Tab_4_4.check_tabIcon(currVal_5, throwOnChange, false);
        this._Tab_4_4.detectChangesInternal(this, this._el_4, throwOnChange);
        var currVal_8 = this.context.tab3Root;
        this._Tab_6_4.check_root(currVal_8, throwOnChange, false);
        var currVal_9 = 'md-people';
        this._Tab_6_4.check_tabIcon(currVal_9, throwOnChange, false);
        this._Tab_6_4.detectChangesInternal(this, this._el_6, throwOnChange);
        var currVal_12 = this.context.tab4Root;
        this._Tab_8_4.check_root(currVal_12, throwOnChange, false);
        var currVal_13 = 'md-trophy';
        this._Tab_8_4.check_tabIcon(currVal_13, throwOnChange, false);
        this._Tab_8_4.detectChangesInternal(this, this._el_8, throwOnChange);
        var currVal_16 = this.context.tab5Root;
        this._Tab_10_4.check_root(currVal_16, throwOnChange, false);
        var currVal_17 = 'md-book';
        this._Tab_10_4.check_tabIcon(currVal_17, throwOnChange, false);
        this._Tab_10_4.detectChangesInternal(this, this._el_10, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = this._Tab_2_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementAttribute(this._el_2, 'id', ((currVal_2 == null) ? null : currVal_2.toString()));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Tab_2_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementAttribute(this._el_2, 'aria-labelledby', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_6 = this._Tab_4_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementAttribute(this._el_4, 'id', ((currVal_6 == null) ? null : currVal_6.toString()));
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Tab_4_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementAttribute(this._el_4, 'aria-labelledby', ((currVal_7 == null) ? null : currVal_7.toString()));
            this._expr_7 = currVal_7;
        }
        var currVal_10 = this._Tab_6_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementAttribute(this._el_6, 'id', ((currVal_10 == null) ? null : currVal_10.toString()));
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._Tab_6_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementAttribute(this._el_6, 'aria-labelledby', ((currVal_11 == null) ? null : currVal_11.toString()));
            this._expr_11 = currVal_11;
        }
        var currVal_14 = this._Tab_8_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementAttribute(this._el_8, 'id', ((currVal_14 == null) ? null : currVal_14.toString()));
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._Tab_8_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementAttribute(this._el_8, 'aria-labelledby', ((currVal_15 == null) ? null : currVal_15.toString()));
            this._expr_15 = currVal_15;
        }
        var currVal_18 = this._Tab_10_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementAttribute(this._el_10, 'id', ((currVal_18 == null) ? null : currVal_18.toString()));
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._Tab_10_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementAttribute(this._el_10, 'aria-labelledby', ((currVal_19 == null) ? null : currVal_19.toString()));
            this._expr_19 = currVal_19;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Tabs_0_4.context.ngAfterViewInit();
            }
        }
    };
    _View_TabsPage0.prototype.destroyInternal = function () {
        this._Tabs_0_4.context.ngOnDestroy();
    };
    return _View_TabsPage0;
}(import1.AppView));
export function viewFactory_TabsPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabsPage === null)) {
        (renderType_TabsPage = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_TabsPage, {}));
    }
    return new _View_TabsPage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=tabs.ngfactory.js.map