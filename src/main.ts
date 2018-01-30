
// class Main extends (window as any).egret.DisplayObjectContainer{
//     constructor(){
//         super()
//     }
// }
class Main extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onInit,this);
    }
    calRectMax=(element:any={},{x=0,y=0,len=this.len}:any)=>{
            element.minX=x;
            element.minY=y;
            element.maxX=x+len;
            element.maxY=y+len;
            return element;
    };
    len:number=100;
    interceLine=(x0:number,x1:number,z0:number,z1:number)=>{
        (x0>=z0&&x0<=z1)||(x1>=z0&&x1<=z1);
    }

    compareRect(bound0:any,bound1:any){
        bound0.minX
    }
    onInit(){
        const shp=new egret.Shape();
        const len:any=this.len;
        let blockPos={
            x:0,
            y:0
        };

        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(blockPos.x,blockPos.y,len,len);
        shp.graphics.endFill();

        this.addChild(shp);
        const btn=this.drawBtn();
        const btnBound=this.calRectMax({},{x:200,y:200,len:this.len});
        const shpBound=this.calRectMax({},{x:0,y:0,len:this.len});
        let nextX,nextY;
        const moveBlock=(speed=1)=>{
            nextX=shp.x+speed;
            nextY=shp.y+=speed;
            this.calRectMax(shpBound,{x:shp.x,y:shp.y});
            let hitX=this.interceLine(shpBound.minX,shpBound.maxX,btnBound.minX,btnBound.maxX);
            let hitY=this.interceLine(shpBound.minY,shpBound.maxY,btnBound.minY,btnBound.maxY);
            if(hitX&&hitY){
                console.log('hit');
            }
            shp.x=nextX;
            shp.y=nextY;

        };
        let run:any;
        //setInterval(moveBlock,200);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            if(!run)return run=setInterval(moveBlock,30);
            clearInterval(run);
            run=null;
        },this);
    }
    drawBtn(){
        const btn=new egret.Sprite();
        btn.graphics.beginFill(0xffff00);
        btn.graphics.drawRect(0,0,this.len,this.len);
        btn.graphics.endFill();
        const label:any=new egret.TextField();
        label.text='btn';
        label.x=20;
        label.y=20;
        label.textColor=0x000000;
        btn.addChild(label);
        btn.x=200;
        btn.y=200;
        this.addChild(btn);
        btn.touchEnabled=true;
        return btn;
    }
}


(window as any)['Main']=Main;