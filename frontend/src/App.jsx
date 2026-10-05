import { useState } from 'react'
import './App.css'
import DocumentsPage from './components/DocumentsPage.jsx'
import RecentDocuments from './components/RecentDocuments.jsx'
import Sidebar from './components/Sidebar.jsx'
import SummaryCard from './components/SummaryCard.jsx'
import WelcomePanel from './components/WelcomePanel.jsx'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        <div className="content-wrap">
          {activePage === 'Documents' ? (
            <DocumentsPage />
          ) : (
            <>
              <WelcomePanel />
              <section className="summary-grid" aria-label="Workspace summary">
                <SummaryCard
                  label="Documents"
                  value="12"
                  detail="Ready to explore"
                  icon="documents"
                  tone="mint"
                />
                <SummaryCard
                  label="Questions asked"
                  value="28"
                  detail="Across your workspace"
                  icon="questions"
                  tone="peach"
                />
              </section>
              <RecentDocuments />
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
