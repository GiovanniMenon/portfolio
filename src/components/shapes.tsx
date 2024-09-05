"use client";
import { motion, useScroll } from "framer-motion";

export default function Shapes() {
  const { scrollYProgress } = useScroll();
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
        style={{ rotate: scrollYProgress }}
        className={""}
      >
        <div className="w-16 h-16 rounded-lg bg-tiolet/30 rotate-[67deg]"></div>
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
        <div className="w-24 h-24 rounded-lg bg-tiolet/90 rotate-[223deg]"></div>
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
        <div className="w-32 h-32 rounded-lg bg-tiolet/20 rotate-[167deg]"></div>
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
        style={{ rotate: scrollYProgress }}
      >
        <div className="w-20 h-20 rounded-lg bg-tiolet/70 rotate-[23deg]"></div>
      </motion.div>
    </div>
  );
}
