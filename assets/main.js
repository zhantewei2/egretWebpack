var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) {
    function r() {
        this.constructor = t;
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    r.prototype = e.prototype, t.prototype = new r();
};
var MyGrid = (function (_super) {
    __extends(MyGrid, _super);
    function MyGrid() {
        var _this = _super.call(this) || this;
        _this.drawGrid();
        return _this;
    }
    MyGrid.prototype.drawGrid = function () {
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0, 0, 100, 100);
        this.graphics.endFill();
        this.graphics.lineStyle(2, 0x000000);
        this.graphics.drawArc(100, 100, 100, 0, Math.PI * 2, true);
        this.graphics.endFill();
    };
    return MyGrid;
}(egret.Sprite));
__reflect(MyGrid.prototype, "MyGrid");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.clickMethod = function () { };
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onInit, _this);
        return _this;
    }
    Main.prototype.drawRect = function (shp, color, x, y, w, h) {
        shp.graphics.beginFill(color);
        shp.graphics.drawRect(x, y, w, h);
        shp.graphics.endFill();
    };
    Main.prototype.appendToggleBtn = function () {
        var _this = this;
        var btn = new egret.Sprite();
        this.drawRect(btn, 0xffff00, 0, 0, 100, 50);
        this.addChild(btn);
        var text = new egret.TextField();
        text.text = 'toggle';
        text.textColor = 0x00000;
        text.x = 10;
        text.y = 10;
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            _this.clickMethod();
        }, this);
        btn.addChild(text);
        btn.x = 200;
        btn.y = 200;
    };
    Main.prototype.onInit = function () {
        this.appendToggleBtn();
        var circle = new egret.Shape();
        circle.graphics.beginFill(0x00ff00);
        circle.graphics.drawCircle(0, 0, 50);
        circle.graphics.endFill();
        this.addChild(circle);
        var x = 0, y = 0, speed = 10;
        console.log(circle);
        //  setInterval(()=>{
        //      x=x+speed;
        //      y=y+speed;
        //      console.log(x,y)
        //     circle.x=x;
        //     circle.y=y;
        // },500);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");