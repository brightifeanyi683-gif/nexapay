
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Headphones,
  CheckCircle2,
  TrendingUp,
  Wallet,
  CircleDollarSign,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Activity,
    title: "Keep your activity organised",
    description:
      "See key account information and recent activity in one convenient place.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Make informed decisions",
    description:
      "Use clear information and helpful tools to understand your available options.",
    color: "cyan",
  },
  {
    icon: Headphones,
    title: "Get help when you need it",
    description:
      "Find answers and contact support without searching through confusing menus.",
    color: "purple",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Follow the registration steps and provide the information required to set up your profile.",
  },
  {
    number: "02",
    title: "Choose what you need",
    description:
      "Explore available tools and services, with key terms explained clearly.",
  },
  {
    number: "03",
    title: "Stay informed",
    description:
      "Review activity, read updates, and use your account tools to stay organised.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-background" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.13 },
              },
            }}
          >
            <motion.div className="eyebrow" variants={fadeUp}>
              <span className="eyebrow-dot" />
              Make everyday money management feel simpler
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Move your money goals{" "}
              <span className="gradient-text">forward.</span>
            </motion.h1>

            <motion.p className="hero-description" variants={fadeUp}>
              NexaPay brings useful financial tools into one simple digital
              experience. Explore your account activity, understand your
              options, and manage everyday financial tasks with a clearer view
              of what comes next.
            </motion.p>

            <motion.div className="hero-buttons" variants={fadeUp}>
              <Link to="/signin" className="button-primary">
                Get Started <ArrowRight size={18} />
              </Link>

              <Link to="/solutions" className="button-outline">
                Explore Our Solutions <ArrowUpRight size={17} />
              </Link>
            </motion.div>

            <motion.div className="hero-note" variants={fadeUp}>
              <ShieldCheck size={19} />
              <span>Clear information. Thoughtful financial tools.</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 45, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <motion.div
              className="dashboard-card"
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="dashboard-top">
                <div>
                  <span className="dashboard-label">ACCOUNT OVERVIEW</span>
                  <h3>Your financial space</h3>
                </div>
                <span className="dashboard-icon">
                  <Wallet size={20} />
                </span>
              </div>

              <div className="balance-panel">
                <span>Account summary</span>
                <div className="balance-placeholder">
                  <span className="placeholder-line" />
                  <span className="placeholder-line short" />
                </div>
                <div className="balance-bottom">
                  <span className="status-dot" />
                  Account information at a glance
                </div>
              </div>

              <div className="dashboard-stats">
                <div className="stat-box">
                  <span className="stat-icon stat-blue">
                    <Activity size={17} />
                  </span>
                  <span className="stat-title">Activity</span>
                  <strong>Overview</strong>
                  <span className="stat-caption">
                    Review recent records
                  </span>
                </div>

                <div className="stat-box">
                  <span className="stat-icon stat-cyan">
                    <Clock3 size={17} />
                  </span>
                  <span className="stat-title">Updates</span>
                  <strong>Stay informed</strong>
                  <span className="stat-caption">
                    Keep track of changes
                  </span>
                </div>
              </div>

              <div className="dashboard-footer">
                <span className="footer-check">
                  <CheckCircle2 size={17} />
                </span>
                <span>Clarity in every step</span>
                <ArrowUpRight size={17} className="footer-arrow" />
              </div>
            </motion.div>

            <motion.div
              className="floating-badge floating-badge-top"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <span className="float-icon">
                <ShieldCheck size={19} />
              </span>
              <span>
                <strong>Transparency first</strong>
                <small>Information you can understand</small>
              </span>
            </motion.div>

            <motion.div
              className="floating-badge floating-badge-bottom"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="float-icon cyan-icon">
                <CircleDollarSign size={19} />
              </span>
              <span>
                <strong>Everyday finance</strong>
                <small>Tools for your financial tasks</small>
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="container hero-bottom">
          <span>FINANCIAL CLARITY</span>
          <span className="hero-bottom-line" />
          <span>BUILT AROUND YOUR NEEDS</span>
        </div>
      </section>

      <section className="features-section section-padding">
        <div className="container">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">A CLEARER EXPERIENCE</span>
            <h2>Finance that fits your day.</h2>
            <p>
              Practical digital experiences designed to make everyday
              financial tasks easier to navigate and understand.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="feature-card"
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -7 }}
                >
                  <span className={`feature-icon ${feature.color}`}>
                    <Icon size={23} />
                  </span>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <Link
                    to="/solutions"
                    className="feature-link"
                    aria-label={`Explore solutions: ${feature.title}`}
                  >
                    Explore more <ArrowRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process-section section-padding">
        <div className="container process-layout">
          <motion.div
            className="process-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">SIMPLE BY DESIGN</span>
            <h2>A clearer journey, from start to next step.</h2>
            <p>
              Understand what is available, explore the relevant information,
              and stay informed throughout your experience with NexaPay.
            </p>
            <Link to="/about" className="text-link">
              Learn about NexaPay <ArrowRight size={17} />
            </Link>
          </motion.div>

          <div className="process-list">
            {steps.map((step, index) => (
              <motion.div
                className="process-item"
                key={step.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <span className="process-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <ArrowUpRight size={19} className="process-arrow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container trust-inner">
          <div className="trust-icon">
            <ShieldCheck size={29} />
          </div>

          <div className="trust-copy">
            <span className="section-eyebrow">CLARITY & TRANSPARENCY</span>
            <h2>Your finances deserve clarity.</h2>
            <p>
              We aim to present important information in a straightforward way,
              explain the steps involved in each service, and help you
              understand where to go for support.
            </p>
          </div>

          <Link to="/about" className="trust-link">
            Our principles <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="final-cta-section" id="get-started">
        <div className="container final-cta">
          <div className="cta-glow" />
          <div className="cta-content">
            <span className="section-eyebrow">YOUR NEXT STEP STARTS HERE</span>
            <h2>Ready for a clearer way to manage your finances?</h2>
            <p>
              Explore NexaPay and see which tools fit your needs.
            </p>
            <Link to="/signup" className="button-light">
              Create Your Account <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
