/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './login';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/forms/src/form_builder';
import * as import10 from 'ionic-angular/components/loading/loading';
import * as import11 from '../../providers/auth-data';
import * as import12 from 'ionic-angular/components/alert/alert';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import16 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import17 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import21 from '../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import22 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/components/app/app';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/navigation/view-controller';
import * as import30 from 'ionic-angular/components/tabs/tabs';
import * as import31 from 'ionic-angular/util/form';
import * as import32 from 'ionic-angular/components/item/item-reorder';
import * as import33 from 'ionic-angular/platform/platform';
import * as import34 from 'ionic-angular/components/label/label';
import * as import35 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import36 from '@angular/forms/src/directives/ng_control';
import * as import37 from '@angular/forms/src/directives/ng_control_status';
import * as import38 from 'ionic-angular/components/input/input';
import * as import39 from 'ionic-angular/components/item/item';
import * as import40 from 'ionic-angular/components/button/button';
import * as import41 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import42 from '@angular/forms/src/directives/control_container';
import * as import43 from 'ionic-angular/components/content/content';
export class Wrapper_LoginPage {
  context:import0.LoginPage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any) {
    this.changed = false;
    this.context = new import0.LoginPage(p0,p1,p2,p3,p4);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_LoginPage_Host:import2.RenderComponentType = (null as any);
class _View_LoginPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _LoginPage_0_4:Wrapper_LoginPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_LoginPage_Host0,renderType_LoginPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_LoginPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._LoginPage_0_4 = new Wrapper_LoginPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.FormBuilder),this.parentInjector.get(import10.LoadingController),this.parentInjector.get(import11.AuthData),this.parentInjector.get(import12.AlertController));
    this._appEl_0.initComponent(this._LoginPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._LoginPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LoginPage) && (0 === requestNodeIndex))) { return this._LoginPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._LoginPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_LoginPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_LoginPage_Host === (null as any))) { (renderType_LoginPage_Host = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_LoginPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const LoginPageNgFactory:import14.ComponentFactory<import0.LoginPage> = new import14.ComponentFactory<import0.LoginPage>('ng-component',viewFactory_LoginPage_Host0,import0.LoginPage);
const styles_LoginPage:any[] = ([] as any[]);
var renderType_LoginPage:import2.RenderComponentType = (null as any);
class _View_LoginPage0 extends import1.AppView<import0.LoginPage> {
  _text_0:any;
  _el_1:any;
  /*private*/ _appEl_1:import3.AppElement;
  _Content_1_4:import15.Wrapper_Content;
  _text_2:any;
  _el_3:any;
  _FormGroupDirective_3_3:import16.Wrapper_FormGroupDirective;
  _ControlContainer_3_4:any;
  _NgControlStatusGroup_3_5:import17.Wrapper_NgControlStatusGroup;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import3.AppElement;
  _Item_5_4:import18.Wrapper_Item;
  _ItemContent_5_5:import18.Wrapper_ItemContent;
  _query_Label_5_0:import19.QueryList<any>;
  _query_Button_5_1:import19.QueryList<any>;
  _query_Icon_5_2:import19.QueryList<any>;
  _text_6:any;
  _el_7:any;
  _Label_7_3:import20.Wrapper_Label;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import3.AppElement;
  _FormControlName_10_4:import21.Wrapper_FormControlName;
  _NgControl_10_5:any;
  _NgControlStatus_10_6:import17.Wrapper_NgControlStatus;
  _TextInput_10_7:import22.Wrapper_TextInput;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import3.AppElement;
  _Item_13_4:import18.Wrapper_Item;
  _ItemContent_13_5:import18.Wrapper_ItemContent;
  _query_Label_13_0:import19.QueryList<any>;
  _query_Button_13_1:import19.QueryList<any>;
  _query_Icon_13_2:import19.QueryList<any>;
  _text_14:any;
  _el_15:any;
  _Label_15_3:import20.Wrapper_Label;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  /*private*/ _appEl_18:import3.AppElement;
  _FormControlName_18_4:import21.Wrapper_FormControlName;
  _NgControl_18_5:any;
  _NgControlStatus_18_6:import17.Wrapper_NgControlStatus;
  _TextInput_18_7:import22.Wrapper_TextInput;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  /*private*/ _appEl_21:import3.AppElement;
  _Button_21_4:import23.Wrapper_Button;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  /*private*/ _appEl_25:import3.AppElement;
  _Button_25_4:import23.Wrapper_Button;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  /*private*/ _appEl_28:import3.AppElement;
  _Button_28_4:import23.Wrapper_Button;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_LoginPage0,renderType_LoginPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','login');
    this.renderer.setElementAttribute(this._el_1,'padding','');
    this._appEl_1 = new import3.AppElement(1,(null as any),this,this._el_1);
    var compView_1:any = import15.viewFactory_Content0(this.viewUtils,this.injector(1),this._appEl_1);
    this._Content_1_4 = new import15.Wrapper_Content(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import26.App),this.parentInjector.get(import27.Keyboard),this.parentInjector.get(import28.NgZone),this.parentInjector.get(import29.ViewController,(null as any)),this.parentInjector.get(import30.Tabs,(null as any)));
    this._appEl_1.initComponent(this._Content_1_4.context,([] as any[]),compView_1);
    this._text_2 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_3 = this.renderer.createElement((null as any),'form',(null as any));
    this.renderer.setElementAttribute(this._el_3,'novalidate','');
    this._FormGroupDirective_3_3 = new import16.Wrapper_FormGroupDirective((null as any),(null as any));
    this._ControlContainer_3_4 = this._FormGroupDirective_3_3.context;
    this._NgControlStatusGroup_3_5 = new import17.Wrapper_NgControlStatusGroup(this._ControlContainer_3_4);
    this._text_4 = this.renderer.createText(this._el_3,'\n\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','item item-block');
    this._appEl_5 = new import3.AppElement(5,3,this,this._el_5);
    var compView_5:any = import18.viewFactory_Item0(this.viewUtils,this.injector(5),this._appEl_5);
    this._Item_5_4 = new import18.Wrapper_Item(this.parentInjector.get(import31.Form),this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_5),this.renderer,this.parentInjector.get(import32.ItemReorder,(null as any)));
    this._ItemContent_5_5 = new import18.Wrapper_ItemContent();
    this._query_Label_5_0 = new import19.QueryList<any>();
    this._query_Button_5_1 = new import19.QueryList<any>();
    this._query_Icon_5_2 = new import19.QueryList<any>();
    this._appEl_5.initComponent(this._Item_5_4.context,([] as any[]),compView_5);
    this._text_6 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_7 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this.renderer.setElementAttribute(this._el_7,'stacked','');
    this._Label_7_3 = new import20.Wrapper_Label(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_7),this.renderer,(null as any),'',(null as any),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'Email',(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_10 = this.renderer.createElement((null as any),'ion-input',(null as any));
    this.renderer.setElementAttribute(this._el_10,'formControlName','email');
    this.renderer.setElementAttribute(this._el_10,'placeholder','Your email address');
    this.renderer.setElementAttribute(this._el_10,'type','email');
    this._appEl_10 = new import3.AppElement(10,5,this,this._el_10);
    var compView_10:any = import22.viewFactory_TextInput0(this.viewUtils,this.injector(10),this._appEl_10);
    this._FormControlName_10_4 = new import21.Wrapper_FormControlName(this._ControlContainer_3_4,(null as any),(null as any),(null as any));
    this._NgControl_10_5 = this._FormControlName_10_4.context;
    this._NgControlStatus_10_6 = new import17.Wrapper_NgControlStatus(this._NgControl_10_5);
    this._TextInput_10_7 = new import22.Wrapper_TextInput(this.parentInjector.get(import24.Config),this.parentInjector.get(import31.Form),this._Item_5_4.context,this.parentInjector.get(import26.App),this.parentInjector.get(import33.Platform),new import25.ElementRef(this._el_10),this.renderer,this._Content_1_4.context,this.parentInjector.get(import8.NavController,(null as any)),this._NgControl_10_5);
    this._appEl_10.initComponent(this._TextInput_10_7.context,([] as any[]),compView_10);
    compView_10.create(this._TextInput_10_7.context,([] as any[]),(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Label_5_0.reset([this._Label_7_3.context]);
    this._Item_5_4.context.contentLabel = this._query_Label_5_0.first;
    compView_5.create(this._Item_5_4.context,[
      ([] as any[]),
      ([] as any[]).concat([this._el_7]),
      ([] as any[]).concat([
        this._text_6,
        this._text_9,
        this._text_11
      ]
      ),
      ([] as any[]).concat([this._el_10]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_12 = this.renderer.createText(this._el_3,'\n\n    ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_3,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','item item-block');
    this._appEl_13 = new import3.AppElement(13,3,this,this._el_13);
    var compView_13:any = import18.viewFactory_Item0(this.viewUtils,this.injector(13),this._appEl_13);
    this._Item_13_4 = new import18.Wrapper_Item(this.parentInjector.get(import31.Form),this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_13),this.renderer,this.parentInjector.get(import32.ItemReorder,(null as any)));
    this._ItemContent_13_5 = new import18.Wrapper_ItemContent();
    this._query_Label_13_0 = new import19.QueryList<any>();
    this._query_Button_13_1 = new import19.QueryList<any>();
    this._query_Icon_13_2 = new import19.QueryList<any>();
    this._appEl_13.initComponent(this._Item_13_4.context,([] as any[]),compView_13);
    this._text_14 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_15 = this.renderer.createElement((null as any),'ion-label',(null as any));
    this.renderer.setElementAttribute(this._el_15,'stacked','');
    this._Label_15_3 = new import20.Wrapper_Label(this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_15),this.renderer,(null as any),'',(null as any),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'Password',(null as any));
    this._text_17 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_18 = this.renderer.createElement((null as any),'ion-input',(null as any));
    this.renderer.setElementAttribute(this._el_18,'formControlName','password');
    this.renderer.setElementAttribute(this._el_18,'placeholder','Your password');
    this.renderer.setElementAttribute(this._el_18,'type','password');
    this._appEl_18 = new import3.AppElement(18,13,this,this._el_18);
    var compView_18:any = import22.viewFactory_TextInput0(this.viewUtils,this.injector(18),this._appEl_18);
    this._FormControlName_18_4 = new import21.Wrapper_FormControlName(this._ControlContainer_3_4,(null as any),(null as any),(null as any));
    this._NgControl_18_5 = this._FormControlName_18_4.context;
    this._NgControlStatus_18_6 = new import17.Wrapper_NgControlStatus(this._NgControl_18_5);
    this._TextInput_18_7 = new import22.Wrapper_TextInput(this.parentInjector.get(import24.Config),this.parentInjector.get(import31.Form),this._Item_13_4.context,this.parentInjector.get(import26.App),this.parentInjector.get(import33.Platform),new import25.ElementRef(this._el_18),this.renderer,this._Content_1_4.context,this.parentInjector.get(import8.NavController,(null as any)),this._NgControl_18_5);
    this._appEl_18.initComponent(this._TextInput_18_7.context,([] as any[]),compView_18);
    compView_18.create(this._TextInput_18_7.context,([] as any[]),(null as any));
    this._text_19 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Label_13_0.reset([this._Label_15_3.context]);
    this._Item_13_4.context.contentLabel = this._query_Label_13_0.first;
    compView_13.create(this._Item_13_4.context,[
      ([] as any[]),
      ([] as any[]).concat([this._el_15]),
      ([] as any[]).concat([
        this._text_14,
        this._text_17,
        this._text_19
      ]
      ),
      ([] as any[]).concat([this._el_18]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_20 = this.renderer.createText(this._el_3,'\n\n    ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_3,'button',(null as any));
    this.renderer.setElementAttribute(this._el_21,'block','');
    this.renderer.setElementAttribute(this._el_21,'ion-button','');
    this.renderer.setElementAttribute(this._el_21,'type','submit');
    this._appEl_21 = new import3.AppElement(21,3,this,this._el_21);
    var compView_21:any = import23.viewFactory_Button0(this.viewUtils,this.injector(21),this._appEl_21);
    this._Button_21_4 = new import23.Wrapper_Button((null as any),'',this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_21),this.renderer);
    this._appEl_21.initComponent(this._Button_21_4.context,([] as any[]),compView_21);
    this._text_22 = this.renderer.createText((null as any),'\n      Login\n    ',(null as any));
    compView_21.create(this._Button_21_4.context,[([] as any[]).concat([this._text_22])],(null as any));
    this._text_23 = this.renderer.createText(this._el_3,'\n\n  ',(null as any));
    this._text_24 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_25 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_25,'block','');
    this.renderer.setElementAttribute(this._el_25,'clear','');
    this.renderer.setElementAttribute(this._el_25,'ion-button','');
    this._appEl_25 = new import3.AppElement(25,1,this,this._el_25);
    var compView_25:any = import23.viewFactory_Button0(this.viewUtils,this.injector(25),this._appEl_25);
    this._Button_25_4 = new import23.Wrapper_Button((null as any),'',this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_25),this.renderer);
    this._appEl_25.initComponent(this._Button_25_4.context,([] as any[]),compView_25);
    this._text_26 = this.renderer.createText((null as any),'\n    Create a new account\n  ',(null as any));
    compView_25.create(this._Button_25_4.context,[([] as any[]).concat([this._text_26])],(null as any));
    this._text_27 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_28 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_28,'block','');
    this.renderer.setElementAttribute(this._el_28,'clear','');
    this.renderer.setElementAttribute(this._el_28,'ion-button','');
    this._appEl_28 = new import3.AppElement(28,1,this,this._el_28);
    var compView_28:any = import23.viewFactory_Button0(this.viewUtils,this.injector(28),this._appEl_28);
    this._Button_28_4 = new import23.Wrapper_Button((null as any),'',this.parentInjector.get(import24.Config),new import25.ElementRef(this._el_28),this.renderer);
    this._appEl_28.initComponent(this._Button_28_4.context,([] as any[]),compView_28);
    this._text_29 = this.renderer.createText((null as any),'\n    I forgot my password\n  ',(null as any));
    compView_28.create(this._Button_28_4.context,[([] as any[]).concat([this._text_29])],(null as any));
    this._text_30 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_1.create(this._Content_1_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_2,
        this._el_3,
        this._text_24,
        this._el_25,
        this._text_27,
        this._el_28,
        this._text_30
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_31 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_3,'submit',this.eventHandler(this._handle_submit_3_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_3,'reset',this.eventHandler(this._handle_reset_3_1.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    this._expr_22 = import7.UNINITIALIZED;
    this._expr_23 = import7.UNINITIALIZED;
    this._expr_24 = import7.UNINITIALIZED;
    this._expr_25 = import7.UNINITIALIZED;
    this._expr_26 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_25,'click',this.eventHandler(this._handle_click_25_0.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_28,'click',this.eventHandler(this._handle_click_28_0.bind(this)));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import34.Label) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._Label_7_3.context; }
    if (((token === import35.FormControlName) && (10 === requestNodeIndex))) { return this._FormControlName_10_4.context; }
    if (((token === import36.NgControl) && (10 === requestNodeIndex))) { return this._NgControl_10_5; }
    if (((token === import37.NgControlStatus) && (10 === requestNodeIndex))) { return this._NgControlStatus_10_6.context; }
    if (((token === import38.TextInput) && (10 === requestNodeIndex))) { return this._TextInput_10_7.context; }
    if (((token === import39.Item) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Item_5_4.context; }
    if (((token === import39.ItemContent) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ItemContent_5_5.context; }
    if (((token === import34.Label) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._Label_15_3.context; }
    if (((token === import35.FormControlName) && (18 === requestNodeIndex))) { return this._FormControlName_18_4.context; }
    if (((token === import36.NgControl) && (18 === requestNodeIndex))) { return this._NgControl_18_5; }
    if (((token === import37.NgControlStatus) && (18 === requestNodeIndex))) { return this._NgControlStatus_18_6.context; }
    if (((token === import38.TextInput) && (18 === requestNodeIndex))) { return this._TextInput_18_7.context; }
    if (((token === import39.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._Item_13_4.context; }
    if (((token === import39.ItemContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._ItemContent_13_5.context; }
    if (((token === import40.Button) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Button_21_4.context; }
    if (((token === import41.FormGroupDirective) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._FormGroupDirective_3_3.context; }
    if (((token === import42.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._ControlContainer_3_4; }
    if (((token === import37.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._NgControlStatusGroup_3_5.context; }
    if (((token === import40.Button) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._Button_25_4.context; }
    if (((token === import40.Button) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._Button_28_4.context; }
    if (((token === import43.Content) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._Content_1_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Content_1_4.detectChangesInternal(this,this._el_1,throwOnChange)) { this._appEl_1.componentView.markAsCheckOnce(); }
    const currVal_4:any = this.context.loginForm;
    this._FormGroupDirective_3_3.check_form(currVal_4,throwOnChange,false);
    this._FormGroupDirective_3_3.detectChangesInternal(this,this._el_3,throwOnChange);
    this._NgControlStatusGroup_3_5.detectChangesInternal(this,this._el_3,throwOnChange);
    if (this._Item_5_4.detectChangesInternal(this,this._el_5,throwOnChange)) { this._appEl_5.componentView.markAsCheckOnce(); }
    this._ItemContent_5_5.detectChangesInternal(this,this._el_5,throwOnChange);
    this._Label_7_3.detectChangesInternal(this,this._el_7,throwOnChange);
    const currVal_11:any = 'email';
    this._FormControlName_10_4.check_name(currVal_11,throwOnChange,false);
    this._FormControlName_10_4.detectChangesInternal(this,this._el_10,throwOnChange);
    this._NgControlStatus_10_6.detectChangesInternal(this,this._el_10,throwOnChange);
    const currVal_18:any = 'Your email address';
    this._TextInput_10_7.check_placeholder(currVal_18,throwOnChange,false);
    const currVal_19:any = 'email';
    this._TextInput_10_7.check_type(currVal_19,throwOnChange,false);
    this._TextInput_10_7.detectChangesInternal(this,this._el_10,throwOnChange);
    if (this._Item_13_4.detectChangesInternal(this,this._el_13,throwOnChange)) { this._appEl_13.componentView.markAsCheckOnce(); }
    this._ItemContent_13_5.detectChangesInternal(this,this._el_13,throwOnChange);
    this._Label_15_3.detectChangesInternal(this,this._el_15,throwOnChange);
    const currVal_20:any = 'password';
    this._FormControlName_18_4.check_name(currVal_20,throwOnChange,false);
    this._FormControlName_18_4.detectChangesInternal(this,this._el_18,throwOnChange);
    this._NgControlStatus_18_6.detectChangesInternal(this,this._el_18,throwOnChange);
    const currVal_27:any = 'Your password';
    this._TextInput_18_7.check_placeholder(currVal_27,throwOnChange,false);
    const currVal_28:any = 'password';
    this._TextInput_18_7.check_type(currVal_28,throwOnChange,false);
    this._TextInput_18_7.detectChangesInternal(this,this._el_18,throwOnChange);
    const currVal_29:any = '';
    this._Button_21_4.check_block(currVal_29,throwOnChange,false);
    if (this._Button_21_4.detectChangesInternal(this,this._el_21,throwOnChange)) { this._appEl_21.componentView.markAsCheckOnce(); }
    const currVal_31:any = '';
    this._Button_25_4.check_clear(currVal_31,throwOnChange,false);
    const currVal_32:any = '';
    this._Button_25_4.check_block(currVal_32,throwOnChange,false);
    if (this._Button_25_4.detectChangesInternal(this,this._el_25,throwOnChange)) { this._appEl_25.componentView.markAsCheckOnce(); }
    const currVal_34:any = '';
    this._Button_28_4.check_clear(currVal_34,throwOnChange,false);
    const currVal_35:any = '';
    this._Button_28_4.check_block(currVal_35,throwOnChange,false);
    if (this._Button_28_4.detectChangesInternal(this,this._el_28,throwOnChange)) { this._appEl_28.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_5_1.dirty) {
        this._query_Button_5_1.reset(([] as any[]));
        this._Item_5_4.context._buttons = this._query_Button_5_1;
        this._query_Button_5_1.notifyOnChanges();
      }
      if (this._query_Icon_5_2.dirty) {
        this._query_Icon_5_2.reset(([] as any[]));
        this._Item_5_4.context._icons = this._query_Icon_5_2;
        this._query_Icon_5_2.notifyOnChanges();
      }
      if (this._query_Button_13_1.dirty) {
        this._query_Button_13_1.reset(([] as any[]));
        this._Item_13_4.context._buttons = this._query_Button_13_1;
        this._query_Button_13_1.notifyOnChanges();
      }
      if (this._query_Icon_13_2.dirty) {
        this._query_Icon_13_2.reset(([] as any[]));
        this._Item_13_4.context._icons = this._query_Icon_13_2;
        this._query_Icon_13_2.notifyOnChanges();
      }
      this._TextInput_10_7.context.ngAfterContentChecked();
      if ((this.numberOfChecks === 0)) { this._Item_5_4.context.ngAfterContentInit(); }
      this._TextInput_18_7.context.ngAfterContentChecked();
      if ((this.numberOfChecks === 0)) { this._Item_13_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_21_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_25_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_28_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Content_1_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_1,'statusbar-padding',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_5:any = this._NgControlStatusGroup_3_5.context.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_3,'ng-untouched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_3_5.context.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_3,'ng-touched',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_3_5.context.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_3,'ng-pristine',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_3_5.context.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_3,'ng-dirty',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatusGroup_3_5.context.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_3,'ng-valid',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._NgControlStatusGroup_3_5.context.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_3,'ng-invalid',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_12:any = this._NgControlStatus_10_6.context.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_10,'ng-untouched',currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this._NgControlStatus_10_6.context.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_10,'ng-touched',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this._NgControlStatus_10_6.context.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_10,'ng-pristine',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._NgControlStatus_10_6.context.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_10,'ng-dirty',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_10_6.context.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_10,'ng-valid',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_10_6.context.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_10,'ng-invalid',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_21:any = this._NgControlStatus_18_6.context.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementClass(this._el_18,'ng-untouched',currVal_21);
      this._expr_21 = currVal_21;
    }
    const currVal_22:any = this._NgControlStatus_18_6.context.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setElementClass(this._el_18,'ng-touched',currVal_22);
      this._expr_22 = currVal_22;
    }
    const currVal_23:any = this._NgControlStatus_18_6.context.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementClass(this._el_18,'ng-pristine',currVal_23);
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = this._NgControlStatus_18_6.context.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementClass(this._el_18,'ng-dirty',currVal_24);
      this._expr_24 = currVal_24;
    }
    const currVal_25:any = this._NgControlStatus_18_6.context.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this.renderer.setElementClass(this._el_18,'ng-valid',currVal_25);
      this._expr_25 = currVal_25;
    }
    const currVal_26:any = this._NgControlStatus_18_6.context.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setElementClass(this._el_18,'ng-invalid',currVal_26);
      this._expr_26 = currVal_26;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._FormControlName_10_4.context.ngOnDestroy();
    this._TextInput_10_7.context.ngOnDestroy();
    this._FormControlName_18_4.context.ngOnDestroy();
    this._TextInput_18_7.context.ngOnDestroy();
    this._Content_1_4.context.ngOnDestroy();
  }
  private _handle_submit_3_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.loginUser()) !== false);
    const pd_1:any = ((<any>this._FormGroupDirective_3_3.context.onSubmit($event)) !== false);
    return ((true && pd_0) && pd_1);
  }
  private _handle_reset_3_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_3_3.context.onReset()) !== false);
    return (true && pd_0);
  }
  private _handle_click_25_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.goToSignup()) !== false);
    return (true && pd_0);
  }
  private _handle_click_28_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.goToResetPassword()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_LoginPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.LoginPage> {
  if ((renderType_LoginPage === (null as any))) { (renderType_LoginPage = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,styles_LoginPage,{})); }
  return new _View_LoginPage0(viewUtils,parentInjector,declarationEl);
}