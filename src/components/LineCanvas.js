import React, { useRef, useEffect } from "react";
import "./LineCanvas.css";
const LineCanvas = (props) => {
  const canvasRef = useRef();

  useEffect(() => {
    let background = canvasRef.current;
    let bgcontext = background.getContext("2d");
    // let alpha = 0.5;

    background.width = window.innerWidth;
    background.height = window.innerHeight;

    //declar variable
    //array that contains circles
    let circleArray = [];
    //frames per second
    // let FPS = 60;
    //number of circles
    let circleInitialNum = 30;
    let circleMaxAllowed = 50000;
    let mouse = {
      x: undefined,
      y: undefined,
    };

    //push each circle to array
    for (let i = 0; i < circleInitialNum; i++) {
      circleArray.push({
        radius: Math.random() * 6 + 4,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: Math.random() - 0.4,
        dy: Math.random() - 0.4,
      });
    }

    //draw
    function draw() {
      //draw circle
      for (let i = 0; i < circleArray.length; i++) {
        let circle = circleArray[i];

        bgcontext.globalAlpha = 1;
        bgcontext.beginPath();
        bgcontext.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        // bgcontext.stroke();
        bgcontext.fillStyle = "rgb(40,22,75)";
        bgcontext.fill();

        if (i < circleInitialNum) {
          bgcontext.globalAlpha = 1;
          bgcontext.beginPath();
          bgcontext.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
          // bgcontext.stroke();
          bgcontext.fillStyle = "rgb(192,192,192)";
          bgcontext.fill();
        }
      }

      //draw line
      for (let i = 0; i < circleArray.length; i++) {
        let circleI = circleArray[i];

        if (distance(mouse, circleI) < 400) {
          bgcontext.lineTo(mouse.x, mouse.y);
        }

        for (let j = 0; j < circleArray.length; j++) {
          let circleII = circleArray[j];

          const ratio = distance(circleI, circleII) / 300;

          if (distance(circleI, circleII) < 300) {
            bgcontext.globalAlpha = 1 - ratio;
            bgcontext.strokeStyle = `rgb(192,192,192)`;
            bgcontext.lineWidth = 1.5;
            bgcontext.beginPath();
            bgcontext.moveTo(circleI.x, circleI.y);
            bgcontext.lineTo(circleII.x, circleII.y);
            bgcontext.stroke();
          }
        }
      }
    }

    //distance between two circles
    function distance(point1, point2) {
      let xs = 0;
      let ys = 0;

      xs = point2.x - point1.x;
      xs = xs * xs;

      ys = point2.y - point1.y;
      ys = ys * ys;

      return Math.sqrt(xs + ys);
    }

    //update circle locations
    function update() {
      for (let i = 0; i < circleArray.length; i++) {
        let circle = circleArray[i];

        circle.x += circle.dx;
        circle.y += circle.dy;

        let boundary = 50;

        if (circle.x < -boundary || circle.x > window.innerWidth + boundary)
          circle.dx = -circle.dx;
        if (circle.y < -boundary || circle.y > window.innerHeight + boundary)
          circle.dy = -circle.dy;
      }
    }

    // mouse
    window.addEventListener("mousemove", function (event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    //click to add circle
    window.addEventListener("click", function (event) {
      if (circleArray.length < circleMaxAllowed) {
        circleArray.push({
          radius: Math.random() * 6 + 4,
          x: event.clientX,
          y: event.clientY,
          dx: Math.random() - 0.5,
          dy: Math.random() - 0.5,
        });
      }
    });

    //resize window
    window.addEventListener("resize", function () {
      background.width = window.innerWidth;
      background.height = window.innerHeight;
    });

    let requestId;

    const animate = () => {
      bgcontext.clearRect(0, 0, background.width, background.height);

      draw();
      update();

      requestId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return (
    <div className="line-canvas">
      <canvas id="canvas" ref={canvasRef}></canvas>
      <div id="overlay">{props.children}</div>
    </div>
  );
};
export default LineCanvas;
