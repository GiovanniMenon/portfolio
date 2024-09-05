"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Shapes() {
  const { scrollYProgress } = useScroll();
  const rotateFirst = useTransform(scrollYProgress, [0, 1], [67, 67 + 180]);
  const rotateSecond = useTransform(scrollYProgress, [0, 1], [223, 223 + 90]);
  const rotateThird = useTransform(scrollYProgress, [0, 1], [167, 167 + 25]);
  const rotateFourth = useTransform(scrollYProgress, [0, 1], [23, 23 + 90]);

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [40, 800]);
  const translateYSecond = useTransform(scrollYProgress, [0, 1], [20, 900]);
  const translateYThird = useTransform(scrollYProgress, [0, 1], [80, 900]);
  const translateYFourth = useTransform(scrollYProgress, [0, 1], [60, 800]);

  return (
    <div className={"sticky top-5"}>
      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        style={{ rotate: rotateFirst, x: "25px", y: translateYFirst }}
        className="w-12 h-12 rounded bg-tiolet/30 rotate-[67deg]"
      />
      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        style={{ rotate: rotateSecond, x: "50px", y: translateYSecond }}
        className="w-20 h-20 rounded bg-tiolet/70 rotate-[223deg]"
      />

      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        style={{ rotate: rotateThird, x: "120px", y: translateYThird }}
        className={"  w-28 h-28 rounded bg-tiolet/20 rotate-[167deg]"}
      />

      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        style={{ rotate: rotateFourth, x: "100px", y: translateYFourth }}
        className={" w-16 h-16 rounded bg-tiolet/90 rotate-[23deg]"}
      />
    </div>
  );
}
