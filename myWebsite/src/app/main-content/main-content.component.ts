import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {
  private canvas: any;
  private context: any;
  private paint: boolean = false;
  private maze=[[40,40,100,20],[40,40,20,100]]
  private curX;
  private curY;

  constructor() {
    this.curX = 0
    this.curY = 0
  }

  draw(curX:any,curY:any): void {
    this.curX = curX;
    this.curY = curY;
    let canvas = document.getElementById('canvas')! as HTMLCanvasElement
    let context = canvas.getContext("2d")!
    context.fillStyle = '#FF0000'
    console.log(context)
    context.fillRect(this.curX,this.curY-68,10,10)
    this.context = context
  }

  ngOnInit(): void {
    
    let canvas = document.getElementById('canvas')! as HTMLCanvasElement
    let context = canvas.getContext("2d")!
    console.log(context);
    context.fillStyle = '#FF0000'
    // for(let i = 0;i < this.maze.length;i+=1){
    //   context.fillRect(this.maze[i][0],this.maze[i][1],this.maze[i][2],this.maze[i][3]);
    // }
    this.canvas = canvas;
    this.context = context;
    canvas = this.canvas;
    document.onmousemove = (event: any) => {
      var eventDoc, doc, body;

      event = event || window.event; // IE-ism

      // If pageX/Y aren't available and clientX/Y are,
      // calculate pageX/Y - logic taken from jQuery.
      // (This is to support old IE)
      if (event.pageX == null && event.clientX != null) {
          eventDoc = (event.target && event.target.ownerDocument) || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;

          event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      // Use event.pageX / event.pageY here
      this.draw(event.pageX,event.pageY)
    }
  }

}
