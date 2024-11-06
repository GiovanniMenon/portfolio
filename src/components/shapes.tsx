"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Shapes() {
  const { scrollYProgress } = useScroll();

  const rotateFirst = useTransform(scrollYProgress, [0, 1], [67, 67 + 180]);
  const rotateSecond = useTransform(scrollYProgress, [0, 1], [223, 223 + 90]);
  const rotateThird = useTransform(scrollYProgress, [0, 1], [167, 167 + 50]);
  const rotateFourth = useTransform(scrollYProgress, [0, 1], [23, 23 + 90]);

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [40, 480]);
  const translateYSecond = useTransform(scrollYProgress, [0, 1], [20, 380]);
  const translateYThird = useTransform(scrollYProgress, [0, 1], [80, 540]);
  const translateYFourth = useTransform(scrollYProgress, [0, 1], [60, 360]);

  const translateXFourth = useTransform(scrollYProgress, [0, 1], [100, 150]);

  return (
    <div className={"sticky top-5"}>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ rotate: rotateFirst, x: "25px", top: translateYFirst }}
        className="relative w-12 h-12 rounded bg-tiolet/30 rotate-[67deg]"
      />
      <motion.div
        animate={{
          y: [0, -5, 0], // Fluttuazione verticale
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ rotate: rotateSecond, x: "50px", top: translateYSecond }}
        className="relative w-20 h-20 rounded bg-tiolet/70 rotate-[223deg]"
      />

      <motion.div
        animate={{
          y: [0, 10, 0], // Fluttuazione verticale
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ rotate: rotateThird, x: "120px", top: translateYThird }}
        className={" relative w-28 h-28 rounded bg-tiolet/20 rotate-[167deg]"}
      />

      <motion.div
        animate={{
          y: [5, -5, 5], // Fluttuazione verticale
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          rotate: rotateFourth,
          x: translateXFourth,
          top: translateYFourth,
        }}
        className={"relative w-16 h-16 rounded bg-tiolet/90 rotate-[23deg]"}
      />
    </div>
  );
}
