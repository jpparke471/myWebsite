import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {
  private canvas: any;
  private context: any;
  private maze=[[40,40,100,20],[40,40,20,100]]

  constructor() {
  }

  ngOnInit(): void {
    $(document).ready(launch);
  }

}
function rotate(element:any, radians:any):void {
  radians += Math.PI / 2;
  var s = 'rotate(' + radians + 'rad)';
  $(element).css('-moz-transform', s)
      .css('-webkit-transform', s)
      .css('-o-transform', s)
      .css('-ms-transform', s);
}
function initSnakes(container:any, numSnakes:any) {
  var snakeWidth = 22,
      snakeHeight = 22,
      snakeRadius = Math.max(snakeWidth, snakeHeight),
      maxDistance = 1.5 * snakeRadius,
      frameRate = 60,
      damping = 9 * frameRate / 30,
      width = container.width(),
      height = container.height(),
      border = parseInt(container.css('border-left-width'), 10),
      left = container.offset().left + border,
      top = container.offset().top + border,
      snakes = new Array(numSnakes),
      mouse = { x: width / 5, y: height / 5, mouse: true };

  const positionSnake = (snake:any) => {
    $(snake.element).css({ left: snake.x - snakeWidth / 2,
        top: snake.y - snakeHeight / 2 });
    rotate(snake.element, snake.angle);
  }

  for (var i = 0; i < numSnakes; ++i) {
    var snake = snakes[i] = {
      id: i,
      x: width * 4 / 5,
      y: height * 4 / 5,
      angle: Math.PI * 3 / 2,
      element: $.parseHTML('<div class="snakeSegment" style="z-index: 1;position: absolute;top: 100px;left: 50%;width: 0;height: 0;border-left: 11px solid transparent;border-right: 11px solid transparent;border-bottom: 22px solid #333"></div>')
    };
    var color = 'rgb(90, 150, ' + Math.min(200, (120 + 35 * i)) + ')';
    $(snake.element).css('border-bottom-color', color);
    container.append(snake.element);
    positionSnake(snake);
    if (i == 0) {
      follow(snake, mouse);
    } else {
      follow(snake, snakes[i - 1]);
    }
  }

  function follow(snake:any, leader:any) {
    function update () {
      var dx = leader.x - snake.x,
          dy = leader.y - snake.y,
          dd = Math.hypot(dx, dy),
          angle = snake.angle = Math.atan2(dy, dx),
          direction = (dd < snakeRadius ? -1 : 1);
      if (dd > maxDistance && !leader.mouse) {
        snake.x += Math.cos(angle) * (dd - maxDistance);
        snake.y += Math.sin(angle) * (dd - maxDistance);
        dx = leader.x - snake.x;
        dy = leader.y - snake.y;
        dd = maxDistance;
      }
      if (dd - snakeRadius < 0.5) {
        return;
      }
      snake.x += direction * Math.cos(angle) * dd / damping;
      snake.y += direction * Math.sin(angle) * dd / damping;
      positionSnake(snake);
    }
    update();
    snake.moveInterval = window.setInterval(update, 1000 / frameRate);
  }

  function mouseUpdate(event:any) {
    event = event || window.event;
    mouse.x = event.pageX - left;
    mouse.y = event.pageY - top;
  }
  container.mousemove(mouseUpdate);
}
function launch(this: any) {
  initSnakes($('#snakeShadowDemo'), 5);
}

