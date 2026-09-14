import { PageTabs } from './PageTabs'

export function PageHeader({ activeTab, onTabChange, tabs }) {
  return (
    <header className="site-header" aria-label="Site header">
      <a className="brand" href="/">
        WoongYeeYa
      </a>
      <div className="page-title">
        <p className="eyebrow">Personal Blog</p>
      </div>
      <PageTabs activeTab={activeTab} onTabChange={onTabChange} tabs={tabs} />
    </header>
  )
}
