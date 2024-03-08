import React, { useRef, useEffect } from "react";
import "./ShootingStar.css"; // Import external CSS file

const ShootingStar = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let posX = 0;
    let posY = 0;
    let speedX = 0;
    let speedY = 0;
    let shooting = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(posX, posY, 2, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      posX += speedX;
      posY += speedY;

      if (posX < 0 || posX > canvas.width || posY < 0 || posY > canvas.height) {
        shooting = false;
      }

      if (shooting) {
        requestAnimationFrame(draw);
      }
    }

    function handleMouseMove(event) {
      posX = event.clientX;
      posY = event.clientY;
    }

    function handleTouchMove(event) {
      const touch = event.touches[0];
      posX = touch.clientX;
      posY = touch.clientY;
    }

    function handleMouseDown(event) {
      shooting = true;
      speedX = (event.clientX - posX) / 20;
      speedY = (event.clientY - posY) / 20;
      draw();
    }

    function handleTouchStart(event) {
      const touch = event.touches[0];
      shooting = true;
      speedX = (touch.clientX - posX) / 20;
      speedY = (touch.clientY - posY) / 20;
      draw();
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return <canvas ref={canvasRef} className="shooting-star"></canvas>;
};

export default ShootingStar;
