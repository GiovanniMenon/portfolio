import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TimeExperience() {
  return (
    <Timeline>
      <TimelineItem status="done">
        <TimelineHeading>Data</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="prose">
              <p>Il resto che voglio</p>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="done">
        <TimelineHeading>Data</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="prose">
              <p>Il resto che voglio</p>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading>Data</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="prose">
              <p>Il resto che voglio</p>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading>Data</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="prose">
              <p>Il resto che voglio</p>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading>asd</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="prose">
              <p>Il resto che voglio</p>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading>Data</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={"animate"}
            transition={{
              duration: 0.5,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="prose">
              <p>Il resto che voglio</p>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
