
import { motion } from "framer-motion";
import {
  Wallet,
  ArrowLeftRight,
  ClipboardList,
  Headset,
  ArrowRight,
  CheckCircle2,
  Search,
  FileCheck,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Wallet,
    number: "01",
    title: "Account overview",
    description:
      "Bring key account information into a single view. Review relevant details, check recent activity, and find the tools associated with your account without navigating through unnecessary steps.",
    linkText: "Explore account tools",
  },
  {
    icon: ArrowLeftRight,
    number: "02",
    title: "Payments and transfers",
    description:
      "Where supported, follow a clear process for initiating a payment or transfer and reviewing its status. Before confirming a transaction, customers should be able to review important details and applicable fees.",
    linkText: "Learn about payments",
    optional: true,
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Activity and records",
    description:
      "Keep track of relevant account activity with information presented in a clear, readable format. Review dates, descriptions, and statuses, and contact support if something does not look right.",
    linkText: "View activity features",
  },
  {
    icon: Headset,
    number: "04",
    title: "Customer support",
    description:
      "Find guidance for common questions and a clear route to the support team. Understand the steps involved, identify the information you may need, and know where to go for further assistance.",
    linkText: "Get support",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "Read what a service does, who it is for, and what information is required.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Review",
    description:
      "Check the relevant details, terms, and fees before proceeding.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Follow up",
    description:
      "Use your account activity or support channel to check what happens next.",
  },
];

export default function Solutions() {
  return (
    <main className="solutions-page">
      <section className="solutions-hero">
        <div className="container solutions-hero-grid">
          <motion.div
            className="solutions-hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">
              <span className="eyebrow-dot" />
              NEXAPAY SOLUTIONS
            </span>

            <h1>
              Solutions designed around{" "}
              <span className="gradient-text">everyday financial needs.</span>
            </h1>

            <p>
              Explore digital tools designed to help you organise account
              information, review activity, and understand the services
              available to you. The right features depend on your account type
              and the services NexaPay makes available.
            </p>

            <div className="solutions-hero-actions">
              <Link to="/contact" className="button-primary">
                Contact Our Team <ArrowRight size={18} />
              </Link>
              <a href="#solutions-list" className="solutions-secondary-link">
                Explore solutions
              </a>
            </div>

            <div className="solutions-hero-note">
              <CheckCircle2 size={18} />
              <span>Clear information. Understandable next steps.</span>
            </div>
          </motion.div>

          <motion.div
            className="solutions-hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="solutions-visual-glow" />

            <div className="solutions-dashboard">
              <div className="solutions-dashboard-top">
                <div className="solutions-brand-mark">
                  <Wallet size={21} />
                </div>
                <div>
                  <strong>NexaPay</strong>
                  <span>Financial overview</span>
                </div>
                <span className="solutions-status">Overview</span>
              </div>

              <div className="solutions-dashboard-intro">
                <span>Your financial tools</span>
                <h2>Everything in a clearer view.</h2>
                <p>Explore information and available account features.</p>
              </div>

              <div className="solutions-mini-grid">
                <div className="solutions-mini-card">
                  <span className="solutions-mini-icon">
                    <Wallet size={19} />
                  </span>
                  <strong>Account</strong>
                  <span>Key information</span>
                </div>
                <div className="solutions-mini-card">
                  <span className="solutions-mini-icon cyan">
                    <ArrowLeftRight size={19} />
                  </span>
                  <strong>Activity</strong>
                  <span>Recent records</span>
                </div>
              </div>

              <div className="solutions-dashboard-footer">
                <span className="solutions-footer-dot" />
                Designed for clarity and ease of use
              </div>
            </div>

            <div className="solutions-floating-note">
              <span className="solutions-floating-icon">
                <CheckCircle2 size={20} />
              </span>
              <span>
                <strong>Know the next step</strong>
                <small>Clear, helpful information</small>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" id="solutions-list">
        <div className="container">
          <motion.div
            className="solutions-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-eyebrow">EXPLORE OUR SOLUTIONS</span>
            <h2>
              Useful tools, <span className="gradient-text">clearly explained.</span>
            </h2>
            <p>
              Explore the areas below to understand the information and support
              that may be available through NexaPay.
            </p>
          </motion.div>

          <div className="solutions-cards-grid">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  className="solution-card"
                  key={solution.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <div className="solution-card-top">
                    <span className="solution-card-icon">
                      <Icon size={25} />
                    </span>
                    <span className="solution-card-number">
                      {solution.number}
                    </span>
                  </div>

                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>

                  <Link
                    to="/contact"
                    className="solution-card-link"
                    aria-label={`${solution.linkText}: contact NexaPay`}
                  >
                    {solution.linkText}
                    <ArrowRight size={17} />
                  </Link>

                  {solution.optional && (
                    <span className="solution-availability-note">
                      Only include this service if it is actually offered.
                    </span>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding solutions-process-section">
        <div className="container">
          <div className="solutions-process-layout">
            <motion.div
              className="solutions-process-copy"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-eyebrow">HOW TO PROCEED</span>
              <h2>
                A clearer process from start to <span className="gradient-text">follow-up.</span>
              </h2>
              <p>
                Before using a financial service, take time to understand what
                it offers, review the important details, and know how to check
                what happens next.
              </p>
              <Link to="/contact" className="solutions-process-link">
                Need help? Contact us <ArrowRight size={17} />
              </Link>
            </motion.div>

            <div className="solutions-process-steps">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    className="solutions-process-step"
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="solutions-step-icon">
                      <Icon size={22} />
                    </div>
                    <div className="solutions-step-content">
                      <span>STEP {step.number}</span>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="solutions-step-connector" />
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.div
            className="solutions-transparency"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="solutions-transparency-icon">
              <CheckCircle2 size={28} />
            </div>
            <div className="solutions-transparency-copy">
              <span className="section-eyebrow">DESIGNED WITH CARE</span>
              <h2>A financial tool should not leave you guessing.</h2>
              <p>
                We aim to make important information easy to find, keep key
                actions clearly labelled, and explain next steps consistently.
                Actual features, processing times, eligibility, and fees should
                be stated accurately for each service.
              </p>
            </div>
            <div className="solutions-transparency-bottom">
              <span>Clarity</span>
              <span>Transparency</span>
              <span>Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding solutions-cta-section">
        <div className="container">
          <motion.div
            className="solutions-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="solutions-cta-icon">
              <Headset size={27} />
            </div>
            <div className="solutions-cta-copy">
              <span className="section-eyebrow">WE'RE HERE TO HELP</span>
              <h2>Not sure where to start?</h2>
              <p>
                Tell us what you need help with and we'll direct you to the
                most relevant information.
              </p>
            </div>
            <Link to="/contact" className="button-primary solutions-cta-button">
              Contact Our Team <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
