import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function TimeExperience() {
  return (
    <Timeline>
      <TimelineItem status="done">
        <TimelineHeading>2015 - 2021</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="flex flex-col gap-2.5">
              <p className={"font-bold text-base tracking-tight"}>
                High School Diploma in Administration, Finance, and Marketing{" "}
                <span className={"font-normal opacity-70"}>at </span>
                ITET Einaudi.
              </p>
              <p className={"opacity-70 mt-1 mt-1"}>
                Final Evaluation: <span className={"font-bold"}>100/100</span> .
              </p>
              <div className={"flex gap-2 "}>
                <Badge variant={"secondary"} className={"text-sm"}>
                  C++
                </Badge>
              </div>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading>2021</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="flex flex-col gap-2.5">
              <p className={"font-bold text-base tracking-tight"}>
                Started Computer Science degree{" "}
                <span className={"font-normal opacity-70"}>at </span>
                University of Padua.
              </p>
              <div className={"flex gap-2 "}>
                <Badge variant={"secondary"} className={"font-bold text-sm"}>
                  C
                </Badge>
                <Badge variant={"secondary"} className={"text-sm"}>
                  Html
                </Badge>
                <Badge variant={"secondary"} className={"text-sm"}>
                  Css
                </Badge>
                <Badge variant={"secondary"} className={"text-sm"}>
                  Js
                </Badge>
              </div>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading>2023</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="flex flex-col gap-2.5">
              <p className={"font-bold text-base tracking-tight"}>
                Intern <span className={"font-normal opacity-70"}> as </span>{" "}
                Software Developer{" "}
                <span className={"font-normal opacity-70"}>at </span>
                Global Display Solution.
              </p>
              <p className={"opacity-70 mt-1"}>
                Worked on a web interface to integrate the OpenAI API into the
                company&apos;s operations .
              </p>
              <div className={"flex gap-2 "}>
                <Badge variant={"secondary"} className={"font-bold text-sm"}>
                  Python
                </Badge>
                <Badge variant={"secondary"} className={"text-sm"}>
                  Flask
                </Badge>
                <Badge variant={"secondary"} className={"text-sm"}>
                  Jira
                </Badge>
                <Badge variant={"secondary"} className={"text-sm"}>
                  Node.js
                </Badge>
              </div>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading>2024</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="flex flex-col gap-2.5">
              <p className={"font-bold text-base tracking-tight"}>
                Undergraduate Student Researcher{" "}
                <span className={"font-normal opacity-70"}>at </span> University
                of Padua.
              </p>
              <p className={"opacity-70 mt-1"}>
                For my bachelor&apos;s thesis, I did research on the security of
                the QUIC protocol against selective traffic manipulation.
              </p>
              <div className={"flex gap-2 "}>
                <Badge variant={"secondary"} className={"font-bold text-sm"}>
                  Go
                </Badge>
                <Badge variant={"secondary"} className={"text-sm"}>
                  Wireshark
                </Badge>
                <Badge variant={"secondary"} className={"text-sm"}>
                  VirtualBox
                </Badge>
              </div>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem status="done">
        <TimelineHeading>Present</TimelineHeading>
        <TimelineDot />
        <TimelineLine />
        <TimelineContent className="flex w-full flex-col gap-y-4 overflow-hidden text-balance pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="flex flex-col gap-2.5">
              <p className={"opacity-70"}>
                Enrolled in the Master&apos;s Programme in International
                Cybersecurity and Cyberintelligence
              </p>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
