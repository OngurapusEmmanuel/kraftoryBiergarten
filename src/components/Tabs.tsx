import { useState } from 'react';

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  children?: React.ReactNode | ((activeTab: string) => React.ReactNode);
  onTabChange?: (tabId: string) => void;
  defaultTab?: string;
}

export default function Tabs({ tabs, children, onTabChange, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {typeof children === 'function' ? children(activeTab) : children}
      </div>
    </div>
  );
}
