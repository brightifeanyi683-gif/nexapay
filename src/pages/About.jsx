import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  HeartHandshake,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Users,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Clarity first",
    description:
      "We aim to explain services, steps, and important terms in plain language.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Responsibility matters",
    description:
      "We believe trust is earned through honest communication, careful processes, and appropriate safeguards.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "People come first",
    description:
      "We design around real user needs, including accessibility, ease of use, and responsive support.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="about-page">
      {/* About hero */}
      <section className="about-hero">
        <div className="about-hero-image" />
        <div className="about-hero-glow" />

        <div className="container about-hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14 } },
            }}>
            <motion.span className="about-eyebrow" variants={fadeUp}>
              <span className="eyebrow-dot" />
              GET TO KNOW NEXAPAY
            </motion.span>

            <motion.h1 variants={fadeUp}>About NexaPay</motion.h1>

            <motion.p variants={fadeUp}>
              We believe digital finance should be easier to navigate, easier to
              understand, and designed around the needs of real people. Our goal
              is to make everyday financial tasks feel more organised through a
              straightforward digital experience.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link to="/solutions" className="button-primary">
                View Solutions <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-hero-art"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="about-art-circle circle-large" />
            <div className="about-art-circle circle-small" />

            <motion.div
              className="about-art-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}>
              <span className="about-art-icon">
                <Compass size={26} />
              </span>
              <span className="about-art-label">OUR DIRECTION</span>
              <h3>Finance with greater clarity.</h3>
              <p>Useful tools. Understandable information. Helpful support.</p>
              <div className="about-art-divider" />
              <div className="about-art-footer">
                <CheckCircle2 size={17} />
                Designed around people
              </div>
            </motion.div>

            <motion.div
              className="about-floating-note"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}>
              <HeartHandshake size={19} />
              <span>People come first</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our story */}
      <section className="about-story section-padding">
        <div className="container about-story-grid">
          <motion.div
            className="about-story-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="story-image" />
            <div className="story-image-overlay" />

            <div className="story-quote">
              <span className="quote-mark">“</span>
              <p>
                Bring useful tools, understandable information, and helpful
                support together in one place.
              </p>
              <span className="quote-caption">THE IDEA BEHIND NEXAPAY</span>
            </div>

            <div className="story-decoration story-decoration-one" />
            <div className="story-decoration story-decoration-two" />
          </motion.div>

          <motion.div
            className="about-story-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } },
            }}>
            <motion.span className="section-eyebrow" variants={fadeUp}>
              OUR STORY
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Making the digital finance journey clearer.
            </motion.h2>

            <motion.p variants={fadeUp}>
              Financial services can feel complicated when information is
              scattered, processes are unclear, or people are left guessing what
              to do next.
            </motion.p>

            <motion.p variants={fadeUp}>
              NexaPay was imagined around a simple idea: bring useful tools,
              understandable information, and helpful support together in one
              place. We focus on making the digital journey clear from exploring
              a service to understanding the next step.
            </motion.p>

            <motion.div className="story-highlight" variants={fadeUp}>
              <span className="story-highlight-icon">
                <Users size={21} />
              </span>
              <div>
                <h3>Designed around real people</h3>
                <p>
                  We want everyday financial tasks to feel more organised,
                  understandable, and easier to navigate.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="mission-section section-padding">
        <div className="container">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}>
            <span className="section-eyebrow">WHAT GUIDES US</span>
            <h2>Our mission and vision.</h2>
            <p>
              A clear purpose and a thoughtful direction shape how we approach
              the digital financial experience.
            </p>
          </motion.div>

          <div className="mission-grid">
            <motion.article
              className="mission-card mission-card-dark"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}>
              <div className="mission-card-top">
                <span className="mission-icon">
                  <Compass size={24} />
                </span>
                <span className="mission-number">01 / PURPOSE</span>
              </div>

              <h3>Our mission</h3>
              <p>
                Our mission is to build accessible, user-friendly digital
                financial experiences that help people stay informed and manage
                their financial tasks with greater confidence. We work toward
                this by prioritising clear communication, practical design, and
                responsible handling of customer information.
              </p>

              <div className="mission-card-bottom">
                <span>Clarity</span>
                <span>Practical design</span>
                <span>Responsibility</span>
              </div>
            </motion.article>

            <motion.article
              className="mission-card mission-card-light"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -5 }}>
              <div className="mission-card-top">
                <span className="mission-icon">
                  <Eye size={24} />
                </span>
                <span className="mission-number">02 / FUTURE</span>
              </div>

              <h3>Our vision</h3>
              <p>
                We want a future where digital finance feels less intimidating
                and more useful—where people can understand the services
                available to them, make choices with better information, and
                find support when they need it.
              </p>

              <div className="vision-decoration">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="principles-section section-padding">
        <div className="container">
          <div className="principles-heading">
            <div>
              <span className="section-eyebrow">OUR PRINCIPLES</span>
              <h2>The values behind every experience.</h2>
            </div>

            <p>
              The way we communicate, design, and support our users matters.
              These principles guide the experience we aim to create.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  className="principle-card"
                  key={principle.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}>
                  <div className="principle-card-top">
                    <span className="principle-icon">
                      <Icon size={23} />
                    </span>
                    <span className="principle-number">{principle.number}</span>
                  </div>

                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>

                  <div className="principle-line" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="transparency-section">
        <div className="container transparency-inner">
          <div className="transparency-icon">
            <ShieldCheck size={29} />
          </div>

          <div className="transparency-copy">
            <span className="section-eyebrow">OPENNESS & ACCOUNTABILITY</span>
            <h2>Transparency matters.</h2>
            <p>
              We believe customers should be able to find clear information
              about how a service works, what it costs, what information is
              required, and how to get help. Before publishing this website, add
              your actual company details, applicable licences or registrations,
              service terms, fees, privacy practices, and support channels.
            </p>
          </div>

          <div className="transparency-mark">
            <ShieldCheck size={56} strokeWidth={1.2} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container about-cta">
          <motion.div
            className="about-cta-content"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <span className="section-eyebrow">EXPLORE NEXAPAY</span>
            <h2>Explore what you can do with NexaPay.</h2>
            <p>
              See our available tools and services and find the right place to
              begin.
            </p>

            <Link to="/solutions" className="button-primary">
              View Solutions <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="about-cta-decoration">
            <div className="cta-ring cta-ring-one" />
            <div className="cta-ring cta-ring-two" />
            <div className="cta-ring cta-ring-three" />
            <ArrowUpRight size={50} />
          </div>
        </div>
      </section>
    </div>
  );
}
