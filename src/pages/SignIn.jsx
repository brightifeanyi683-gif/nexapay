
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.email.trim() || !form.password) {
      setMessage("Please enter your email address and password.");
      return;
    }

    setMessage(
      "Form validated successfully! Sign-in will be available once authentication is connected."
    );
  }

  return (
    <section className="auth-page signin-page">
      <div className="auth-background-glow auth-glow-one" />
      <div className="auth-background-glow auth-glow-two" />

      <div className="auth-container">
        <motion.div
          className="auth-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="auth-brand-icon">
            <LockKeyhole size={25} />
          </div>

          <span className="auth-eyebrow">
            WELCOME BACK TO NEXAPAY
          </span>

          <h1>Sign in to your account</h1>

          <p className="auth-subtitle">
            Access your account and continue managing your everyday
            financial tasks.
          </p>

          <div className="auth-security-note">
            <ShieldCheck size={19} />
            <span>
              Never share your password or one-time passcode with anyone.
            </span>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="signin-email">Email address</label>

              <div className="auth-input-wrap">
                <Mail size={18} />

                <input
                  id="signin-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="signin-password">Password</label>

              <div className="auth-input-wrap">
                <LockKeyhole size={18} />

                <input
                  id="signin-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <button
                  className="auth-password-toggle"
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {message && (
              <div className="auth-message" role="status" aria-live="polite">
                {message}
              </div>
            )}

            <button className="auth-submit-button" type="submit">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-divider">
            <span>NEW TO NEXAPAY?</span>
          </div>

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/signup">Create Your Account</Link>
          </p>

          <div className="auth-bottom-note">
            <ShieldCheck size={16} />
            <span>Your security matters. Keep your sign-in details private.</span>
          </div>
        </motion.div>

        <p className="auth-page-footer">
          © {new Date().getFullYear()} NexaPay. All rights reserved.
        </p>
      </div>
    </section>
  );
}
