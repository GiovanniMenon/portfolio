"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    // @ts-ignore
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 200 * 2,
      height: 200 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.001;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);
  // @ts-ignore
  return (
    <div className={"flex flex-col justify-start w-full h-fit"}>
      <Link
        className="animate-shine bg-[length:200%_100%] font-medium bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)]
        w-fit p-1.5 border rounded "
        href="#"
      >
        <span className="text-xs">About Me</span>
      </Link>
      <div className={"mt-10 flex flex-col gap-10"}>
        <h1 className={"text-5xl font-black"}>
          Hello there, I am a student interested in Programming, Virtual Reality
          and CyberSecurity
        </h1>
        <p className={"text-white text-opacity-80 font-[200] "}>
          I am a 21-year-old Italian student deeply passionate about technology
          and innovation. Currently, I am in my third year pursuing a
          Bachelor&apos;s degree in Computer Science (Department of Mathematics)
          at the University of Padua.
          <br />
          <br />
          Simultaneously, I am actively engaged in preparing a Research Project
          in the field of Cyber Security, which will serve as centerpiece of my
          Bachelor&apos;s thesis. My primary interests lie in the realm of
          Information Security, with a particular focus on Network Security.
          After graduation, I plan to continue my studies in this field.
        </p>
        <div className={"flex flex-row space-x-2"}>
          <Button>Download my CV</Button>
          <Button variant={"secondary"}>Contact Me</Button>
        </div>
        <div>Qui carosello di technolgie</div>
      </div>
    </div>
  );
}
