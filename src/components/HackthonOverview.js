import React, { memo, useState, useEffect, useCallback } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import groupProgramming from "../assets/img/banner-illustration.png";
import "./HackathonOverview.css";
import OptimizedImage from './common/OptimizedImage';

// Memoized stat counter component
const StatCounter = memo(({ value, label }) => {
  const [hasStarted, setHasStarted] = useState(false);

  const onStart = useCallback(() => {
    setHasStarted(true);
  }, []);

  return (
    <div className="stat">
      <CountUp
        start={0}
        end={value}
        duration={2}
        suffix="+"
        useEasing={true}
        separator=","
        onStart={onStart}
        enableScrollSpy={true}
        scrollSpyDelay={100}
        className={`counters ${hasStarted ? 'started' : ''}`}
      />
      <p>{label}</p>
    </div>
  );
});

// Pre-defined stats to avoid re-renders
const stats = [
  { value: 100000, label: "Prize Pool" },
  { value: 200, label: "Registrations" },
  { value: 50, label: "Teams" },
  { value: 17, label: "Themes" },
  { value: 10, label: "Companies" },
  { value: 20, label: "Sponsors" }
];

const HackathonOverview = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = groupProgramming;
    img.onload = () => setImageLoaded(true);

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const element = document.getElementById('overview-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  if (!isVisible) {
    return <div id="overview-section" style={{ minHeight: '100px' }} />;
  }

  return (
    <section className="overview-section" id="overview-section">
      <div className="container mx-auto px-4">
        <h1 className="text-[#7DFFE4] text-center text-[45px] font-bold mb-8">
          What is HackOverflow 3.0?
        </h1>
        
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            {imageLoaded && (
              <OptimizedImage
                src={groupProgramming}
                alt="Programming Illustration"
                className="w-full transform hover:scale-105 transition-transform duration-300"
                priority={true}
                width={600}
                height={400}
              />
            )}
          </div>
          
          <div className="w-full lg:w-1/2 text-white px-4">
            <p className="text-lg leading-relaxed mb-8">
              HackOverflow, a 3-day National level hackathon organized by the Department of Computer Engineering at PHCET, brings together students from all over the country to showcase their skills and creativity in software development. The event provides a platform for collaboration, learning, and the development of new solutions to real-world problems.
            </p>
            
            <div className="stats grid grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatCounter
                  key={index}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://discord.com/invite/Pkp75qysYZ"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                <button className="bg-[#5B8F81] hover:bg-[#5B8F81] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Join Discord Channel
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Memoize the entire component
export default memo(HackathonOverview);
