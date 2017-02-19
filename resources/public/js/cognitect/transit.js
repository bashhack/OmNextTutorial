// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__17899_17903 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__17900_17904 = null;
var count__17901_17905 = (0);
var i__17902_17906 = (0);
while(true){
if((i__17902_17906 < count__17901_17905)){
var k_17907 = cljs.core._nth.call(null,chunk__17900_17904,i__17902_17906);
var v_17908 = (b[k_17907]);
(a[k_17907] = v_17908);

var G__17909 = seq__17899_17903;
var G__17910 = chunk__17900_17904;
var G__17911 = count__17901_17905;
var G__17912 = (i__17902_17906 + (1));
seq__17899_17903 = G__17909;
chunk__17900_17904 = G__17910;
count__17901_17905 = G__17911;
i__17902_17906 = G__17912;
continue;
} else {
var temp__4425__auto___17913 = cljs.core.seq.call(null,seq__17899_17903);
if(temp__4425__auto___17913){
var seq__17899_17914__$1 = temp__4425__auto___17913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17899_17914__$1)){
var c__17588__auto___17915 = cljs.core.chunk_first.call(null,seq__17899_17914__$1);
var G__17916 = cljs.core.chunk_rest.call(null,seq__17899_17914__$1);
var G__17917 = c__17588__auto___17915;
var G__17918 = cljs.core.count.call(null,c__17588__auto___17915);
var G__17919 = (0);
seq__17899_17903 = G__17916;
chunk__17900_17904 = G__17917;
count__17901_17905 = G__17918;
i__17902_17906 = G__17919;
continue;
} else {
var k_17920 = cljs.core.first.call(null,seq__17899_17914__$1);
var v_17921 = (b[k_17920]);
(a[k_17920] = v_17921);

var G__17922 = cljs.core.next.call(null,seq__17899_17914__$1);
var G__17923 = null;
var G__17924 = (0);
var G__17925 = (0);
seq__17899_17903 = G__17922;
chunk__17900_17904 = G__17923;
count__17901_17905 = G__17924;
i__17902_17906 = G__17925;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args17926 = [];
var len__17843__auto___17929 = arguments.length;
var i__17844__auto___17930 = (0);
while(true){
if((i__17844__auto___17930 < len__17843__auto___17929)){
args17926.push((arguments[i__17844__auto___17930]));

var G__17931 = (i__17844__auto___17930 + (1));
i__17844__auto___17930 = G__17931;
continue;
} else {
}
break;
}

var G__17928 = args17926.length;
switch (G__17928) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17926.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__17933 = (i + (2));
var G__17934 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__17933;
ret = G__17934;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__17935_17939 = cljs.core.seq.call(null,v);
var chunk__17936_17940 = null;
var count__17937_17941 = (0);
var i__17938_17942 = (0);
while(true){
if((i__17938_17942 < count__17937_17941)){
var x_17943 = cljs.core._nth.call(null,chunk__17936_17940,i__17938_17942);
ret.push(x_17943);

var G__17944 = seq__17935_17939;
var G__17945 = chunk__17936_17940;
var G__17946 = count__17937_17941;
var G__17947 = (i__17938_17942 + (1));
seq__17935_17939 = G__17944;
chunk__17936_17940 = G__17945;
count__17937_17941 = G__17946;
i__17938_17942 = G__17947;
continue;
} else {
var temp__4425__auto___17948 = cljs.core.seq.call(null,seq__17935_17939);
if(temp__4425__auto___17948){
var seq__17935_17949__$1 = temp__4425__auto___17948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17935_17949__$1)){
var c__17588__auto___17950 = cljs.core.chunk_first.call(null,seq__17935_17949__$1);
var G__17951 = cljs.core.chunk_rest.call(null,seq__17935_17949__$1);
var G__17952 = c__17588__auto___17950;
var G__17953 = cljs.core.count.call(null,c__17588__auto___17950);
var G__17954 = (0);
seq__17935_17939 = G__17951;
chunk__17936_17940 = G__17952;
count__17937_17941 = G__17953;
i__17938_17942 = G__17954;
continue;
} else {
var x_17955 = cljs.core.first.call(null,seq__17935_17949__$1);
ret.push(x_17955);

var G__17956 = cljs.core.next.call(null,seq__17935_17949__$1);
var G__17957 = null;
var G__17958 = (0);
var G__17959 = (0);
seq__17935_17939 = G__17956;
chunk__17936_17940 = G__17957;
count__17937_17941 = G__17958;
i__17938_17942 = G__17959;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__17960_17964 = cljs.core.seq.call(null,v);
var chunk__17961_17965 = null;
var count__17962_17966 = (0);
var i__17963_17967 = (0);
while(true){
if((i__17963_17967 < count__17962_17966)){
var x_17968 = cljs.core._nth.call(null,chunk__17961_17965,i__17963_17967);
ret.push(x_17968);

var G__17969 = seq__17960_17964;
var G__17970 = chunk__17961_17965;
var G__17971 = count__17962_17966;
var G__17972 = (i__17963_17967 + (1));
seq__17960_17964 = G__17969;
chunk__17961_17965 = G__17970;
count__17962_17966 = G__17971;
i__17963_17967 = G__17972;
continue;
} else {
var temp__4425__auto___17973 = cljs.core.seq.call(null,seq__17960_17964);
if(temp__4425__auto___17973){
var seq__17960_17974__$1 = temp__4425__auto___17973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17960_17974__$1)){
var c__17588__auto___17975 = cljs.core.chunk_first.call(null,seq__17960_17974__$1);
var G__17976 = cljs.core.chunk_rest.call(null,seq__17960_17974__$1);
var G__17977 = c__17588__auto___17975;
var G__17978 = cljs.core.count.call(null,c__17588__auto___17975);
var G__17979 = (0);
seq__17960_17964 = G__17976;
chunk__17961_17965 = G__17977;
count__17962_17966 = G__17978;
i__17963_17967 = G__17979;
continue;
} else {
var x_17980 = cljs.core.first.call(null,seq__17960_17974__$1);
ret.push(x_17980);

var G__17981 = cljs.core.next.call(null,seq__17960_17974__$1);
var G__17982 = null;
var G__17983 = (0);
var G__17984 = (0);
seq__17960_17964 = G__17981;
chunk__17961_17965 = G__17982;
count__17962_17966 = G__17983;
i__17963_17967 = G__17984;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__17985_17989 = cljs.core.seq.call(null,v);
var chunk__17986_17990 = null;
var count__17987_17991 = (0);
var i__17988_17992 = (0);
while(true){
if((i__17988_17992 < count__17987_17991)){
var x_17993 = cljs.core._nth.call(null,chunk__17986_17990,i__17988_17992);
ret.push(x_17993);

var G__17994 = seq__17985_17989;
var G__17995 = chunk__17986_17990;
var G__17996 = count__17987_17991;
var G__17997 = (i__17988_17992 + (1));
seq__17985_17989 = G__17994;
chunk__17986_17990 = G__17995;
count__17987_17991 = G__17996;
i__17988_17992 = G__17997;
continue;
} else {
var temp__4425__auto___17998 = cljs.core.seq.call(null,seq__17985_17989);
if(temp__4425__auto___17998){
var seq__17985_17999__$1 = temp__4425__auto___17998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17985_17999__$1)){
var c__17588__auto___18000 = cljs.core.chunk_first.call(null,seq__17985_17999__$1);
var G__18001 = cljs.core.chunk_rest.call(null,seq__17985_17999__$1);
var G__18002 = c__17588__auto___18000;
var G__18003 = cljs.core.count.call(null,c__17588__auto___18000);
var G__18004 = (0);
seq__17985_17989 = G__18001;
chunk__17986_17990 = G__18002;
count__17987_17991 = G__18003;
i__17988_17992 = G__18004;
continue;
} else {
var x_18005 = cljs.core.first.call(null,seq__17985_17999__$1);
ret.push(x_18005);

var G__18006 = cljs.core.next.call(null,seq__17985_17999__$1);
var G__18007 = null;
var G__18008 = (0);
var G__18009 = (0);
seq__17985_17989 = G__18006;
chunk__17986_17990 = G__18007;
count__17987_17991 = G__18008;
i__17988_17992 = G__18009;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args18010 = [];
var len__17843__auto___18021 = arguments.length;
var i__17844__auto___18022 = (0);
while(true){
if((i__17844__auto___18022 < len__17843__auto___18021)){
args18010.push((arguments[i__17844__auto___18022]));

var G__18023 = (i__17844__auto___18022 + (1));
i__17844__auto___18022 = G__18023;
continue;
} else {
}
break;
}

var G__18012 = args18010.length;
switch (G__18012) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18010.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__18013 = obj;
G__18013.push(kfn.call(null,k),vfn.call(null,v));

return G__18013;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18014 = cljs.core.clone.call(null,handlers);
x18014.forEach = ((function (x18014,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18015 = cljs.core.seq.call(null,coll);
var chunk__18016 = null;
var count__18017 = (0);
var i__18018 = (0);
while(true){
if((i__18018 < count__18017)){
var vec__18019 = cljs.core._nth.call(null,chunk__18016,i__18018);
var k = cljs.core.nth.call(null,vec__18019,(0),null);
var v = cljs.core.nth.call(null,vec__18019,(1),null);
f.call(null,v,k);

var G__18025 = seq__18015;
var G__18026 = chunk__18016;
var G__18027 = count__18017;
var G__18028 = (i__18018 + (1));
seq__18015 = G__18025;
chunk__18016 = G__18026;
count__18017 = G__18027;
i__18018 = G__18028;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18015);
if(temp__4425__auto__){
var seq__18015__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18015__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__18015__$1);
var G__18029 = cljs.core.chunk_rest.call(null,seq__18015__$1);
var G__18030 = c__17588__auto__;
var G__18031 = cljs.core.count.call(null,c__17588__auto__);
var G__18032 = (0);
seq__18015 = G__18029;
chunk__18016 = G__18030;
count__18017 = G__18031;
i__18018 = G__18032;
continue;
} else {
var vec__18020 = cljs.core.first.call(null,seq__18015__$1);
var k = cljs.core.nth.call(null,vec__18020,(0),null);
var v = cljs.core.nth.call(null,vec__18020,(1),null);
f.call(null,v,k);

var G__18033 = cljs.core.next.call(null,seq__18015__$1);
var G__18034 = null;
var G__18035 = (0);
var G__18036 = (0);
seq__18015 = G__18033;
chunk__18016 = G__18034;
count__18017 = G__18035;
i__18018 = G__18036;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18014,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18014;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args18037 = [];
var len__17843__auto___18043 = arguments.length;
var i__17844__auto___18044 = (0);
while(true){
if((i__17844__auto___18044 < len__17843__auto___18043)){
args18037.push((arguments[i__17844__auto___18044]));

var G__18045 = (i__17844__auto___18044 + (1));
i__17844__auto___18044 = G__18045;
continue;
} else {
}
break;
}

var G__18039 = args18037.length;
switch (G__18039) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18037.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18040 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18041){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18041 = meta18041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18042,meta18041__$1){
var self__ = this;
var _18042__$1 = this;
return (new cognitect.transit.t_cognitect$transit18040(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18041__$1));
});

cognitect.transit.t_cognitect$transit18040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18042){
var self__ = this;
var _18042__$1 = this;
return self__.meta18041;
});

cognitect.transit.t_cognitect$transit18040.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18040.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18040.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18040.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18041","meta18041",710597953,null)], null);
});

cognitect.transit.t_cognitect$transit18040.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18040.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18040";

cognitect.transit.t_cognitect$transit18040.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cognitect.transit/t_cognitect$transit18040");
});

cognitect.transit.__GT_t_cognitect$transit18040 = (function cognitect$transit$__GT_t_cognitect$transit18040(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18041){
return (new cognitect.transit.t_cognitect$transit18040(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18041));
});

}

return (new cognitect.transit.t_cognitect$transit18040(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16785__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map