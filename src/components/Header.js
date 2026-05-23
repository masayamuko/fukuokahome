import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const navigation = [
    { name: 'TOP', path: '/' },
    {
      name: '私たちの事業',
      path: '/homes',
      children: [
        { name: '事業一覧（私たちの事業）', path: '/homes' },
        { name: 'かんらん舎', path: '/homes/kanransya' },
        { name: '結ホーム', path: '/homes/yui' },
        { name: 'TIES', path: '/homes/ties' },
        { name: 'LEAP', path: '/homes/leap' },
        { name: 'スイッチ', path: '/homes/switch' },
        { name: 'そだちの樹', path: '/sodachinoki' },
      ],
    },
    { name: '求人情報', path: '/jobs' },
    { name: 'お知らせ', path: '/news' },
    { name: 'お問合せ', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const isChildActive = (item) =>
    item.children && item.children.some((c) => isActive(c.path));

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>特定非営利活動法人<br />青少年の自立を支える福岡の会</h1>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navigation.map((item) => {
                const hasChildren = Array.isArray(item.children) && item.children.length > 0;
                const active = isActive(item.path) || isChildActive(item);
                if (!hasChildren) {
                  return (
                    <li key={item.path} className="nav-item">
                      <Link
                        to={item.path}
                        className={`nav-link ${active ? 'active' : ''}`}
                        onClick={handleNavClick}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                }
                const isSubOpen = openSubmenu === item.path;
                return (
                  <li
                    key={item.path}
                    className={`nav-item nav-item--has-submenu ${isSubOpen ? 'is-open' : ''}`}
                    onMouseLeave={() => {
                      if (!window.matchMedia('(max-width: 768px)').matches) {
                        setOpenSubmenu(null);
                      }
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`nav-link nav-link--parent ${active ? 'active' : ''}`}
                      onClick={(e) => {
                        if (window.matchMedia('(max-width: 768px)').matches) {
                          e.preventDefault();
                          setOpenSubmenu(isSubOpen ? null : item.path);
                        } else {
                          handleNavClick();
                        }
                      }}
                      onFocus={() => {
                        if (!window.matchMedia('(max-width: 768px)').matches) {
                          setOpenSubmenu(item.path);
                        }
                      }}
                      onMouseEnter={() => {
                        if (!window.matchMedia('(max-width: 768px)').matches) {
                          setOpenSubmenu(item.path);
                        }
                      }}
                      onBlur={(e) => {
                        if (!window.matchMedia('(max-width: 768px)').matches &&
                            !e.currentTarget.parentElement.contains(e.relatedTarget)) {
                          setOpenSubmenu(null);
                        }
                      }}
                      aria-haspopup="true"
                      aria-expanded={isSubOpen}
                    >
                      {item.name}
                      <span className="nav-link-caret" aria-hidden="true">▾</span>
                    </Link>
                    <ul className="nav-submenu">
                      {item.children.map((child) => (
                        <li key={child.path} className="nav-submenu-item">
                          <Link
                            to={child.path}
                            className={`nav-submenu-link ${isActive(child.path) ? 'active' : ''}`}
                            onClick={handleNavClick}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
