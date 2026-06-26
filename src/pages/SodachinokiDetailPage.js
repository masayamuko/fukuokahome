import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import {
  SECTION_ORDER,
  sectionMeta,
  sectionData,
} from '../data/sodachinokiSections';

// IntersectionObserverでフェードインを発火させるhook
function useFadeInObserver(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.sodachinoki-fade-in');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

function renderBlock(block, idx) {
  switch (block.type) {
    case 'heading': {
      const Tag = `h${block.level}`;
      const variantClass = block.variant
        ? ` sodachinoki-h${block.level}--${block.variant}`
        : '';
      return (
        <Tag key={idx} className={`sodachinoki-h${block.level}${variantClass}`}>
          {block.text}
        </Tag>
      );
    }
    case 'paragraph':
      return <p key={idx}>{block.text}</p>;
    case 'keyphrase':
      return (
        <div key={idx} className="sodachinoki-keyphrase">
          {block.text}
        </div>
      );
    case 'list':
      return block.ordered ? (
        <ol key={idx} className={block.checklist ? 'sodachinoki-checklist' : ''}>
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      ) : (
        <ul key={idx} className={block.checklist ? 'sodachinoki-checklist' : ''}>
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case 'numberedList':
      return (
        <ol key={idx} className="sodachinoki-numbered-list">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <table key={idx} className="sodachinoki-table">
          <tbody>
            {block.rows.map(([k, v], i) => (
              <tr key={i}>
                <th>{k}</th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case 'staff':
      return (
        <div key={idx} className="sodachinoki-staff">
          <h4>{block.role}</h4>
          <ul>
            {block.members.map((m, i) => (
              <li key={i}>
                {m.name}
                {m.title && `（${m.title}）`}
              </li>
            ))}
          </ul>
        </div>
      );
    case 'todo':
      return (
        <div key={idx} className="sodachinoki-todo">
          📝 {block.text}
        </div>
      );
    case 'callout':
      return (
        <div
          key={idx}
          className={`sodachinoki-callout sodachinoki-callout--${block.variant || 'info'}`}
        >
          {block.text}
        </div>
      );
    case 'link':
      return (
        <p key={idx}>
          <a
            href={block.href}
            target={block.external ? '_blank' : undefined}
            rel={block.external ? 'noopener noreferrer' : undefined}
          >
            {block.text}
          </a>
        </p>
      );
    case 'contactInfo':
      return (
        <div key={idx} className="sodachinoki-contact-info">
          {block.phone && (
            <p className="sodachinoki-contact-line">
              <svg className="sodachinoki-contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3 2a2 2 0 0 0-2 2v2c0 8 6 14 14 14h2a2 2 0 0 0 2-2v-3a1 1 0 0 0-.7-1l-4-1a1 1 0 0 0-1 .3l-1.5 1.5a13 13 0 0 1-6.6-6.6L6.7 6.7a1 1 0 0 0 .3-1l-1-4A1 1 0 0 0 5 1H3z" />
              </svg>
              <strong>{block.phone}</strong>
            </p>
          )}
          {block.hours && (
            <p className="sodachinoki-contact-line">
              <svg className="sodachinoki-contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="10" cy="10" r="8" />
                <path d="M10 5v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {block.hours}
            </p>
          )}
          {block.yorunoDay && (
            <p className="sodachinoki-contact-line">
              <svg className="sodachinoki-contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3 2a2 2 0 0 0-2 2v2c0 8 6 14 14 14h2a2 2 0 0 0 2-2v-3a1 1 0 0 0-.7-1l-4-1a1 1 0 0 0-1 .3l-1.5 1.5a13 13 0 0 1-6.6-6.6L6.7 6.7a1 1 0 0 0 .3-1l-1-4A1 1 0 0 0 5 1H3z" />
              </svg>
              {block.yorunoDay}
            </p>
          )}
          {block.instagram && (
            <p className="sodachinoki-contact-line">
              <svg className="sodachinoki-contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="2.5" y="2.5" width="15" height="15" rx="4" />
                <circle cx="10" cy="10" r="3.5" />
                <circle cx="14.5" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
              Instagram: {block.instagram}
            </p>
          )}
          {block.fax && (
            <p className="sodachinoki-contact-line">
              <svg className="sodachinoki-contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="2" y="7" width="16" height="9" rx="1" />
                <path d="M5 7V3h10v4" />
                <path d="M5 13h10" strokeLinecap="round" />
              </svg>
              FAX: {block.fax}
            </p>
          )}
          {block.address && (
            <p className="sodachinoki-contact-line">
              <svg className="sodachinoki-contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M10 18s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
                <circle cx="10" cy="7" r="2" fill="currentColor" stroke="none" />
              </svg>
              {block.address}
            </p>
          )}
        </div>
      );
    case 'image':
      return (
        <figure key={idx} className="sodachinoki-figure">
          <img src={block.src} alt={block.alt} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case 'box':
      return (
        <div
          key={idx}
          className={`sodachinoki-box sodachinoki-box--${block.variant || 'cream'}`}
        >
          {block.title && (
            <div className="sodachinoki-box-title">{block.title}</div>
          )}
          {block.items && (
            <ul>
              {block.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          )}
          {block.content &&
            block.content.map((c, i) => renderBlock(c, `${idx}-${i}`))}
        </div>
      );
    case 'twoColumn':
      return (
        <div key={idx} className="sodachinoki-two-col">
          <div className="sodachinoki-two-col-left">
            {block.left && block.left.map((b, i) => renderBlock(b, `${idx}-L-${i}`))}
          </div>
          <div className="sodachinoki-two-col-right">
            {block.right && block.right.map((b, i) => renderBlock(b, `${idx}-R-${i}`))}
          </div>
        </div>
      );
    case 'cta':
      return (
        <div key={idx} className="sodachinoki-cta">
          {block.href ? (
            <a
              href={block.href}
              className="sodachinoki-cta-button"
              target={block.external ? '_blank' : undefined}
              rel={block.external ? 'noopener noreferrer' : undefined}
            >
              {block.text}
            </a>
          ) : (
            <div className="sodachinoki-cta-button">{block.text}</div>
          )}
        </div>
      );
    case 'conceptBadge':
      return (
        <span key={idx} className="sodachinoki-concept-badge">
          {block.text}
        </span>
      );
    default:
      return null;
  }
}

// 対象別ナビ用のSVGアイコン（白色で表示）
const DETAIL_ICON_SHISETSU = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 28V14L16 6L28 14V28" />
    <path d="M12 28V20H20V28" />
    <path d="M4 28H28" strokeLinecap="round" />
  </svg>
);

const DETAIL_ICON_WAKAMONO = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M6 8h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H12l-6 4V10a2 2 0 0 1 2-2z" />
    <circle cx="12" cy="15" r="1" fill="currentColor" />
    <circle cx="17" cy="15" r="1" fill="currentColor" />
    <circle cx="22" cy="15" r="1" fill="currentColor" />
  </svg>
);

const DETAIL_ICON_CITIZEN = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="4" />
    <circle cx="22" cy="13" r="3" />
    <path d="M3 26c0-4 4-7 8-7s8 3 8 7" />
    <path d="M19 26c0-3 3-5 6-5s4 2 4 5" />
  </svg>
);

const NAV_ICONS = {
  'for-shisetsu': DETAIL_ICON_SHISETSU,
  'for-wakamono': DETAIL_ICON_WAKAMONO,
  'for-citizen': DETAIL_ICON_CITIZEN,
};

const InlineNavOthers = ({ currentId, heading }) => {
  const others = SECTION_ORDER.filter((id) => id !== currentId);
  return (
    <section className={`sodachinoki-inline-nav sodachinoki-inline-nav--others sodachinoki-inline-nav--cols-${others.length}`}>
      {heading && <div className="sodachinoki-inline-nav-heading">{heading}</div>}
      <div className="sodachinoki-inline-nav-grid">
        {others.map((id) => {
          const m = sectionMeta[id];
          return (
            <Link
              key={id}
              to={`/sodachinoki/${id}`}
              className="sodachinoki-inline-nav-card"
            >
              <div
                className="sodachinoki-inline-nav-card-icon"
                style={{ backgroundColor: m.bgColor }}
              >
                {NAV_ICONS[id] || (
                  <span aria-hidden="true">→</span>
                )}
              </div>
              <div className="sodachinoki-inline-nav-card-title">{m.title}</div>
              <div className="sodachinoki-inline-nav-card-subtitle">{m.subtitle}</div>
              <div className="sodachinoki-inline-nav-card-arrow">詳しく見る →</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const SodachinokiDetailPage = () => {
  const { sectionId } = useParams();
  const data = sectionData[sectionId];
  const meta = sectionMeta[sectionId];

  useEffect(() => {
    if (data) {
      document.title = `${data.title} | そだちの樹`;
    }
  }, [data]);

  useFadeInObserver([sectionId]);

  if (!data || !meta) {
    return <Navigate to="/sodachinoki" replace />;
  }

  return (
    <div className="sodachinoki-page">
      <div className="sodachinoki-wrap sodachinoki-wrap--flush">
        <Link to="/sodachinoki" className="sodachinoki-nav-back">
          ← そだちの樹TOPへ
        </Link>

        <header
          className="sodachinoki-detail-header"
          style={{ '--detail-color': meta.bgColor }}
        >
          <svg className="sodachinoki-header-leaf" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6 6 4 12 6 18c2 4 6 4 6 4s4 0 6-4c2-6 0-12-6-16z" opacity="0.3" />
            <path d="M12 6v14" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
          <div className="sodachinoki-detail-header-eyebrow">対象別ご案内</div>
          <h1 className="sodachinoki-detail-header-title">{data.title}</h1>
          {data.lead && (
            <p className="sodachinoki-detail-header-lead">{data.lead}</p>
          )}
          {data.image && (
            <figure className={`sodachinoki-detail-header-figure sodachinoki-detail-header-figure--${sectionId}`}>
              <img src={data.image} alt={data.alt || data.title} />
            </figure>
          )}
        </header>

        <div className="sodachinoki-detail-body sodachinoki-fade-in">
          {Array.isArray(data.blocks) &&
            data.blocks.map((b, i) => renderBlock(b, i))}
        </div>

        <InlineNavOthers currentId={sectionId} />
      </div>
    </div>
  );
};

export default SodachinokiDetailPage;
