// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Antelope"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Cat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Lion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"Mouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"Monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"Zebra"], null)], null)], null));
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),((function (method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__){
return (function (env,key,params){
return key;
});})(method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__21531,key,params){
var map__21532 = p__21531;
var map__21532__$1 = ((((!((map__21532 == null)))?((((map__21532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21532):map__21532);
var env = map__21532__$1;
var state = cljs.core.get.call(null,map__21532__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__21534 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__21534,(0),null);
var value = cljs.core.nth.call(null,vec__21534,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__21535,key,p__21536){
var map__21537 = p__21535;
var map__21537__$1 = ((((!((map__21537 == null)))?((((map__21537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21537):map__21537);
var env = map__21537__$1;
var state = cljs.core.get.call(null,map__21537__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__21538 = p__21536;
var map__21538__$1 = ((((!((map__21538 == null)))?((((map__21538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21538):map__21538);
var start = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__21538__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
om_tutorial.core.AnimalsList = (function om_tutorial$core$AnimalsList(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

om_tutorial.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x21545_21559 = om_tutorial.core.AnimalsList.prototype;
x21545_21559.componentWillUpdate = ((function (x21545_21559){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___21560 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___21561 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___21560,next_ident__18863__auto___21561)){
var idxr__18864__auto___21562 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___21562 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___21562),((function (idxr__18864__auto___21562,ident__18862__auto___21560,next_ident__18863__auto___21561,this__18858__auto__,x21545_21559){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___21560], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___21561], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___21562,ident__18862__auto___21560,next_ident__18863__auto___21561,this__18858__auto__,x21545_21559))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x21545_21559))
;

x21545_21559.shouldComponentUpdate = ((function (x21545_21559){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__21547 = next_props__18859__auto____$1;
var G__21547__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__21547):G__21547);
return G__21547__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x21545_21559))
;

x21545_21559.componentWillUnmount = ((function (x21545_21559){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x21545_21559))
;

x21545_21559.componentDidUpdate = ((function (x21545_21559){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x21545_21559))
;

x21545_21559.isMounted = ((function (x21545_21559){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21545_21559))
;

x21545_21559.componentWillMount = ((function (x21545_21559){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x21545_21559))
;

x21545_21559.render = ((function (x21545_21559){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_21548 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21549 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21550 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21551 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21552 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__21553 = om.next.props.call(null,this$);
var map__21553__$1 = ((((!((map__21553 == null)))?((((map__21553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21553):map__21553);
var title = cljs.core.get.call(null,map__21553__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__21553__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__21553,map__21553__$1,title,list,_STAR_reconciler_STAR_21548,_STAR_depth_STAR_21549,_STAR_shared_STAR_21550,_STAR_instrument_STAR_21551,_STAR_parent_STAR_21552,this$,this__18857__auto__,x21545_21559){
return (function (p__21555){
var vec__21556 = p__21555;
var i = cljs.core.nth.call(null,vec__21556,(0),null);
var name = cljs.core.nth.call(null,vec__21556,(1),null);
return React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('')));
});})(map__21553,map__21553__$1,title,list,_STAR_reconciler_STAR_21548,_STAR_depth_STAR_21549,_STAR_shared_STAR_21550,_STAR_instrument_STAR_21551,_STAR_parent_STAR_21552,this$,this__18857__auto__,x21545_21559))
,list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21552;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21551;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21550;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21549;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21548;
}});})(x21545_21559))
;


om_tutorial.core.AnimalsList.prototype.constructor = om_tutorial.core.AnimalsList;

om_tutorial.core.AnimalsList.prototype.constructor.displayName = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.prototype.om$isComponent = true;

var x21557_21563 = om_tutorial.core.AnimalsList;
x21557_21563.om$next$IQueryParams$ = true;

x21557_21563.om$next$IQueryParams$params$arity$1 = ((function (x21557_21563){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x21557_21563))
;

x21557_21563.om$next$IQuery$ = true;

x21557_21563.om$next$IQuery$query$arity$1 = ((function (x21557_21563){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x21557_21563))
;


var x21558_21564 = om_tutorial.core.AnimalsList.prototype;
x21558_21564.om$next$IQueryParams$ = true;

x21558_21564.om$next$IQueryParams$params$arity$1 = ((function (x21558_21564){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x21558_21564))
;

x21558_21564.om$next$IQuery$ = true;

x21558_21564.om$next$IQuery$query$arity$1 = ((function (x21558_21564){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x21558_21564))
;


om_tutorial.core.AnimalsList.cljs$lang$type = true;

om_tutorial.core.AnimalsList.cljs$lang$ctorStr = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/AnimalsList");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map