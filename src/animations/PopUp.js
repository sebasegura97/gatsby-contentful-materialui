import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const popup = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
}

export default function PopUp({
  children,
  restartOnLeave,
  transitionDelay,
  transitionDuration,
  rootMargin,
}) {
  const [ref, inView] = useInView({
    rootMargin: rootMargin || "-100px 0px",
  })
  const controls = useAnimation()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    if (!inView && restartOnLeave) {
      controls.start("hidden")
    }
  })

  return (
    <motion.div
      variants={popup}
      animate={controls}
      ref={ref}
      initial="hidden"
      transition={{
        delay: transitionDelay || 0,
        default: { duration: transitionDuration || 0.4, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  )
}
