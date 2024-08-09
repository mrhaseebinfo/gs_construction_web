import styles from "./content.module.css"; // Import CSS Module
import { motion } from "framer-motion";

const motionContent = {
  whileHover: {
    scale: 1.1,
  },
  transition: {
    type: "spring",
    stiffness: 500,
  },
};

const ContentSection = () => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.mainParagraph}>
        <p>
          GS Builder is dedicated to offering a full spectrum of construction
          services, guiding you through every phase of your project. We are a
          premier construction company in Islamabad, known for delivering
          comprehensive solutions under one roof. This integrated approach sets
          us apart, ensuring a smooth and efficient experience for our clients
          from start to finish.
        </p>
      </div>
      <div className={styles.paragraphs}>
        <motion.div className={styles.paragraph} {...motionContent}>
          <h3>Reliable Foundations</h3>
          <p>
            The strength of any structure begins with its foundation. At GS
            Builder, we leverage cutting-edge construction practices and premium
            materials to create a solid base for your project. Our experienced
            team ensures that every foundation we lay is strong and dependable,
            setting the stage for a successful build, whether it’s a home,
            office, or commercial space.
          </p>
        </motion.div>
        <motion.div className={styles.paragraph} {...motionContent}>
          <h3>Distinctive Design</h3>
          <p>
            Effective design is crucial to any construction project. GS Builder
            specializes in creating unique and high-quality designs that stand
            out. Our design process combines creativity with functionality,
            resulting in spaces that are both visually stunning and practical.
            We take pride in delivering architectural solutions that enhance the
            aesthetic appeal and functionality of every project.
          </p>
        </motion.div>
        <motion.div className={styles.paragraph} {...motionContent}>
          <h3>Quality Construction</h3>
          <p>
            After the design phase, our focus shifts to bringing your vision to
            reality. GS Builder’s construction team uses the latest techniques
            and top-tier materials to ensure every detail is meticulously
            executed. We handle all aspects of construction with precision,
            providing you with a finished product that meets the highest
            standards of quality and craftsmanship.
          </p>
        </motion.div>
        <motion.div className={styles.paragraph} {...motionContent}>
          <h3>Custom Design Solutions</h3>
          <p>
            At GS Builder, we understand that design should reflect your
            personal style and needs. Our team works closely with you to create
            tailored design solutions that enhance your living or working
            environment. We focus on delivering designs that are not only
            aesthetically pleasing but also perfectly aligned with your
            functional requirements, ensuring a space that truly feels like your
            own.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;
