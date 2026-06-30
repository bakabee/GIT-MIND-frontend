import React, { useState } from "react";
import {
  Sparkles,
  Shield,
  Command,
  ArrowRight,
  Zap,
  GitBranch,
  Lock,
  BarChart3,
} from "lucide-react";
import "./LandingPage.css";

const FEATURES = [
  {
    Icon: Sparkles,
    title: "Multi-Agent Analysis",
    desc: "Six specialized AI agents run in parallel — architecture mapping, API surface, security audit, CVE scanning, and more. Complete in under 60 seconds.",
  },
  {
    Icon: Shield,
    title: "Security-First",
    desc: "Findings include exploit scenarios, severity scoring, and one-click crisis simulation. Know your risks before attackers do.",
  },
  {
    Icon: Command,
    title: "Keyboard-Driven",
    desc: "Every action accessible via keyboard shortcuts. Press ? to discover the full command set. Built for power users.",
  },
];

const STATS = [
  { value: "6", label: "AI Agents", Icon: Zap },
  { value: "<60s", label: "Full Analysis", Icon: BarChart3 },
  { value: "0", label: "Config Required", Icon: Lock },
];

export default function LandingPage({ onLoad, onAnalyzeUrl }) {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      if (inputVal.trim().includes("github.com")) {
        onAnalyzeUrl?.(inputVal.trim());
      } else {
        onLoad?.(inputVal.trim());
      }
    }
  };

  const handleGetStarted = () => {
    onLoad?.("");
  };

  return (
    <div className="lp-root">
      {/* ── Animated Background ─────────────────────────────────── */}
      <div className="lp-bg" aria-hidden="true">
        <div className="lp-gradient-orb lp-orb-1" />
        <div className="lp-gradient-orb lp-orb-2" />
        <div className="lp-gradient-orb lp-orb-3" />
      </div>

      {/* ── 3D Chrome Orb ───────────────────────────────────────── */}
      <div className="lp-chrome-orb" aria-hidden="true">
        <div className="lp-orb-surface" />
        <div className="lp-orb-highlight" />
        <div className="lp-orb-reflection" />
      </div>

      {/* ── Navigation ──────────────────────────────────────────── */}
      <nav className="lp-nav">
        <div className="lp-nav-inner">
          <div className="lp-nav-brand">
            <div className="lp-logo-mark">G</div>
            <span className="lp-logo-text">GitMind</span>
          </div>

          <div className="lp-nav-links">
            <a href="#features" className="lp-nav-link">
              Features
            </a>
            <a href="#stats" className="lp-nav-link">
              Capabilities
            </a>
            <a href="#cta" className="lp-nav-link">
              Get Started
            </a>
          </div>

          <button className="lp-btn lp-btn-nav" onClick={handleGetStarted}>
            Launch App
            <ArrowRight size={14} />
          </button>
        </div>
      </nav>

      {/* ── Hero Section ────────────────────────────────────────── */}
      <section className="lp-hero">
        <div className="lp-hero-content">
          <div className="lp-badge">
            <Zap size={12} />
            <span>AI-Powered Code Intelligence</span>
          </div>

          <h1 className="lp-headline">
            Understand any
            <br />
            <span className="lp-headline-accent">codebase</span> in seconds.
          </h1>

          <p className="lp-subhead">
            Six specialized AI agents analyze your repository in parallel —
            architecture, security, APIs, dependencies, and code quality.
            One report. Zero configuration.
          </p>

          <form className="lp-input-group" onSubmit={handleSubmit}>
            <div className="lp-input-wrapper">
              <GitBranch size={16} className="lp-input-icon" />
              <input
                className="lp-input"
                placeholder="Paste a GitHub URL or enter a username"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                aria-label="GitHub URL or username"
              />
            </div>
            <button
              type="submit"
              className="lp-btn lp-btn-primary"
              disabled={!inputVal.trim()}
            >
              <Zap size={14} />
              Analyze
            </button>
          </form>

          <div className="lp-hero-hint">
            Try{" "}
            <button
              className="lp-hint-link"
              onClick={() => onLoad?.("vercel")}
              type="button"
            >
              vercel
            </button>
            {" "}or{" "}
            <button
              className="lp-hint-link"
              onClick={() => onLoad?.("tiangolo")}
              type="button"
            >
              tiangolo
            </button>
          </div>
        </div>
      </section>

      {/* ── Features Section ────────────────────────────────────── */}
      <section className="lp-features" id="features">
        <div className="lp-section-inner">
          <div className="lp-section-header">
            <span className="lp-section-label">Capabilities</span>
            <h2 className="lp-section-title">
              Everything you need to
              <br />
              audit a codebase
            </h2>
          </div>

          <div className="lp-features-grid">
            {FEATURES.map(({ Icon, title, desc }) => (
              <div key={title} className="lp-feature-card lp-glass">
                <div className="lp-feature-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="lp-feature-title">{title}</h3>
                <p className="lp-feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Section ───────────────────────────────────────── */}
      <section className="lp-stats" id="stats">
        <div className="lp-section-inner">
          <div className="lp-stats-grid">
            {STATS.map(({ value, label, Icon }) => (
              <div key={label} className="lp-stat-item lp-glass">
                <div className="lp-stat-icon">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div className="lp-stat-value">{value}</div>
                <div className="lp-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────── */}
      <section className="lp-cta" id="cta">
        <div className="lp-section-inner">
          <div className="lp-cta-card lp-glass">
            <h2 className="lp-cta-title">
              Ready to understand your codebase?
            </h2>
            <p className="lp-cta-desc">
              Drop in a GitHub URL. Get a senior engineer's understanding in
              60 seconds.
            </p>
            <button
              className="lp-btn lp-btn-primary lp-btn-large"
              onClick={handleGetStarted}
            >
              <Zap size={16} />
              Get Started — It's Free
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-brand">
            <div className="lp-logo-mark lp-logo-mark-sm">G</div>
            <span className="lp-footer-name">GitMind</span>
          </div>
          <span className="lp-footer-copy">
            AI-powered codebase analysis. Open source.
          </span>
        </div>
      </footer>
    </div>
  );
}
