const navigationItems = [
  { label: 'Dashboard', icon: 'grid' },
  { label: 'Documents', icon: 'documents' },
  { label: 'Ask ChAI', icon: 'spark' },
]

function NavIcon({ name }) {
  const paths = {
    grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></>,
    documents: <><path d="M7 3.75h7l4 4v12.5H7z" /><path d="M14 3.75v4h4M10 12h5M10 15.5h5" /><path d="M5 7.75v13.5h10" /></>,
    spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.1.9-1.5 2.6-1.4-.5a7.8 7.8 0 0 1-1.7 1l-.3 1.5h-3l-.3-1.5a7.8 7.8 0 0 1-1.7-1l-1.4.5-1.5-2.6 1.1-.9a7.1 7.1 0 0 1 0-2l-1.1-.9 1.5-2.6 1.4.5a7.8 7.8 0 0 1 1.7-1l.3-1.5h3l.3 1.5a7.8 7.8 0 0 1 1.7 1l1.4-.5 1.5 2.6-1.1.9a7.1 7.1 0 0 1-.1 2Z" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon">
      {paths[name]}
    </svg>
  )
}

function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <a className="brand" href="#dashboard" onClick={() => onNavigate('Dashboard')}>
        <span className="brand-mark" aria-hidden="true">c</span>
        <span>ChAI</span>
      </a>

      <div className="sidebar-label">WORKSPACE</div>
      <nav className="primary-nav" aria-label="Main navigation">
        {navigationItems.map(({ label, icon }) => (
          <button
            className={`nav-item${activePage === label ? ' is-active' : ''}`}
            key={label}
            type="button"
            aria-current={activePage === label ? 'page' : undefined}
            onClick={() => onNavigate(label)}
          >
            <NavIcon name={icon} />
            <span>{label}</span>
            {label === 'Documents' && <span className="nav-count">12</span>}
          </button>
        ))}
        <button
          className={`nav-item mobile-settings${activePage === 'Settings' ? ' is-active' : ''}`}
          type="button"
          aria-current={activePage === 'Settings' ? 'page' : undefined}
          onClick={() => onNavigate('Settings')}
        >
          <NavIcon name="settings" />
          <span>Settings</span>
        </button>
      </nav>

      <div className="sidebar-bottom">
        <button
          className={`nav-item${activePage === 'Settings' ? ' is-active' : ''}`}
          type="button"
          aria-current={activePage === 'Settings' ? 'page' : undefined}
          onClick={() => onNavigate('Settings')}
        >
          <NavIcon name="settings" />
          <span>Settings</span>
        </button>
        <div className="sidebar-profile">
          <div className="profile-avatar" aria-hidden="true">S</div>
          <div className="profile-copy">
            <span className="profile-name">Sam Taylor</span>
            <span className="profile-plan">Personal workspace</span>
          </div>
          <span className="profile-menu" aria-hidden="true">···</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar