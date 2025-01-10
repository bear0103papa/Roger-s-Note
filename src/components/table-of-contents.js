import React, { useState, useEffect } from "react"

const TableOfContents = ({ headings }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!headings || headings.length === 0) return null;

  const toggleCollapse = () => {
    if (isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <nav className={`toc-container ${isMobile ? (isCollapsed ? 'collapsed' : 'expanded') : ''}`}>
      <div className="toc-title" onClick={toggleCollapse}>
        目錄
      </div>
      <ul className="toc-list">
        {headings.map(heading => (
          <li 
            key={heading.id}
            className={`toc-item depth-${heading.depth}`}
          >
            <a 
              href={`#${heading.id}`}
              onClick={() => isMobile && setIsCollapsed(true)}
            >
              {heading.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;