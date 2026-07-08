export function PageTabs({ activeTab, onTabChange, tabs }) {
  return (
    <nav className="tab-nav" aria-label="Page tabs">
      {tabs.map((tab) => (
        <button
          aria-current={activeTab === tab.id ? 'page' : undefined}
          className={activeTab === tab.id ? 'active' : ''}
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
