(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != null && cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != null && cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != null && cur != exportRoot) {
			cacheList.push(cur);
			cur = cur.parent;
		}
	}
};

lib.gfontAvailable = function(family, totalGoogleCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

	loadedGoogleCount++;
	if(loadedGoogleCount == totalGoogleCount) {
		lib.updateListCache(gFontsUpdateCacheList);
	}
};

lib.tfontAvailable = function(family, totalTypekitCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

	loadedTypekitCount++;
	if(loadedTypekitCount == totalTypekitCount) {
		lib.updateListCache(tFontsUpdateCacheList);
	}
};
// symbols:



(lib.Panigale_FinalEdition_2018_Ambience_FE_03_darker = function() {
	this.initialize(img.Panigale_FinalEdition_2018_Ambience_FE_03_darker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Panigale_FinalEdition_2018_Studio_FE_C01 = function() {
	this.initialize(img.Panigale_FinalEdition_2018_Studio_FE_C01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1402,768);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("R", "normal 300 120px 'tk-bicyclette'", "#FFFFFF");
	this.text.lineHeight = 153;
	this.text.lineWidth = 87;
	this.text.parent = this;
	this.text.setTransform(218,65.6,0.799,0.799);
	if(!lib.properties.webfonts['tk-bicyclette']) {
		lib.webFontTxtInst['tk-bicyclette'] = lib.webFontTxtInst['tk-bicyclette'] || [];
		lib.webFontTxtInst['tk-bicyclette'].push(this.text);
	}

	this.text_1 = new cjs.Text("FINAL EDITION", "normal 400 30px 'tk-bicyclette'", "#FFFFFF");
	this.text_1.lineHeight = 40;
	this.text_1.lineWidth = 283;
	this.text_1.parent = this;
	this.text_1.setTransform(3.1,158.1,0.799,0.799);
	if(!lib.properties.webfonts['tk-bicyclette']) {
		lib.webFontTxtInst['tk-bicyclette'] = lib.webFontTxtInst['tk-bicyclette'] || [];
		lib.webFontTxtInst['tk-bicyclette'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("PANIGALE", "normal 700 72px 'tk-bicyclette'", "#FFFFFF");
	this.text_2.lineHeight = 93;
	this.text_2.lineWidth = 370;
	this.text_2.parent = this;
	this.text_2.setTransform(-3.9,32.5,0.799,0.799);
	if(!lib.properties.webfonts['tk-bicyclette']) {
		lib.webFontTxtInst['tk-bicyclette'] = lib.webFontTxtInst['tk-bicyclette'] || [];
		lib.webFontTxtInst['tk-bicyclette'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("1299", "normal 800 130px 'tk-bicyclette'", "#BE1D22");
	this.text_3.lineHeight = 166;
	this.text_3.lineWidth = 310;
	this.text_3.parent = this;
	this.text_3.setTransform(-15.9,60.6,0.799,0.799);
	if(!lib.properties.webfonts['tk-bicyclette']) {
		lib.webFontTxtInst['tk-bicyclette'] = lib.webFontTxtInst['tk-bicyclette'] || [];
		lib.webFontTxtInst['tk-bicyclette'].push(this.text_3);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,30.9,311,170.8);


(lib.riders_dark_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Panigale_FinalEdition_2018_Ambience_FE_03_darker();
	this.instance.parent = this;
	this.instance.setTransform(-640,-360,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.riders_dark_mc, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.logo_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#963032"],[0,1],0,0,0,0,0,8.6).s().p("AhjA5QgFgGACgIQADgMAmgWQA9giBnglIhBAnQglAXgYAVIgjAdQgRANgLAAQgIAAgFgGg");
	this.shape.setTransform(-156.9,-144.5,1.217,1.217);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#963032"],[0,1],0,0,0,0,0,11.6).s().p("AgBA5QgDg6gIgsQgJgsgCgRQgEgdAHgNQAGgKALgCQAJgBAIAIQANANgBA7QAABfgaCTIgBhog");
	this.shape_1.setTransform(166.6,-117.5,1.217,1.217);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#963032"],[0,1],0,0,0,0,0,30.8).s().p("AlJEMQAsADC7idQC9idDvjxQjUEJkbDzQg2AzgqAIQgIACgIAAQgbAAgZgRg");
	this.shape_2.setTransform(38.5,149.9,1.217,1.217);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ArFPIQCPgECniYQIxoAEipIQBBiGBFi9QBAivAviuIANgLQgxC0hBC0QhIDEg+B/QkjJJowH/QinCYiPAEg");
	this.shape_3.setTransform(86.3,80,1.217,1.217);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#240A0D").s().p("A1RJmQhKjyghjOQgxk3BCiIQBIiTEwh4QDAhKEQg8QE1hCFSAAQFQgBE5BBQDeAtDRBQQEjBtBOB1IAFAJQhPh1kihsQjRhQjcgtQk5hAlQABQlTAAk0BDQkQA6jABLQkwB4hICTQhCCIAxE2QAhDPBKDyIAnB6IgCACQgXhBgVhGg");
	this.shape_4.setTransform(-3.3,-106.7,1.217,1.217);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#240A0D").s().p("AlvOYQhEglhMhGQm4mSj5maQgagpAVhVQAShIAigxQAUgfAeghIgGAIQB+iTEGiAQD8h7FehdQFHhXFmguQFdgtEsAEIgDALQk1gDlnAwQlwAxlLBcQllBij5CCQkSCOhtCjQgUAegRAtQgTAygEArQAAAlAOAWQD5GaG4GRQBMBGBEAmQBZAxBRgBQCPgDCniZIBlheQg2A1g5A1QinCYiPADIgEAAQhPAAhXgwg");
	this.shape_5.setTransform(24.9,80.1,1.217,1.217);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#696F76","#FFFFFF"],[0,1],-3.2,31.4,3.3,-31.2).s().p("AiCDYIBcmvICpAAIhbGvg");
	this.shape_6.setTransform(135.3,-107.8,1.217,1.217);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#696F76","#FFFFFF"],[0,1],-7.6,32.7,2.8,-33.5).s().p("AikDYIBDk7IhqAAIAYh0IF/AAIgZB0IhqAAIhDE7g");
	this.shape_7.setTransform(101.8,-107.8,1.217,1.217);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#696F76","#FFFFFF"],[0,1],-4,42.5,11.9,-39.4).s().p("ABIDYIgChFIh6AAIggBFIikAAIDmmvIDcAAIAvGvgAgEApIBIAAIAAihIgBAAg");
	this.shape_8.setTransform(43.5,-107.8,1.217,1.217);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#696F76","#FFFFFF"],[0,1],-5.6,30,4.9,-29.8).s().p("AjECkQgqg7AXhqQAShnBHg8QBJg+BrAAQBZAAAsAmQAyArgSBZIidAAQAGghgJgOQgIgLgSAAQgeAAgQAfQgNAYgNA7QgMA7ACAXQADAhAegBQARAAAMgMQANgNAJghICgAAQgSBVhHAtQg/AphWAAQhuAAgrg/g");
	this.shape_9.setTransform(-6.8,-107.7,1.217,1.217);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#696F76","#FFFFFF"],[0,1],-25.4,124.2,24.5,-132.7).s().p("AjLC2QgugnARhOIA9keICrAAIg8EXQgFAYAIANQAGALAPAAQAPAAALgLQAMgNAFgYIA8kXICrAAIg9EeQgRBOg+AnQg9AnhiAAQhiAAgsgng");
	this.shape_10.setTransform(-61.6,-107.1,1.217,1.217);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#696F76","#FFFFFF"],[0,1],-4.4,31.4,6.7,-25.6).s().p("AjxDYIBcmvIDKAAQB6AAArA/QAmA2gXBnQgUBhhHA5QhHA5hjAAgAg1B2IARAAQAkAAAXgcQAVgXANhDQAPhCgKgXQgMgcglAAIgQAAg");
	this.shape_11.setTransform(-121.9,-107.8,1.217,1.217);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2E3439").s().p("AiCDYIABgIICkAAIBamnIAGAAIhbGvg");
	this.shape_12.setTransform(135.9,-106.8,1.217,1.217);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2E3439").s().p("AikDYIACgIICjAAIBDk6IBrAAIAXhtIAGAAIgZB0IhqAAIhDE7gAjLhjIABgHIBkAAIgBAHg");
	this.shape_13.setTransform(102.3,-106.8,1.217,1.217);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2E3439").s().p("ABIDYIAAgIICsAAIgumnIAEAAIAvGvgAj4DYIAEgIICbAAIAghFIB6AAIABAIIh2AAIggBFgAgJAiIBHiiIABAAIAAAQIhACSg");
	this.shape_14.setTransform(44.2,-106.8,1.217,1.217);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2E3439").s().p("AjUCAQAsA/BuAAQBTAAA/gnQBFgrAVhRIAGAAQgSBVhGAtQhAAphVAAQh1AAgqhHgAhAAdQABgVAJgrQANg7AMgYQARggAeAAQAVABAGAPQgHgIgPAAQgeAAgRAgQgMAWgNA9QgIAlgCAUQgCAbAGANQgLgLACgegAAzhTIACgIICWAAQAOhBgYgqQAeArgPBIg");
	this.shape_15.setTransform(-4.9,-103.4,1.217,1.217);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E3439").s().p("AjmCfQAoA3B2AAQBiAAA9gnQA+goAQhNIA7kWIAHAAIg9EdQgRBNg+AoQg8AnhiABQh+AAglg/gAhHAzIA5kPIAHAAIg8EXQgEAUAFAMQgMgMAHgcg");
	this.shape_16.setTransform(-60.2,-106.1,1.217,1.217);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2E3439").s().p("AjxC5IACgHIDOAAQBjAABHg5QBHg5AUhhQAVhgggg3QAmA3gWBoQgUBhhIA4QhGA5hjAAgAg6BQIAyjrIAQAAQAjAAAMAXQgNgQgdAAIgQAAIgwDkg");
	this.shape_17.setTransform(-121.3,-103.1,1.217,1.217);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#D21F25","#991A1D"],[0,1],6.1,-26,0,6.1,-26,118.6).s().p("AikYpQhDgmhNhGQm3mQj6mbQgZgqAVhVQAShIAigyQBuikETiOQD6iBFmhiQFOhcFxgxQFpgwE0AEQgxC0hBCzQhFC9hBCFQkiJKoyH/QinCZiPADIgFAAQhOAAhXgwgA1rkFQhLjyghjPQgxk3BCiIQBIiUExh3QC/hLERg7QE0hCFTAAQFQgBE4BAQDeAuDSBPQEiBuBOB1QBIBrgQD7QgLCxgzDeQh0ACnVACQmhACkHAJQtCAcmGCBQixA7iCBfQgWhBgVhGg");
	this.shape_18.setTransform(0,0,1.217,1.217);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFFFFF","#FFFFFF"],[0,1],111062.3,-15604.2,-101558.6,14275).s().p("A2YH/QCChfCxg7QGGiBNCgcQEHgJGhgCQHVgCB0gCQAtjEAOigQAUjjguh4QAxB3gTDmQgNCjguDHQh1ADnVACQmiABkGAJQtCAdmGCBQivA5iEBgg");
	this.shape_19.setTransform(10.7,-77.7,1.217,1.217);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#696F76","#E6E7E8","#A6A8AB","#E6E7E8","#FFFFFF"],[0,0.349,0.569,0.859,1],-140.6,55.1,191.3,-114).s().p("AmIYaQnamWknoTQhTiWhgjpQhtkJhLkAQjEqdCBkIQCSkqMNiqQE/hFFiAAQFeAAFEBCQD/A0DeBYQEzB6BfCPQCcDpiRJvQg3DthZD6QhODZhICSQk3Jyo4H8QjGC4jCAEIgIAAQjGAAjCi8g");
	this.shape_20.setTransform(0,0,1.217,1.217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-213,400,426);


(lib.btn_electronics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ELECTRONICS", "normal 700 18px 'tk-bicyclette'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 181;
	this.text.parent = this;
	this.text.setTransform(688.7,304.2);
	if(!lib.properties.webfonts['tk-bicyclette']) {
		lib.webFontTxtInst['tk-bicyclette'] = lib.webFontTxtInst['tk-bicyclette'] || [];
		lib.webFontTxtInst['tk-bicyclette'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AucinIc5AAIAAFPI85AAg");
	this.shape.setTransform(689.1,314.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#163923").s().p("AuVCgIAAk/IcrAAIAAE/g");
	this.shape_1.setTransform(689.1,314.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AucCvQgDAAgCgCQgDgCAAgDIAAlPQAAgDADgCQACgCADAAIc5AAQADAAACACQADACAAADIAAFPQAAADgDACQgCACgDAAgAucCoIc5AAIAAlPI85AAIc5AAIAAFPI85AAIAAlPIAAFPgAuVCgIcrAAIAAk/I8rAAg");
	this.shape_2.setTransform(689.1,314.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE1D22").s().p("AuVCgIAAk/IcrAAIAAE/g");
	this.shape_3.setTransform(689.1,314.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AucCvQgDAAgCgCQgDgCAAgDIAAlPQAAgDADgCQACgCADAAIc5AAQADAAACACQADACAAADIAAFPQAAADgDACQgCACgDAAgAuVCgIcrAAIAAk/I8rAAg");
	this.shape_4.setTransform(689.1,314.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CEA849").s().p("AuVCgIAAk/IcrAAIAAE/g");
	this.shape_5.setTransform(689.1,314.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.text}]},1).to({state:[{t:this.shape_5},{t:this.text},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(595.6,297,187,35.6);


(lib.btn_explore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("EXPLORE THE BIKE", "normal 700 18px 'tk-bicyclette'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 181;
	this.text.parent = this;
	this.text.setTransform(688.7,304.2);
	if(!lib.properties.webfonts['tk-bicyclette']) {
		lib.webFontTxtInst['tk-bicyclette'] = lib.webFontTxtInst['tk-bicyclette'] || [];
		lib.webFontTxtInst['tk-bicyclette'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AucinIc5AAIAAFPI85AAg");
	this.shape.setTransform(689.1,314.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#163923").s().p("AuVCgIAAk/IcrAAIAAE/g");
	this.shape_1.setTransform(689.1,314.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AucCvQgDAAgCgCQgDgCAAgDIAAlPQAAgDADgCQACgCADAAIc5AAQADAAACACQADACAAADIAAFPQAAADgDACQgCACgDAAgAuVCgIcrAAIAAk/I8rAAg");
	this.shape_2.setTransform(689.1,314.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE1D22").s().p("AuVCgIAAk/IcrAAIAAE/g");
	this.shape_3.setTransform(689.1,314.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CEA849").s().p("AuVCgIAAk/IcrAAIAAE/g");
	this.shape_4.setTransform(689.1,314.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.text}]},1).to({state:[{t:this.shape_4},{t:this.text},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(595.6,297,187,35.6);


(lib.bike_stunt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Panigale_FinalEdition_2018_Studio_FE_C01();
	this.instance.parent = this;
	this.instance.setTransform(307.2,-571.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bike_stunt_mc, new cjs.Rectangle(307.2,-571.2,701,384), null);


(lib.riders_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.riders_dark_mc();
	this.instance.parent = this;
	this.instance.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.riders_mc, new cjs.Rectangle(0,0,1280,720), null);


(lib.logo_slide_left_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slide_left
	this.instance = new lib.logo_gfx("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-113.1,-36.2,0.25,0.249);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-640},4,cjs.Ease.circInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.1,-89.3,100,106.3);


(lib.logo_slide_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blowup
	this.instance = new lib.logo_gfx("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-113.1,-58.5,0.25,0.249);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.25,x:-112.9,y:-316},20,cjs.Ease.sineOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.1,-111.6,100,106.3);


(lib.logo_heartbeat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heartbeat
	this.instance = new lib.logo_gfx("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(535.1,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.35,scaleY:0.35,x:534.7},6).to({scaleX:0.25,scaleY:0.25,x:534.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485.1,-53.2,100,106.5);


(lib.logo_blowup_gfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blowup
	this.instance = new lib.logo_gfx("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.012,0.012);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.5,scaleY:1.5},14,cjs.Ease.sineIn).to({scaleX:0.25,scaleY:0.25},6,cjs.Ease.sineIn).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.6,5,5.3);


(lib.bike_right_direction_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bike_stunt
	this.instance = new lib.bike_stunt_mc();
	this.instance.parent = this;
	this.instance.setTransform(303,-176.6,1,1,-40,0,0,427.2,-295.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:427.4,regY:-295.2,rotation:0,x:1085.3},9).to({x:1446.4},6).to({x:913.3},20,cjs.Ease.bounceOut).to({_off:true},19).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.7,-761.4,783.9,744.8);


// stage content:
(lib.animate = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {

		// Stop at This Frame
		this.stop();

		// Click to Go to Web Page
		this.button_electronics.addEventListener("click", fl_ClickToGoToWebPage);

		function fl_ClickToGoToWebPage() {
			window.open("electronics.html", "_self");
		}

		this.button_explore.addEventListener("click", fl_ClickToGoToWebPage_1);

		function fl_ClickToGoToWebPage_1() {
			window.open("explore-the-bike.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// button_electronics
	this.button_electronics = new lib.btn_electronics();
	this.button_electronics.parent = this;
	this.button_electronics.setTransform(1155,-262.5,1.5,1.5);
	this.button_electronics._off = true;
	new cjs.ButtonHelper(this.button_electronics, 0, 1, 2, false, new lib.btn_electronics(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_electronics).wait(120).to({_off:false},0).to({x:413.6,y:-316.9},5,cjs.Ease.circOut).wait(20));

	// button_explore
	this.button_explore = new lib.btn_explore();
	this.button_explore.parent = this;
	this.button_explore.setTransform(1155,-262.5,1.5,1.5);
	this.button_explore._off = true;
	new cjs.ButtonHelper(this.button_explore, 0, 1, 2, false, new lib.btn_explore(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_explore).wait(110).to({_off:false},0).to({x:66.8,y:-316.9},5,cjs.Ease.circOut).wait(30));

	// bike_shift
	this.instance_2 = new lib.bike_stunt_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(595.7,784.7,1.5,1.5,0,0,0,657.2,-388.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({regX:657,regY:-388.4,scaleX:2.09,scaleY:2.09,x:959.7,y:669.9},34).wait(11));

	// bike_wheelie
	this.instance_3 = new lib.bike_right_direction_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-752.9,930.2,1.5,1.5,0,0,0,244,-173);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({_off:true},53).wait(45));

	// txt_panigale
	this.instance_4 = new lib.txt("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(593,1235.2,1.5,1.5,0,0,0,140.3,93.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({regX:140.4,regY:93.7,scaleX:1.24,scaleY:1.24,x:556,y:129.2},15,cjs.Ease.circInOut).wait(30));

	// logo_slide_left
	this.instance_5 = new lib.logo_slide_left_gfx("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(960.1,121.6,1.5,1.5,0,0,0,-113,-58.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100).to({_off:false},0).wait(45));

	// menu_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAAENIAAoZ");
	this.shape.setTransform(0,-517.1,1.406,1.406);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(22,57,35,0.769)").s().p("EhqqA8AMAAAg1PIAAobMAAAg6VMDVUAAAMAAAB3/g");
	this.shape_1.setTransform(960,-540,1.406,1.406);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(242,0,0,0.949)").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_2.setTransform(960,-483.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(24,57,36,0.773)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_3.setTransform(960,-483.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(228,0,0,0.894)").ss(0.9,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_4.setTransform(960,-426.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(25,56,37,0.78)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_5.setTransform(960,-426.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(215,0,0,0.843)").ss(0.9,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_6.setTransform(960,-369.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(27,56,38,0.784)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_7.setTransform(960,-369.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(201,0,0,0.788)").ss(0.8,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_8.setTransform(960,-312.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(28,56,38,0.788)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_9.setTransform(960,-312.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(188,0,0,0.737)").ss(0.8,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_10.setTransform(960,-255.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(30,55,39,0.796)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_11.setTransform(960,-255.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(174,0,0,0.682)").ss(0.7,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_12.setTransform(960,-198.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(31,55,40,0.8)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_13.setTransform(960,-198.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(161,0,0,0.631)").ss(0.7,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_14.setTransform(960,-142.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(33,55,41,0.804)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_15.setTransform(960,-142.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(148,0,0,0.58)").ss(0.6,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_16.setTransform(960,-85.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(34,54,42,0.812)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_17.setTransform(960,-85.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(134,0,0,0.525)").ss(0.6,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_18.setTransform(960,-28.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(36,54,43,0.816)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_19.setTransform(960,-28.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(121,0,0,0.475)").ss(0.5,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_20.setTransform(960,28.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(37,54,43,0.82)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_21.setTransform(960,28.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(107,0,0,0.42)").ss(0.4,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_22.setTransform(960,85.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(39,54,44,0.824)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_23.setTransform(960,85.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(94,0,0,0.369)").ss(0.4,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_24.setTransform(960,142.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(40,53,45,0.831)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_25.setTransform(960,142.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(81,0,0,0.318)").ss(0.3,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_26.setTransform(960,199);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(42,53,46,0.835)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_27.setTransform(960,199);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(67,0,0,0.263)").ss(0.3,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_28.setTransform(960,255.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(43,53,47,0.839)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_29.setTransform(960,255.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(54,0,0,0.212)").ss(0.2,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_30.setTransform(960,312.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(45,52,48,0.847)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_31.setTransform(960,312.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(40,0,0,0.157)").ss(0.2,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_32.setTransform(960,369.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(46,52,48,0.851)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_33.setTransform(960,369.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(27,0,0,0.106)").ss(0.1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_34.setTransform(960,426.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(48,52,49,0.855)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_35.setTransform(960,426.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(13,0,0,0.051)").ss(0.1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape_36.setTransform(960,483.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(49,51,50,0.863)").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_37.setTransform(960,483.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(51,51,51,0.867)").s().p("EhqqA8AMAAAh3/MDVUAAAMAAAB3/g");
	this.shape_38.setTransform(960,540,1.406,1.406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},125).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_38}]},1).wait(1));

	// logo_heartbeat
	this.instance_6 = new lib.logo_heartbeat("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(157.4,153.8,1.5,1.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).wait(52).to({startPosition:0},0).to({_off:true},1).wait(45));

	// logo_slide_up
	this.instance_7 = new lib.logo_slide_gfx("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1348.6,719.4,1.5,1.5,0,0,0,146.1,61.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({_off:true},20).wait(98));

	// logo_blowup
	this.instance_8 = new lib.logo_blowup_gfx("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(960,540,1.5,1.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},27).wait(118));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_5 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_6 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_7 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_8 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_9 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_10 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_11 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_12 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_13 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_14 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_15 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_16 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_17 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	var mask_graphics_134 = new cjs.Graphics().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:960,y:540}).wait(1).to({graphics:mask_graphics_5,x:960,y:540}).wait(1).to({graphics:mask_graphics_6,x:960,y:540}).wait(1).to({graphics:mask_graphics_7,x:960,y:540}).wait(1).to({graphics:mask_graphics_8,x:960,y:540}).wait(1).to({graphics:mask_graphics_9,x:960,y:540}).wait(1).to({graphics:mask_graphics_10,x:960,y:540}).wait(1).to({graphics:mask_graphics_11,x:960,y:540}).wait(1).to({graphics:mask_graphics_12,x:960,y:540}).wait(1).to({graphics:mask_graphics_13,x:960,y:540}).wait(1).to({graphics:mask_graphics_14,x:960,y:540}).wait(1).to({graphics:mask_graphics_15,x:960,y:540}).wait(1).to({graphics:mask_graphics_16,x:960,y:540}).wait(1).to({graphics:mask_graphics_17,x:960,y:540}).wait(117).to({graphics:mask_graphics_134,x:960,y:540}).wait(11));

	// pitbox
	this.instance_9 = new lib.riders_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(960,540,1.5,1.5,0,0,0,640,360);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1916.1,1075.8,7.5,8);
// library properties:
lib.properties = {
	id: '6E1138DB530D4B94B7052EB784BBB459',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Panigale_FinalEdition_2018_Ambience_FE_03_darker.jpg", id:"Panigale_FinalEdition_2018_Ambience_FE_03_darker"},
		{src:"images/Panigale_FinalEdition_2018_Studio_FE_C01.png", id:"Panigale_FinalEdition_2018_Studio_FE_C01"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6E1138DB530D4B94B7052EB784BBB459'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
