import "./login.css";
import AccentButton from "../components/AccentButton";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

export default function Login() {
  return (
    <div className="login-page">
      <section className="login-brand">
        <div className="login-brand__badge">Nimbus</div>
        <h1 className="login-brand__title">Welcome back</h1>
        <p className="login-brand__subtitle">
          Sign in to track projects, share updates, and keep your team aligned.
        </p>
        <div className="login-brand__panel">
          <div className="login-brand__stat">
            <span className="login-brand__stat-label">Active teams</span>
            <strong className="login-brand__stat-value">214</strong>
          </div>
          <div className="login-brand__stat">
            <span className="login-brand__stat-label">Weekly updates</span>
            <strong className="login-brand__stat-value">1.8k</strong>
          </div>
          <div className="login-brand__stat">
            <span className="login-brand__stat-label">Avg. response</span>
            <strong className="login-brand__stat-value">2m</strong>
          </div>
        </div>
      </section>

      <section className="login-card" aria-label="Login form">
        <div className="login-card__header">
          <span className="login-card__eyebrow">Member access</span>
          <h2 className="login-card__title">Sign in</h2>
          <p className="login-card__text">
            Use your work email to continue. Your credentials are encrypted.
          </p>
        </div>

        <form className="login-form">
          <label className="login-form__field">
            <span>Email address</span>
            <TextInput placeholder="you@company.com" />
          </label>
          <label className="login-form__field">
            <span>Password</span>
            <TextInput placeholder="Enter your password" />
          </label>

          <div className="login-form__actions">
            <AccentButton label="Sign in" />
            <Button label="Create account" size="l" style="public-bordered" />
          </div>

          <div className="login-form__footer">
            <Button label="Forgot password?" size="s" style="ghost" />
            <span className="login-form__helper">Need help? Contact support</span>
          </div>
        </form>
      </section>
    </div>
  );
}
