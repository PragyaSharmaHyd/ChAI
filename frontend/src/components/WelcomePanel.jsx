function WelcomePanel() {
  return (
    <header className="welcome-panel">
      <div className="welcome-copy">
        <div className="eyebrow"><span className="status-dot" /> YOUR AI WORKSPACE</div>
        <h1>Good morning, Sam<span className="wave">.</span></h1>
        <p>Your knowledge, ready when you are.</p>
      </div>
      <div className="welcome-date">
        <span className="date-label">MONDAY</span>
        <span className="date-value">September 28</span>
      </div>
    </header>
  )
}

export default WelcomePanel