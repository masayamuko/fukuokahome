import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  SECTION_ORDER,
  sectionMeta,
  topContent,
} from '../data/sodachinokiSections';

// IntersectionObserverでフェードインを発火させるhook
function useFadeInObserver() {
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
  }, []);
}

const renderMultiline = (text) => {
  if (!text) return null;
  return text.split('\n').map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
};

// 対象別ナビ用のSVGアイコン（白色で表示）
const ICON_SHISETSU = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 28V14L16 6L28 14V28" />
    <path d="M12 28V20H20V28" />
    <path d="M4 28H28" strokeLinecap="round" />
  </svg>
);

const ICON_WAKAMONO = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M6 8h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H12l-6 4V10a2 2 0 0 1 2-2z" />
    <circle cx="12" cy="15" r="1" fill="currentColor" />
    <circle cx="17" cy="15" r="1" fill="currentColor" />
    <circle cx="22" cy="15" r="1" fill="currentColor" />
  </svg>
);

const ICON_CITIZEN = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="4" />
    <circle cx="22" cy="13" r="3" />
    <path d="M3 26c0-4 4-7 8-7s8 3 8 7" />
    <path d="M19 26c0-3 3-5 6-5s4 2 4 5" />
  </svg>
);

const NAV_ICONS = {
  'for-shisetsu': ICON_SHISETSU,
  'for-wakamono': ICON_WAKAMONO,
  'for-citizen': ICON_CITIZEN,
};

// h2 の左に置く小さな装飾アイコン
const ICON_LEAF = (
  <svg className="sodachinoki-h2-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 1C5 4 3 9 5 14c1 2 3 3 5 3s4-1 5-3c2-5 0-10-5-13z" opacity="0.85" />
    <path d="M10 5v12" stroke="#fff" strokeWidth="0.8" fill="none" />
  </svg>
);

const ICON_PEOPLE = (
  <svg className="sodachinoki-h2-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <circle cx="7" cy="7" r="2.5" />
    <circle cx="14" cy="8" r="2" />
    <path d="M2 17c0-2.5 2.5-4.5 5-4.5s5 2 5 4.5" />
    <path d="M12 17c0-2 2-3.5 3.5-3.5S18 15 18 17" />
  </svg>
);

const ICON_PHONE = (
  <svg className="sodachinoki-h2-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M3 2a2 2 0 0 0-2 2v2c0 8 6 14 14 14h2a2 2 0 0 0 2-2v-3a1 1 0 0 0-.7-1l-4-1a1 1 0 0 0-1 .3l-1.5 1.5a13 13 0 0 1-6.6-6.6L6.7 6.7a1 1 0 0 0 .3-1l-1-4A1 1 0 0 0 5 1H3z" />
  </svg>
);

// 波線セパレータ
const DividerWave = () => (
  <svg className="sodachinoki-divider-wave" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// アクションエリア用の背景画像（既存Wayback画像）
const ACTION_BG_IMAGES = [
  '/images/sodachinoki/original/action__ph01.gif',
  '/images/sodachinoki/original/action__ph02.gif',
  '/images/sodachinoki/original/action__ph03.gif',
];

// 記事内に置く大きな対象別3カードナビ
const InlineNav = ({ heading, variant }) => (
  <section
    className={`sodachinoki-inline-nav${variant ? ` sodachinoki-inline-nav--${variant}` : ''}`}
    aria-label={heading || '対象別ナビゲーション'}
  >
    {heading && (
      <div className="sodachinoki-inline-nav-heading">{heading}</div>
    )}
    <div className="sodachinoki-inline-nav-grid">
      {SECTION_ORDER.map((id) => {
        const m = sectionMeta[id];
        if (!m) return null;
        return (
          <Link
            key={id}
            to={`/sodachinoki/${id}`}
            className="sodachinoki-inline-nav-card"
            style={{ borderTopColor: m.bgColor }}
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
            {m.subtitle && (
              <div className="sodachinoki-inline-nav-card-subtitle">
                {m.subtitle}
              </div>
            )}
            <div className="sodachinoki-inline-nav-card-arrow">
              詳しく見る →
            </div>
          </Link>
        );
      })}
    </div>
  </section>
);

const SodachinokiPage = () => {
  useEffect(() => {
    document.title = 'そだちの樹アーカイブ | 青少年の自立を支える福岡の会';
  }, []);

  useFadeInObserver();

  return (
    <div className="sodachinoki-page">
      <div className="sodachinoki-wrap sodachinoki-wrap--flush">
        {/* 0. トップキーフレーズ「そだちの樹」 */}
        <DividerWave />
        <div className="sodachinoki-keyphrase">そだちの樹</div>
        <DividerWave />

        {/* 1. ヒーロー（ロゴ入り、ナビは外部に移動） */}
        {topContent.hero && (
          <section
            className="sodachinoki-hero-block sodachinoki-hero-block--with-logo"
            style={{
              backgroundImage: topContent.hero.image
                ? `url(${topContent.hero.image})`
                : undefined,
            }}
            aria-label={topContent.hero.alt || 'メインビジュアル'}
          >
            <div className="sodachinoki-hero-overlay">
              <h1 className="sodachinoki-hero-title">
                {renderMultiline(topContent.hero.mainMessage)}
              </h1>
              {topContent.hero.supportTargets && (
                <p className="sodachinoki-hero-targets">
                  {topContent.hero.supportTargets}
                </p>
              )}
            </div>
            <div className="sodachinoki-hero-logo">
              <img src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1779514626/%E6%A8%B9_ml234j.png" alt="そだちの樹 ロゴ" />
            </div>
          </section>
        )}

        {/* 1b. 対象別ナビ（ヒーロー外、オレンジ） */}
        <InlineNav variant="orange" />

        {/* 2. キーフレーズ「聞く・会う・社会につなぐ」 */}
        {topContent.keyphrase && (
          <>
            <DividerWave />
            <div className="sodachinoki-keyphrase">{topContent.keyphrase}</div>
            <DividerWave />
          </>
        )}

        {/* 5. そだちの樹について（cream variant） */}
        {topContent.about && (
          <section className="sodachinoki-section sodachinoki-section--variant-cream sodachinoki-fade-in">
            <h2 className="sodachinoki-h2">
              {ICON_LEAF}
              {topContent.about.missionTitle || topContent.about.sectionTitle}
            </h2>

            {topContent.about.mission && (
              <p className="sodachinoki-paragraph">
                {renderMultiline(topContent.about.mission)}
              </p>
            )}

            {topContent.about.npoLink && topContent.about.npoLink.href && (
              <p className="sodachinoki-npo-link">
                <a
                  href={topContent.about.npoLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {topContent.about.npoLink.text} →
                </a>
              </p>
            )}
          </section>
        )}

        {/* 6. 私たちのアクション（plain variant、緑h2） */}
        {topContent.action && (
          <section className="sodachinoki-section sodachinoki-section--variant-plain sodachinoki-fade-in">
            <h2 className="sodachinoki-h2">
              {topContent.action.sectionTitle}
            </h2>
            {topContent.action.lead && (
              <p className="sodachinoki-paragraph">
                {renderMultiline(topContent.action.lead)}
              </p>
            )}

            {Array.isArray(topContent.action.areas) && topContent.action.areas.length > 0 && (
              <div className="sodachinoki-action-grid">
                {topContent.action.areas.map((area, i) => {
                  const bgImage = ACTION_BG_IMAGES[i];
                  const cardStyle = bgImage
                    ? { backgroundImage: `url(${bgImage})` }
                    : undefined;
                  const cardClass = bgImage
                    ? 'sodachinoki-action-card sodachinoki-action-card--has-bg'
                    : 'sodachinoki-action-card';
                  return (
                    <div key={i} className={cardClass} style={cardStyle}>
                      {area.title && <h4 className="sodachinoki-action-title">{area.title}</h4>}
                      {Array.isArray(area.items) && (
                        <ul className="sodachinoki-action-items">
                          {area.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {area.todo && (
                        <div className="sodachinoki-todo">📝 {area.todo}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {topContent.action.aftercareDetail && (
              <div className="sodachinoki-aftercare-box">
                {topContent.action.aftercareDetail.title && (
                  <h3 className="sodachinoki-h3">
                    {topContent.action.aftercareDetail.title}
                  </h3>
                )}
                {topContent.action.aftercareDetail.desc && (
                  <p className="sodachinoki-paragraph">
                    {renderMultiline(topContent.action.aftercareDetail.desc)}
                  </p>
                )}
                {topContent.action.aftercareDetail.todo && (
                  <div className="sodachinoki-todo">
                    📝 {topContent.action.aftercareDetail.todo}
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* 7. 福祉コーディネーター紹介（orange variant、オレンジh2） */}
        {topContent.fukushiCC && (
          <section className="sodachinoki-section sodachinoki-section--variant-orange sodachinoki-fade-in">
            <h2 className="sodachinoki-h2 sodachinoki-h2--orange">
              {ICON_PEOPLE}
              {topContent.fukushiCC.sectionTitle}
            </h2>
            {topContent.fukushiCC.desc && (
              <p className="sodachinoki-paragraph">
                {renderMultiline(topContent.fukushiCC.desc)}
              </p>
            )}
            {topContent.fukushiCC.todo && (
              <div className="sodachinoki-todo">📝 {topContent.fukushiCC.todo}</div>
            )}
          </section>
        )}

        {/* 8. 連絡先（plain variant、茶h2） */}
        {topContent.contactInfo && (
          <section className="sodachinoki-section sodachinoki-section--variant-plain sodachinoki-fade-in">
            <h2 className="sodachinoki-h2 sodachinoki-h2--brown">
              {ICON_PHONE}
              {topContent.contactInfo.sectionTitle}
            </h2>
            <div className="sodachinoki-contact-info">
              {topContent.contactInfo.phone && (
                <p>
                  📞 <strong>{topContent.contactInfo.phone}</strong>
                </p>
              )}
              {topContent.contactInfo.hours && (
                <p>⏰ {topContent.contactInfo.hours}</p>
              )}
              {topContent.contactInfo.yorunoDay && (
                <p>📞 月1回 {topContent.contactInfo.yorunoDay}</p>
              )}
              {topContent.contactInfo.fax && (
                <p>📠 FAX: {topContent.contactInfo.fax}</p>
              )}
              {topContent.contactInfo.address && (
                <p>📍 {topContent.contactInfo.address}</p>
              )}
            </div>
          </section>
        )}

        {/* 9. 対象別ナビ（記事内・下） */}
        <InlineNav heading="より詳しく知りたい方は" />

      </div>
    </div>
  );
};

export default SodachinokiPage;
