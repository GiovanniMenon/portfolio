"use client";
import { motion } from "framer-motion";

export default function Shapes() {
  const generateRandomColor = () => {
    const colorValue = Math.floor(Math.random() * 21) * 5; // Genera multipli di 5
    return `bg-violet/${colorValue}`;
  };
  const generateRandomRotation = 88;

  return (
    <div className={"h-full"}>
      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        className={""}
      >
        <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-tiolet/30 rotate-[67deg]"></div>
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        className={""}
      >
        <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-tiolet/90 rotate-[223deg]"></div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        className={"absolute -right-36"}
      >
        <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-tiolet/20 rotate-[167deg]"></div>
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        className={"absolute top-[10%] -right-16"}
      >
        <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-tiolet/70 rotate-[23deg]"></div>
      </motion.div>
    </div>
  );
}
