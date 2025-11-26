import React from 'react';
import { Link } from 'react-router-dom';

const DonationPage = () => {

  return (
    <div className="donation-page">
      {/* ヒーローセクション */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(230, 126, 80, 0.4) 0%, rgba(244, 164, 96, 0.4) 100%), url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}><span style={{ display: 'inline-block', width: '64px', height: '64px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2',
              color: 'white'
            }}>
              あなたの想いが<br />青少年の未来を変える
            </h1>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#donation-methods" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem',
                background: 'white',
                color: 'var(--primary-color)',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <span style={{ display: 'inline-block', width: '24px', height: '24px', marginRight: '8px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                今すぐ寄付する
              </a>
              <a href="#usage" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.5)',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s ease'
              }}>
                <span style={{ fontSize: '1.3rem' }}>📊</span>
                使い道を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付の必要性 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">なぜ寄付が必要なのか</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>青少年への支援</h3>
              <p>
                自立援助ホームで生活する青少年が安心して成長し、将来への希望を持てるよう、
                様々な支援が必要です。生活用品の提供や教育機会の確保、
                就労支援など、多岐にわたるサポートを行っています。
              </p>
            </div>
            <div className="card">
              <h3>施設の運営</h3>
              <p>
                5つの自立援助ホームを24時間体制で運営するためには、
                職員の人件費や施設の維持費、光熱費など多くの費用が必要です。
                皆様のご支援により、安定した運営を続けることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付の方法 */}
      <section id="donation-methods" style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">寄付の方法</h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              皆様の温かいご支援をお待ちしております
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto 4rem' }}>
            {/* ボランティア */}
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🙋‍♀️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>ボランティア</h3>
              <p style={{ marginBottom: '1.5rem' }}>イベントのお手伝いや専門スキルを活かしたボランティア活動にご参加いただけます。</p>
              <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#666' }}>
                <strong>例：</strong> イベント運営、学習支援、専門技術指導
              </div>
            </div>
            {/* 現物寄付 */}
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>現物寄付</h3>
              <p style={{ marginBottom: '1.5rem' }}>生活用品や学習用品など、青少年の生活に必要な物品のご寄付もお受けしています。</p>
              <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#666' }}>
                <strong>例：</strong> 文房具、衣類、家電製品、図書
              </div>
            </div>
            {/* 企業連携 */}
            <div className="card" style={{ textAlign: 'center', padding: '2.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>企業連携</h3>
              <p style={{ marginBottom: '1.5rem' }}>就労支援や職業体験の機会提供など、企業の皆様との連携も大歓迎です。</p>
              <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#666' }}>
                <strong>例：</strong> インターンシップ、職場体験、研修機会提供
              </div>
            </div>
          </div>

          {/* お問い合わせへの誘導 */}
          <div style={{ textAlign: 'center', background: '#f8fafb', padding: '3rem', borderRadius: '16px', maxWidth: '800px', margin: '0 auto', border: '1px solid #e9ecef' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>その他の寄付についてはお問い合わせください</h3>
            <p style={{ marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
              お金の寄付や、上記以外の支援方法につきましても、<br />
              お電話やメールにてお気軽にご相談ください。
            </p>
            <Link to="/contact" className="btn" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>お問い合わせ</Link>
          </div>
        </div>
      </section>

      {/* 寄付金の使途 */}
      <section id="usage" style={{
        background: 'linear-gradient(135deg, #f8fafb 0%, #e8f2f5 100%)',
        padding: '100px 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              寄付金の使途
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              皆様からの大切なご寄付は、青少年の支援に直接活用されています
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              position: 'relative'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem',
                color: 'white'
              }}><span style={{ display: 'inline-block', width: '32px', height: '32px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--primary-color)'
              }}>人件費・支援体制</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                専門職員の配置と研修費用<br />
                24時間体制での支援提供と職員の専門性向上
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem',
                color: 'white'
              }}><span style={{ display: 'inline-block', width: '48px', height: '48px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#22c55e'
              }}>施設運営・管理費</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                施設維持費、光熱費、法人運営費<br />
                安心安全な環境維持と透明性の高い運営
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem',
                color: 'white'
              }}><span style={{ display: 'inline-block', width: '48px', height: '48px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#d97706'
              }}>青少年支援費</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                生活用品、教育費、就労支援費<br />
                一人ひとりの自立に向けた直接支援
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 支援者の声 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">支援者の声</h2>
          <div className="grid grid-2">
            <div className="card">
              <h4>企業支援者様</h4>
              <p>
                「社会貢献活動の一環として継続的に支援させていただいています。
                青少年の自立支援という大切な活動に参加できることを嬉しく思います。
                定期的に活動報告をいただけるので、支援の効果を実感できます。」
              </p>
            </div>
            <div className="card">
              <h4>個人支援者様</h4>
              <p>
                「月額寄付で支援しています。少額でも継続することで、
                青少年の未来に貢献できていると感じています。
                職員の皆さんの熱意が伝わってくる活動報告がとても励みになります。」
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;