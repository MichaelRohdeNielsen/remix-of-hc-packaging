import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const } },
};

export const SectionReveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: fadeUp.hidden,
      visible: {
        ...fadeUp.visible,
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as [number, number, number, number], delay },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default SectionReveal;
