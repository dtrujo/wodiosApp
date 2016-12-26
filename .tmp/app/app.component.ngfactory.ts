/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/platform/platform';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from 'ionic-angular/components/menu/menu-controller';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '../node_modules/ionic-angular/components/menu/menu.ngfactory';
import * as import15 from '../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import16 from '../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import17 from '../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import18 from '../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import19 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import20 from '../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from 'ionic-angular/util/keyboard';
import * as import24 from 'ionic-angular/gestures/gesture-controller';
import * as import25 from 'ionic-angular/navigation/view-controller';
import * as import26 from 'ionic-angular/components/navbar/navbar';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from '@angular/core/src/linker/template_ref';
import * as import30 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import31 from 'ionic-angular/navigation/nav-controller-base';
import * as import32 from '@angular/core/src/linker/component_factory_resolver';
import * as import33 from 'ionic-angular/transitions/transition-controller';
import * as import34 from 'ionic-angular/navigation/deep-linker';
import * as import35 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import36 from 'ionic-angular/components/toolbar/toolbar';
import * as import37 from '@angular/common/src/directives/ng_for';
import * as import38 from 'ionic-angular/components/list/list';
import * as import39 from 'ionic-angular/components/content/content';
import * as import40 from 'ionic-angular/components/menu/menu';
import * as import41 from 'ionic-angular/components/nav/nav';
import * as import42 from '../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import43 from 'ionic-angular/util/form';
import * as import44 from 'ionic-angular/components/item/item-reorder';
import * as import45 from 'ionic-angular/components/item/item';
export class Wrapper_MyApp {
  context:import0.MyApp;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.MyApp(p0,p1,p2);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_MyApp_Host:import2.RenderComponentType = (null as any);
class _View_MyApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _MyApp_0_4:Wrapper_MyApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MyApp_Host0,renderType_MyApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MyApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MyApp_0_4 = new Wrapper_MyApp(this.parentInjector.get(import8.Platform),this.parentInjector.get(import9.NgZone),this.parentInjector.get(import10.MenuController));
    this._appEl_0.initComponent(this._MyApp_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._MyApp_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MyApp) && (0 === requestNodeIndex))) { return this._MyApp_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MyApp_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MyApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_MyApp_Host === (null as any))) { (renderType_MyApp_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_MyApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const MyAppNgFactory:import12.ComponentFactory<import0.MyApp> = new import12.ComponentFactory<import0.MyApp>('ng-component',viewFactory_MyApp_Host0,import0.MyApp);
const styles_MyApp:any[] = ([] as any[]);
var renderType_MyApp:import2.RenderComponentType = (null as any);
class _View_MyApp0 extends import1.AppView<import0.MyApp> {
  _viewQuery_Nav_0:import13.QueryList<any>;
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Menu_0_4:import14.Wrapper_Menu;
  _query_Content_0_0:import13.QueryList<any>;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Toolbar_2_4:import15.Wrapper_Toolbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import16.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  /*private*/ _appEl_8:import3.AppElement;
  _Content_8_4:import17.Wrapper_Content;
  _text_9:any;
  _el_10:any;
  _List_10_3:import18.Wrapper_List;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import3.AppElement;
  _TemplateRef_12_5:any;
  _NgFor_12_6:import19.Wrapper_NgFor;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  /*private*/ _appEl_17:import3.AppElement;
  _Nav_17_4:import20.Wrapper_Nav;
  _text_18:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MyApp0,renderType_MyApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_Nav_0 = new import13.QueryList<any>();
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-menu',(null as any));
    this.renderer.setElementAttribute(this._el_0,'role','navigation');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import14.viewFactory_Menu0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Menu_0_4 = new import14.Wrapper_Menu(this.parentInjector.get(import10.MenuController),new import21.ElementRef(this._el_0),this.parentInjector.get(import22.Config),this.parentInjector.get(import8.Platform),this.renderer,this.parentInjector.get(import23.Keyboard),this.parentInjector.get(import9.NgZone),this.parentInjector.get(import24.GestureController));
    this._query_Content_0_0 = new import13.QueryList<any>();
    this._appEl_0.initComponent(this._Menu_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-toolbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import15.viewFactory_Toolbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Toolbar_2_4 = new import15.Wrapper_Toolbar(this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import22.Config),new import21.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Toolbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import16.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import16.Wrapper_ToolbarTitle(this.parentInjector.get(import22.Config),new import21.ElementRef(this._el_4),this.renderer,this._Toolbar_2_4.context,this.parentInjector.get(import26.Navbar,(null as any)));
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'Menu',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Toolbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_8 = this.renderer.createElement((null as any),'ion-content',(null as any));
    this._appEl_8 = new import3.AppElement(8,0,this,this._el_8);
    var compView_8:any = import17.viewFactory_Content0(this.viewUtils,this.injector(8),this._appEl_8);
    this._Content_8_4 = new import17.Wrapper_Content(this.parentInjector.get(import22.Config),new import21.ElementRef(this._el_8),this.renderer,this.parentInjector.get(import27.App),this.parentInjector.get(import23.Keyboard),this.parentInjector.get(import9.NgZone),this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import28.Tabs,(null as any)));
    this._appEl_8.initComponent(this._Content_8_4.context,([] as any[]),compView_8);
    this._text_9 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_10 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_10_3 = new import18.Wrapper_List(this.parentInjector.get(import22.Config),new import21.ElementRef(this._el_10),this.renderer,this.parentInjector.get(import24.GestureController));
    this._text_11 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._appEl_12 = new import3.AppElement(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import29.TemplateRef_(this._appEl_12,viewFactory_MyApp1);
    this._NgFor_12_6 = new import19.Wrapper_NgFor(this._appEl_12.vcRef,this._TemplateRef_12_5,this.parentInjector.get(import30.IterableDiffers),this.ref);
    this._text_13 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_14 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_8.create(this._Content_8_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_9,
        this._el_10,
        this._text_14
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n\n',(null as any));
    this._query_Content_0_0.reset([this._Content_8_4.context]);
    this._Menu_0_4.context.menuContent = this._query_Content_0_0.first;
      compView_0.create(this._Menu_0_4.context,[([] as any[]).concat([
        this._text_1,
        this._el_2,
        this._text_7,
        this._el_8,
        this._text_15
      ]
    )],(null as any));
    this._text_16 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_17 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this.renderer.setElementAttribute(this._el_17,'id','nav');
    this.renderer.setElementAttribute(this._el_17,'swipeBackEnabled','false');
    this._appEl_17 = new import3.AppElement(17,(null as any),this,this._el_17);
    var compView_17:any = import20.viewFactory_Nav0(this.viewUtils,this.injector(17),this._appEl_17);
    this._Nav_17_4 = new import20.Wrapper_Nav(this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import31.NavControllerBase,(null as any)),this.parentInjector.get(import27.App),this.parentInjector.get(import22.Config),this.parentInjector.get(import23.Keyboard),new import21.ElementRef(this._el_17),this.parentInjector.get(import9.NgZone),this.renderer,this.parentInjector.get(import32.ComponentFactoryResolver),this.parentInjector.get(import24.GestureController),this.parentInjector.get(import33.TransitionController),this.parentInjector.get(import34.DeepLinker,(null as any)));
    this._appEl_17.initComponent(this._Nav_17_4.context,([] as any[]),compView_17);
    compView_17.create(this._Nav_17_4.context,([] as any[]),(null as any));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._viewQuery_Nav_0.reset([this._Nav_17_4.context]);
    this.context.nav = this._viewQuery_Nav_0.first;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import35.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import36.Toolbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Toolbar_2_4.context; }
    if (((token === import29.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import37.NgFor) && (12 === requestNodeIndex))) { return this._NgFor_12_6.context; }
    if (((token === import38.List) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._List_10_3.context; }
    if (((token === import39.Content) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._Content_8_4.context; }
    if (((token === import40.Menu) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Menu_0_4.context; }
    if (((token === import41.Nav) && (17 === requestNodeIndex))) { return this._Nav_17_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this._Nav_17_4.context;
    this._Menu_0_4.check_content(currVal_0,throwOnChange,false);
    if (this._Menu_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    if (this._Toolbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange)) { this._appEl_2.componentView.markAsCheckOnce(); }
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_8_4.detectChangesInternal(this,this._el_8,throwOnChange)) { this._appEl_8.componentView.markAsCheckOnce(); }
    this._List_10_3.detectChangesInternal(this,this._el_10,throwOnChange);
    const currVal_3:any = this.context.pages;
    this._NgFor_12_6.check_ngForOf(currVal_3,throwOnChange,false);
    this._NgFor_12_6.detectChangesInternal(this,this._anchor_12,throwOnChange);
    const currVal_4:any = this.context.rootPage;
    this._Nav_17_4.check_root(currVal_4,throwOnChange,false);
    const currVal_5:any = 'false';
    this._Nav_17_4.check_swipeBackEnabled(currVal_5,throwOnChange,false);
    this._Nav_17_4.detectChangesInternal(this,this._el_17,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Toolbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_8_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_8,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_17_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_8_4.context.ngOnDestroy();
    this._Menu_0_4.context.ngOnDestroy();
  }
}
export function viewFactory_MyApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.MyApp> {
  if ((renderType_MyApp === (null as any))) { (renderType_MyApp = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,styles_MyApp,{})); }
  return new _View_MyApp0(viewUtils,parentInjector,declarationEl);
}
class _View_MyApp1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Item_0_4:import42.Wrapper_Item;
  _ItemContent_0_5:import42.Wrapper_ItemContent;
  _query_Label_0_0:import13.QueryList<any>;
  _query_Button_0_1:import13.QueryList<any>;
  _query_Icon_0_2:import13.QueryList<any>;
  _text_1:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MyApp1,renderType_MyApp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this.renderer.setElementAttribute(this._el_0,'ion-item','');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import42.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import42.Wrapper_Item(this.parent.parentInjector.get(import43.Form),this.parent.parentInjector.get(import22.Config),new import21.ElementRef(this._el_0),this.renderer,this.parent.parentInjector.get(import44.ItemReorder,(null as any)));
    this._ItemContent_0_5 = new import42.Wrapper_ItemContent();
    this._query_Label_0_0 = new import13.QueryList<any>();
    this._query_Button_0_1 = new import13.QueryList<any>();
    this._query_Icon_0_2 = new import13.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    this._query_Label_0_0.reset(([] as any[]));
    this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._text_1]),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import45.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._Item_0_4.context; }
    if (((token === import45.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._ItemContent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Item_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this._ItemContent_0_5.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset(([] as any[]));
        this._Item_0_4.context._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset(([] as any[]));
        this._Item_0_4.context._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.context.ngAfterContentInit(); }
    }
    const currVal_1:any = import4.interpolate(1,'\n        ',this.context.$implicit.title,'\n      ');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.openPage(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_MyApp1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_MyApp1(viewUtils,parentInjector,declarationEl);
}