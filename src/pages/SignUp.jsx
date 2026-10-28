
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
  UserRound,
  Mail,
  LockKeyhole,
  CheckCircle2,
} from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.password.length < 8) {
      setMessage("Your password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Your passwords do not match.");
      return;
    }

    if (!form.agree) {
      setMessage("Please agree to the terms before continuing.");
      return;
    }

    setMessage(
      "Your form is valid. Account creation is not connected yet; authentication will be added in the next step."
    );
  }

  return (
    <section className="auth-page signup-page">
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
            <UserRound size={25} />
          </div>

          <span className="auth-eyebrow">
            YOUR FINANCIAL JOURNEY STARTS HERE
          </span>

          <h1>Create your account</h1>

          <p className="auth-subtitle">
            Join NexaPay and explore a clearer way to manage your everyday
            financial tasks.
          </p>

          <div className="auth-security-note">
            <ShieldCheck size={19} />
            <span>Your account information deserves careful protection.</span>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="fullName">Full name</label>

              <div className="auth-input-wrap">
                <UserRound size={18} />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="email">Email address</label>

              <div className="auth-input-wrap">
                <Mail size={18} />
                <input
                  id="email"
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
              <label htmlFor="password">Password</label>

              <div className="auth-input-wrap">
                <LockKeyhole size={18} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  minLength={8}
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
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="confirmPassword">Confirm password</label>

              <div className="auth-input-wrap">
                <LockKeyhole size={18} />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your password again"
                  autoComplete="new-password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <button
                  className="auth-password-toggle"
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((previous) => !previous)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <label className="auth-checkbox">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                required
              />

              <span>
                I agree to the{" "}
                <Link to="/terms">Terms of Service</Link> and{" "}
                <Link to="/privacy">Privacy Notice</Link>.
              </span>
            </label>

            {message && (
              <div
                className="auth-message"
                role="status"
                aria-live="polite"
              >
                {message}
              </div>
            )}

            <button className="auth-submit-button" type="submit">
              Create Your Account <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-divider">
            <span>ALREADY HAVE AN ACCOUNT?</span>
          </div>

          <p className="auth-switch">
            Welcome back! <Link to="/signin">Sign in instead</Link>
          </p>

          <div className="auth-bottom-note">
            <CheckCircle2 size={16} />
            <span>Clear information. A more thoughtful experience.</span>
          </div>
        </motion.div>

        <p className="auth-page-footer">
          © {new Date().getFullYear()} NexaPay. All rights reserved.
        </p>
      </div>
    </section>
  );
}
