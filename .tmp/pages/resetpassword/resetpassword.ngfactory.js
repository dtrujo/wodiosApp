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
import * as import0 from './resetpassword';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/forms/src/form_builder';
import * as import10 from '../../providers/auth-data';
import * as import11 from 'ionic-angular/components/loading/loading';
import * as import12 from 'ionic-angular/components/alert/alert';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import19 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import20 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import21 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import22 from '@angular/core/src/linker/query_list';
import * as import23 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import24 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import26 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import27 from 'ionic-angular/config/config';
import * as import28 from '@angular/core/src/linker/element_ref';
import * as import29 from 'ionic-angular/navigation/view-controller';
import * as import30 from 'ionic-angular/components/app/app';
import * as import31 from 'ionic-angular/components/toolbar/toolbar';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from 'ionic-angular/util/form';
import * as import36 from 'ionic-angular/components/item/item-reorder';
import * as import37 from 'ionic-angular/platform/platform';
import * as import38 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import39 from 'ionic-angular/components/navbar/navbar';
import * as import40 from 'ionic-angular/components/label/label';
import * as import41 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import42 from '@angular/forms/src/directives/ng_control';
import * as import43 from '@angular/forms/src/directives/ng_control_status';
import * as import44 from 'ionic-angular/components/input/input';
import * as import45 from 'ionic-angular/components/item/item';
import * as import46 from 'ionic-angular/components/button/button';
import * as import47 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import48 from '@angular/forms/src/directives/control_container';
import * as import49 from 'ionic-angular/components/content/content';
export var Wrapper_ResetPasswordPage = (function () {
    function Wrapper_ResetPasswordPage(p0, p1, p2, p3, p4, p5) {
        this.changed = false;
        this.context = new import0.ResetPasswordPage(p0, p1, p2, p3, p4, p5);
    }
    Wrapper_ResetPasswordPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ResetPasswordPage;
}());
var renderType_ResetPasswordPage_Host = null;
var _View_ResetPasswordPage_Host0 = (function (_super) {
    __extends(_View_ResetPasswordPage_Host0, _super);
    function _View_ResetPasswordPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResetPasswordPage_Host0, renderType_ResetPasswordPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResetPasswordPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ResetPasswordPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ResetPasswordPage_0_4 = new Wrapper_ResetPasswordPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.FormBuilder), this.parentInjector.get(import8.NavController), this.parentInjector.get(import10.AuthData), this.parentInjector.get(import11.LoadingController), this.parentInjector.get(import12.AlertController));
        this._appEl_0.initComponent(this._ResetPasswordPage_0_4.context, [], compView_0);
        compView_0.create(this._ResetPasswordPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ResetPasswordPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ResetPasswordPage) && (0 === requestNodeIndex))) {
            return this._ResetPasswordPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_ResetPasswordPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ResetPasswordPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ResetPasswordPage_Host0;
}(import1.AppView));
function viewFactory_ResetPasswordPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ResetPasswordPage_Host === null)) {
        (renderType_ResetPasswordPage_Host = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, [], {}));
    }
    return new _View_ResetPasswordPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ResetPasswordPageNgFactory = new import14.ComponentFactory('ng-component', viewFactory_ResetPasswordPage_Host0, import0.ResetPasswordPage);
var styles_ResetPasswordPage = [];
var renderType_ResetPasswordPage = null;
var _View_ResetPasswordPage0 = (function (_super) {
    __extends(_View_ResetPasswordPage0, _super);
    function _View_ResetPasswordPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResetPasswordPage0, renderType_ResetPasswordPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResetPasswordPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import15.Wrapper_Header(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import29.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this._appEl_3 = new import3.AppElement(3, 1, this, this._el_3);
        var compView_3 = import16.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import16.Wrapper_Navbar(this.parentInjector.get(import30.App), this.parentInjector.get(import29.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        var compView_5 = import17.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import17.Wrapper_ToolbarTitle(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import31.Toolbar, null), this._Navbar_3_4.context);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4.context, [], compView_5);
        this._text_6 = this.renderer.createText(null, 'resetpassword', null);
        compView_5.create(this._ToolbarTitle_5_4.context, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_4,
                this._el_5,
                this._text_7
            ])
        ], null);
        this._text_8 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'reset-password');
        this.renderer.setElementAttribute(this._el_10, 'padding', '');
        this._appEl_10 = new import3.AppElement(10, null, this, this._el_10);
        var compView_10 = import18.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import18.Wrapper_Content(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import30.App), this.parentInjector.get(import32.Keyboard), this.parentInjector.get(import33.NgZone), this.parentInjector.get(import29.ViewController, null), this.parentInjector.get(import34.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4.context, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n\n  ', null);
        this._el_12 = this.renderer.createElement(null, 'form', null);
        this.renderer.setElementAttribute(this._el_12, 'novalidate', '');
        this._FormGroupDirective_12_3 = new import19.Wrapper_FormGroupDirective(null, null);
        this._ControlContainer_12_4 = this._FormGroupDirective_12_3.context;
        this._NgControlStatusGroup_12_5 = new import20.Wrapper_NgControlStatusGroup(this._ControlContainer_12_4);
        this._text_13 = this.renderer.createText(this._el_12, '\n\n      ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'item item-block');
        this._appEl_14 = new import3.AppElement(14, 12, this, this._el_14);
        var compView_14 = import21.viewFactory_Item0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Item_14_4 = new import21.Wrapper_Item(this.parentInjector.get(import35.Form), this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import36.ItemReorder, null));
        this._ItemContent_14_5 = new import21.Wrapper_ItemContent();
        this._query_Label_14_0 = new import22.QueryList();
        this._query_Button_14_1 = new import22.QueryList();
        this._query_Icon_14_2 = new import22.QueryList();
        this._appEl_14.initComponent(this._Item_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n        ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_16, 'stacked', '');
        this._Label_16_3 = new import23.Wrapper_Label(this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_16), this.renderer, null, '', null, null);
        this._text_17 = this.renderer.createText(this._el_16, 'Email', null);
        this._text_18 = this.renderer.createText(null, '\n        ', null);
        this._el_19 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_19, 'formControlName', 'email');
        this.renderer.setElementAttribute(this._el_19, 'placeholder', 'Your email address');
        this.renderer.setElementAttribute(this._el_19, 'type', 'email');
        this._appEl_19 = new import3.AppElement(19, 14, this, this._el_19);
        var compView_19 = import25.viewFactory_TextInput0(this.viewUtils, this.injector(19), this._appEl_19);
        this._FormControlName_19_4 = new import24.Wrapper_FormControlName(this._ControlContainer_12_4, null, null, null);
        this._NgControl_19_5 = this._FormControlName_19_4.context;
        this._NgControlStatus_19_6 = new import20.Wrapper_NgControlStatus(this._NgControl_19_5);
        this._TextInput_19_7 = new import25.Wrapper_TextInput(this.parentInjector.get(import27.Config), this.parentInjector.get(import35.Form), this._Item_14_4.context, this.parentInjector.get(import30.App), this.parentInjector.get(import37.Platform), new import28.ElementRef(this._el_19), this.renderer, this._Content_10_4.context, this.parentInjector.get(import8.NavController, null), this._NgControl_19_5);
        this._appEl_19.initComponent(this._TextInput_19_7.context, [], compView_19);
        compView_19.create(this._TextInput_19_7.context, [], null);
        this._text_20 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_14_0.reset([this._Label_16_3.context]);
        this._Item_14_4.context.contentLabel = this._query_Label_14_0.first;
        compView_14.create(this._Item_14_4.context, [
            [],
            [].concat([this._el_16]),
            [].concat([
                this._text_15,
                this._text_18,
                this._text_20
            ]),
            [].concat([this._el_19]),
            []
        ], null);
        this._text_21 = this.renderer.createText(this._el_12, '\n\n      ', null);
        this._el_22 = this.renderer.createElement(this._el_12, 'button', null);
        this.renderer.setElementAttribute(this._el_22, 'block', '');
        this.renderer.setElementAttribute(this._el_22, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_22, 'type', 'submit');
        this._appEl_22 = new import3.AppElement(22, 12, this, this._el_22);
        var compView_22 = import26.viewFactory_Button0(this.viewUtils, this.injector(22), this._appEl_22);
        this._Button_22_4 = new import26.Wrapper_Button(null, '', this.parentInjector.get(import27.Config), new import28.ElementRef(this._el_22), this.renderer);
        this._appEl_22.initComponent(this._Button_22_4.context, [], compView_22);
        this._text_23 = this.renderer.createText(null, '\n        Reset your Password\n      ', null);
        compView_22.create(this._Button_22_4.context, [[].concat([this._text_23])], null);
        this._text_24 = this.renderer.createText(this._el_12, '\n\n    ', null);
        this._text_25 = this.renderer.createText(null, '\n\n', null);
        compView_10.create(this._Content_10_4.context, [
            [],
            [].concat([
                this._text_11,
                this._el_12,
                this._text_25
            ]),
            []
        ], null);
        this._text_26 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_12, 'submit', this.eventHandler(this._handle_submit_12_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_12, 'reset', this.eventHandler(this._handle_reset_12_1.bind(this)));
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._text_26
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ResetPasswordPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import38.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4.context;
        }
        if (((token === import39.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4.context;
        }
        if (((token === import31.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3.context;
        }
        if (((token === import40.Label) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Label_16_3.context;
        }
        if (((token === import41.FormControlName) && (19 === requestNodeIndex))) {
            return this._FormControlName_19_4.context;
        }
        if (((token === import42.NgControl) && (19 === requestNodeIndex))) {
            return this._NgControl_19_5;
        }
        if (((token === import43.NgControlStatus) && (19 === requestNodeIndex))) {
            return this._NgControlStatus_19_6.context;
        }
        if (((token === import44.TextInput) && (19 === requestNodeIndex))) {
            return this._TextInput_19_7.context;
        }
        if (((token === import45.Item) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Item_14_4.context;
        }
        if (((token === import45.ItemContent) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ItemContent_14_5.context;
        }
        if (((token === import46.Button) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Button_22_4.context;
        }
        if (((token === import47.FormGroupDirective) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._FormGroupDirective_12_3.context;
        }
        if (((token === import48.ControlContainer) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._ControlContainer_12_4;
        }
        if (((token === import43.NgControlStatusGroup) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._NgControlStatusGroup_12_5.context;
        }
        if (((token === import49.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Content_10_4.context;
        }
        return notFoundResult;
    };
    _View_ResetPasswordPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_1_3.detectChangesInternal(this, this._el_1, throwOnChange);
        this._Navbar_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        if (this._ToolbarTitle_5_4.detectChangesInternal(this, this._el_5, throwOnChange)) {
            this._appEl_5.componentView.markAsCheckOnce();
        }
        if (this._Content_10_4.detectChangesInternal(this, this._el_10, throwOnChange)) {
            this._appEl_10.componentView.markAsCheckOnce();
        }
        var currVal_6 = this.context.resetPasswordForm;
        this._FormGroupDirective_12_3.check_form(currVal_6, throwOnChange, false);
        this._FormGroupDirective_12_3.detectChangesInternal(this, this._el_12, throwOnChange);
        this._NgControlStatusGroup_12_5.detectChangesInternal(this, this._el_12, throwOnChange);
        if (this._Item_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        this._ItemContent_14_5.detectChangesInternal(this, this._el_14, throwOnChange);
        this._Label_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        var currVal_13 = 'email';
        this._FormControlName_19_4.check_name(currVal_13, throwOnChange, false);
        this._FormControlName_19_4.detectChangesInternal(this, this._el_19, throwOnChange);
        this._NgControlStatus_19_6.detectChangesInternal(this, this._el_19, throwOnChange);
        var currVal_20 = 'Your email address';
        this._TextInput_19_7.check_placeholder(currVal_20, throwOnChange, false);
        var currVal_21 = 'email';
        this._TextInput_19_7.check_type(currVal_21, throwOnChange, false);
        this._TextInput_19_7.detectChangesInternal(this, this._el_19, throwOnChange);
        var currVal_22 = '';
        this._Button_22_4.check_block(currVal_22, throwOnChange, false);
        if (this._Button_22_4.detectChangesInternal(this, this._el_22, throwOnChange)) {
            this._appEl_22.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_14_1.dirty) {
                this._query_Button_14_1.reset([]);
                this._Item_14_4.context._buttons = this._query_Button_14_1;
                this._query_Button_14_1.notifyOnChanges();
            }
            if (this._query_Icon_14_2.dirty) {
                this._query_Icon_14_2.reset([]);
                this._Item_14_4.context._icons = this._query_Icon_14_2;
                this._query_Icon_14_2.notifyOnChanges();
            }
            this._TextInput_19_7.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_14_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_22_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_3_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_3_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_10_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_10, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_7 = this._NgControlStatusGroup_12_5.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_12, 'ng-untouched', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_12_5.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_12, 'ng-touched', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatusGroup_12_5.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_12, 'ng-pristine', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatusGroup_12_5.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_12, 'ng-dirty', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatusGroup_12_5.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_12, 'ng-valid', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._NgControlStatusGroup_12_5.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_12, 'ng-invalid', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_14 = this._NgControlStatus_19_6.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_19, 'ng-untouched', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._NgControlStatus_19_6.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_19, 'ng-touched', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_19_6.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_19, 'ng-pristine', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._NgControlStatus_19_6.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_19, 'ng-dirty', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._NgControlStatus_19_6.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_19, 'ng-valid', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._NgControlStatus_19_6.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_19, 'ng-invalid', currVal_19);
            this._expr_19 = currVal_19;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ResetPasswordPage0.prototype.destroyInternal = function () {
        this._FormControlName_19_4.context.ngOnDestroy();
        this._TextInput_19_7.context.ngOnDestroy();
        this._Content_10_4.context.ngOnDestroy();
    };
    _View_ResetPasswordPage0.prototype._handle_submit_12_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.resetPassword() !== false);
        var pd_1 = (this._FormGroupDirective_12_3.context.onSubmit($event) !== false);
        return ((true && pd_0) && pd_1);
    };
    _View_ResetPasswordPage0.prototype._handle_reset_12_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_12_3.context.onReset() !== false);
        return (true && pd_0);
    };
    return _View_ResetPasswordPage0;
}(import1.AppView));
export function viewFactory_ResetPasswordPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ResetPasswordPage === null)) {
        (renderType_ResetPasswordPage = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, styles_ResetPasswordPage, {}));
    }
    return new _View_ResetPasswordPage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=resetpassword.ngfactory.js.map