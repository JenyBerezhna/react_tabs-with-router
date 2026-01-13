import { Link } from 'react-router-dom';
import { tabs } from '../types/tabs';

export const Tabs = ({ selectedTabId }: { selectedTabId?: string }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={tab.id === selectedTabId ? 'is-active' : ''}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
