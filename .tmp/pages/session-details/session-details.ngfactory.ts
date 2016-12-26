/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './session-details';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from 'ionic-angular/components/app/app';
import * as import20 from 'ionic-angular/components/toolbar/toolbar';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from 'ionic-angular/components/tabs/tabs';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import26 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import27 from 'ionic-angular/components/navbar/navbar';
import * as import28 from '@angular/common/src/directives/ng_for';
import * as import29 from 'ionic-angular/components/content/content';
import * as import30 from '../../node_modules/ionic-angular/components/card/card.ngfactory';
import * as import31 from 'ionic-angular/components/card/card';
import * as import32 from '@angular/core/src/security';
export class Wrapper_SessionDetailsPage {
  context:import0.SessionDetailsPage;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.SessionDetailsPage(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_SessionDetailsPage_Host:import2.RenderComponentType = (null as any);
class _View_SessionDetailsPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _SessionDetailsPage_0_4:Wrapper_SessionDetailsPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_SessionDetailsPage_Host0,renderType_SessionDetailsPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-session-details',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_SessionDetailsPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SessionDetailsPage_0_4 = new Wrapper_SessionDetailsPage(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._SessionDetailsPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._SessionDetailsPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SessionDetailsPage) && (0 === requestNodeIndex))) { return this._SessionDetailsPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SessionDetailsPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_SessionDetailsPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_SessionDetailsPage_Host === (null as any))) { (renderType_SessionDetailsPage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_SessionDetailsPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const SessionDetailsPageNgFactory:import10.ComponentFactory<import0.SessionDetailsPage> = new import10.ComponentFactory<import0.SessionDetailsPage>('page-session-details',viewFactory_SessionDetailsPage_Host0,import0.SessionDetailsPage);
const styles_SessionDetailsPage:any[] = ([] as any[]);
var renderType_SessionDetailsPage:import2.RenderComponentType = (null as any);
class _View_SessionDetailsPage0 extends import1.AppView<import0.SessionDetailsPage> {
  _el_0:any;
  _Header_0_3:import11.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import12.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import13.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import14.Wrapper_Content;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _anchor_17:any;
  /*private*/ _appEl_17:import3.AppElement;
  _TemplateRef_17_5:any;
  _NgFor_17_6:import15.Wrapper_NgFor;
  _text_18:any;
  _text_19:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_SessionDetailsPage0,renderType_SessionDetailsPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import18.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import12.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import19.App),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import13.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import20.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'Session Details',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
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
    this._text_7 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'padding','');
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import14.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import14.Wrapper_Content(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import19.App),this.parentInjector.get(import21.Keyboard),this.parentInjector.get(import22.NgZone),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import23.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'h6',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_14 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._anchor_17 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_17 = new import3.AppElement(17,9,this,this._anchor_17);
    this._TemplateRef_17_5 = new import24.TemplateRef_(this._appEl_17,viewFactory_SessionDetailsPage1);
    this._NgFor_17_6 = new import15.Wrapper_NgFor(this._appEl_17.vcRef,this._TemplateRef_17_5,this.parentInjector.get(import25.IterableDiffers),this.ref);
    this._text_18 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_13,
        this._el_14,
        this._text_16,
        this._appEl_17,
        this._text_18
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._anchor_17,
      this._text_18,
      this._text_19
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import27.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import20.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import24.TemplateRef) && (17 === requestNodeIndex))) { return this._TemplateRef_17_5; }
    if (((token === import28.NgFor) && (17 === requestNodeIndex))) { return this._NgFor_17_6.context; }
    if (((token === import29.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    const currVal_5:any = this.context.sessionDetails.Blocks;
    this._NgFor_17_6.check_ngForOf(currVal_5,throwOnChange,false);
    this._NgFor_17_6.detectChangesInternal(this,this._anchor_17,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_9_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.sessionDetails.Title,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_12,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import4.interpolate(1,'',this.context.sessionDetails.Description,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_15,currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.context.ngOnDestroy();
  }
}
export function viewFactory_SessionDetailsPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.SessionDetailsPage> {
  if ((renderType_SessionDetailsPage === (null as any))) { (renderType_SessionDetailsPage = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_SessionDetailsPage,{})); }
  return new _View_SessionDetailsPage0(viewUtils,parentInjector,declarationEl);
}
class _View_SessionDetailsPage1 extends import1.AppView<any> {
  _el_0:any;
  _Card_0_3:import30.Wrapper_Card;
  _text_1:any;
  _el_2:any;
  _CardHeader_2_3:import30.Wrapper_CardHeader;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _CardContent_5_3:import30.Wrapper_CardContent;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import3.AppElement;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import15.Wrapper_NgFor;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_SessionDetailsPage1,renderType_SessionDetailsPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-card',(null as any));
    this._Card_0_3 = new import30.Wrapper_Card(this.parent.parentInjector.get(import16.Config),new import17.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-card-header',(null as any));
    this._CardHeader_2_3 = new import30.Wrapper_CardHeader(this.parent.parentInjector.get(import16.Config),new import17.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'ion-card-content',(null as any));
    this._CardContent_5_3 = new import30.Wrapper_CardContent(this.parent.parentInjector.get(import16.Config),new import17.ElementRef(this._el_5),this.renderer);
    this._text_6 = this.renderer.createText(this._el_5,'\n\n      ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._appEl_7 = new import3.AppElement(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import24.TemplateRef_(this._appEl_7,viewFactory_SessionDetailsPage2);
    this._NgFor_7_6 = new import15.Wrapper_NgFor(this._appEl_7.vcRef,this._TemplateRef_7_5,this.parent.parentInjector.get(import25.IterableDiffers),this.parent.ref);
    this._text_8 = this.renderer.createText(this._el_5,'\n\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import31.CardHeader) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._CardHeader_2_3.context; }
    if (((token === import24.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import28.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    if (((token === import31.CardContent) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._CardContent_5_3.context; }
    if (((token === import31.Card) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._Card_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Card_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._CardHeader_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    this._CardContent_5_3.detectChangesInternal(this,this._el_5,throwOnChange);
    const currVal_1:any = this.context.$implicit.Parts;
    this._NgFor_7_6.check_ngForOf(currVal_1,throwOnChange,false);
    this._NgFor_7_6.detectChangesInternal(this,this._anchor_7,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'\n      ',this.context.$implicit.Name,'\n    ');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_SessionDetailsPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_SessionDetailsPage1(viewUtils,parentInjector,declarationEl);
}
class _View_SessionDetailsPage2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_SessionDetailsPage2,renderType_SessionDetailsPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_0,'p',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_0,'p',(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.context.$implicit.Description;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'innerHTML',this.viewUtils.sanitizer.sanitize(import32.SecurityContext.HTML,currVal_0));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.Type,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_5,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.$implicit.Mark,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_8,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_SessionDetailsPage2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_SessionDetailsPage2(viewUtils,parentInjector,declarationEl);
}