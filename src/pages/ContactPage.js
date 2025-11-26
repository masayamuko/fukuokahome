import React from 'react';

const ContactPage = () => {
  const homes = [
    {
      name: 'かんらん舎',
      address: '福岡市南区大平寺2丁目10-1',
      phone: '092-555-2355',
      manager: 'ホーム長 平田 幸'
    },
    {
      name: '結ホーム',
      address: '福岡市南区皿山2丁目1-58',
      phone: '092−555−6792',
      manager: 'ホーム長 年徳'
    },
    {
      name: 'LEAP',
      address: '福岡県筑紫野市紫6丁目25-5',
      phone: '092-408-5778',
      manager: 'ホーム長 鶴田'
    },
    {
      name: 'スイッチ',
      address: '福岡県太宰府市通古賀3丁目13-6',
      phone: '092-555-8622',
      manager: 'ホーム長 中嶋'
    },
    {
      name: 'TIES',
      address: '福岡市南区若久4丁目2-2',
      phone: '092-555-7090',
      manager: 'ホーム長 柴田 亮'
    }
  ];

  return (
    <div className="contact-page">
      {/* ヒーローセクション */}
      <section
        className="hero-section"
        style={{
          background: 'linear-gradient(135deg, rgba(230, 126, 80, 0.4) 0%, rgba(244, 164, 96, 0.4) 100%), url("https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '4rem 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: 1
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}><span style={{ display: 'inline-block', width: '64px', height: '64px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            color: 'white'
          }}>
            お問い合わせ
          </h1>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.95rem',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', marginRight: '8px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>sjfk08@outlook.jp
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.95rem',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', marginRight: '8px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>092-555-7090
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.95rem',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', marginRight: '8px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>平日 9:00〜18:00
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ方法 */}
      <section className="section" style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          {/* セクションヘッダー */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              お問い合わせ方法
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'var(--accent-color)',
              borderRadius: '2px',
              margin: '0 auto 1.5rem'
            }}></div>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              お電話またはメールでお気軽にお問い合わせください。<br />
              通常2-3営業日以内にご返答いたします。
            </p>
          </div>

          {/* 主要な連絡方法 - 横並び */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* 電話 */}
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = 'var(--primary-color)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}>
              {/* 装飾的な背景 */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, rgba(255,107,107,0.1), rgba(255,182,108,0.1))',
                borderRadius: '50%',
                zIndex: 0
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 20px rgba(255,107,107,0.3)'
                }}>
                  <span style={{ display: 'inline-block', width: '35px', height: '35px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--primary-color)',
                  marginBottom: '1rem'
                }}>
                  お電話でのお問い合わせ
                </h3>
                <p style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: 'var(--primary-color)',
                  marginBottom: '0.8rem',
                  letterSpacing: '0.5px'
                }}>
                  092-555-7090
                </p>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #fff9f5, #fef5f0)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '25px',
                  border: '1px solid #ffe5d9'
                }}>
                  <p style={{ margin: '0', fontSize: '0.95rem', color: '#666', fontWeight: '500' }}>
                    <span style={{ display: 'inline-block', width: '14px', height: '14px', marginRight: '6px', background: 'var(--accent-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                    平日 9:00〜18:00（土日祝日を除く）
                  </p>
                </div>
              </div>
            </div>

            {/* メール */}
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = 'var(--accent-color)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'transparent';
              }}>
              {/* 装飾的な背景 */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, rgba(108,182,255,0.1), rgba(182,108,255,0.1))',
                borderRadius: '50%',
                zIndex: 0
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 20px rgba(255,182,108,0.3)'
                }}>
                  <span style={{ display: 'inline-block', width: '35px', height: '35px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--primary-color)',
                  marginBottom: '1rem'
                }}>
                  メールでのお問い合わせ
                </h3>
                <p style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: 'var(--primary-color)',
                  marginBottom: '0.8rem',
                  wordBreak: 'break-all'
                }}>
                  sjfk08@outlook.jp
                </p>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #f5f9ff, #f0f5fe)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '25px',
                  border: '1px solid #d9e9ff'
                }}>
                  <p style={{ margin: '0', fontSize: '0.95rem', color: '#666', fontWeight: '500' }}>
                    <span style={{ display: 'inline-block', width: '14px', height: '14px', marginRight: '6px', background: 'var(--accent-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                    24時間受付（返信は営業時間内）
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Googleフォーム - 全幅 */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            border: '2px solid #e8ecef',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* 装飾的な背景パターン */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(255,107,107,0.05) 0%, transparent 70%)',
              zIndex: 0
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #f5f5f5, #e8e8e8)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
              }}>
                <span style={{ display: 'inline-block', width: '40px', height: '40px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--primary-color)',
                marginBottom: '1rem'
              }}>
                オンラインお問い合わせフォーム
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#666',
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                お時間のある時にじっくりご記入いただけます。<br />
                詳細なご相談内容を事前にお伝えいただくことで、より的確な回答が可能です。
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdcP-kx_H-LbIGa-ZokFoBExIPQj7QdNai3rC2QgPf3NOEcUA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1.2rem 3rem',
                  background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  boxShadow: '0 8px 25px rgba(255,107,107,0.3)',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(255,107,107,0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,107,107,0.3)';
                }}
              >
                <span style={{ display: 'inline-block', width: '20px', height: '20px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                お問い合わせフォームを開く
                <span style={{ display: 'inline-block', width: '16px', height: '16px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 各ホーム連絡先 */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8fafb 0%, #e8f2f5 100%)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              各自立援助ホーム連絡先
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'var(--accent-color)',
              margin: '0 auto 1.5rem',
              borderRadius: '2px'
            }}></div>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              各ホームまでお気軽にお電話ください
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {homes.map((home, index) => {
              // 各ホームのGoogleマップ埋め込みURL（住所ベース・APIキー不要）
              const mapUrls = {
                'かんらん舎': 'https://maps.google.com/maps?q=福岡市南区大平寺2丁目10-1&t=&z=15&ie=UTF8&iwloc=&output=embed',
                '結ホーム': 'https://maps.google.com/maps?q=福岡市南区皿山2丁目1-58&t=&z=15&ie=UTF8&iwloc=&output=embed',
                'LEAP': 'https://maps.google.com/maps?q=福岡県筑紫野市紫6丁目25-5&t=&z=15&ie=UTF8&iwloc=&output=embed',
                'スイッチ': 'https://maps.google.com/maps?q=福岡県太宰府市通古賀3丁目13-6&t=&z=15&ie=UTF8&iwloc=&output=embed',
                'TIES': 'https://maps.google.com/maps?q=福岡市南区若久4丁目2-2&t=&z=15&ie=UTF8&iwloc=&output=embed'
              };

              return (
                <div key={index} style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  border: '1px solid #f0f0f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: index % 2 === 0 ? 'var(--primary-color)' : 'var(--accent-color)'
                  }}></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? 'var(--primary-color)' : 'var(--accent-color)'}, ${index % 2 === 0 ? 'var(--accent-color)' : 'var(--primary-color)'})`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: 'white'
                    }}>
                      <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                    </div>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: 'var(--primary-color)',
                      margin: '0'
                    }}>
                      {home.name}
                    </h3>
                  </div>

                  <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      padding: '0.8rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                        <span style={{ display: 'inline-block', width: '16px', height: '16px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\' /%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M15 11a3 3 0 11-6 0 3 3 0 016 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\' /%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M15 11a3 3 0 11-6 0 3 3 0 016 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                        <strong style={{ color: 'var(--primary-color)' }}>所在地</strong>
                      </div>
                      <p style={{ margin: '0', color: '#555' }}>{home.address}</p>
                    </div>

                    <div style={{
                      padding: '0.8rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                        <span style={{ display: 'inline-block', width: '16px', height: '16px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                        <strong style={{ color: 'var(--primary-color)' }}>電話番号</strong>
                      </div>
                      <p style={{ margin: '0', color: '#555', fontSize: '1.1rem', fontWeight: '600' }}>{home.phone}</p>
                    </div>

                    <div style={{
                      padding: '0.8rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                        <span style={{ display: 'inline-block', width: '16px', height: '16px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                        <strong style={{ color: 'var(--primary-color)' }}>担当者</strong>
                      </div>
                      <p style={{ margin: '0', color: '#555' }}>{home.manager}</p>
                    </div>
                  </div>

                  {/* Googleマップ埋め込み */}
                  <div style={{
                    marginBottom: '1.5rem',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    border: '2px solid #e8ecef'
                  }}>
                    <iframe
                      src={mapUrls[home.name]}
                      width="100%"
                      height="250"
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div style={{
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #fff9f5 0%, #fefefe 100%)',
                    borderRadius: '12px',
                    border: '1px solid #f0e5d8'
                  }}>
                    <p style={{
                      margin: '0',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      color: '#666',
                      textAlign: 'center'
                    }}>
                      <span style={{ display: 'inline-block', width: '16px', height: '16px', marginRight: '8px', background: 'var(--accent-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                      見学をご希望の場合は、事前予約が必要です。
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="section" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              よくある質問
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'var(--accent-color)',
              margin: '0 auto 1.5rem',
              borderRadius: '2px'
            }}></div>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              皆様からよくお寄せいただくご質問にお答えします
            </p>
          </div>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gap: '1.5rem'
          }}>
            {[
              {
                question: "入居の条件を教えてください",
                answer: "15歳以上の青少年で、就労または就学している方、もしくはその意思がある方が対象です。詳しくは入居相談にてご説明いたします。",
                icon: <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              },
              {
                question: "費用はどのくらいかかりますか?",
                answer: "食費や光熱費など実費相当分をご負担いただきます。詳細は個別にご相談させていただきます。",
                icon: <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              },
              {
                question: "見学はできますか?",
                answer: "はい、事前予約制で見学を受け付けています。プライバシー保護のため、利用者の同意を得た上で実施しています。",
                icon: <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M15 12a3 3 0 11-6 0 3 3 0 016 0z\' /%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M15 12a3 3 0 11-6 0 3 3 0 016 0z\' /%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              },
              {
                question: "寄付の方法を教えてください",
                answer: "銀行振込、クレジットカード決済、現金書留で受け付けています。継続寄付（月額）も可能です。詳しくは寄付ページをご覧ください。",
                icon: <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              },
              {
                question: "ボランティアに参加したいのですが",
                answer: "ボランティアも大歓迎です。イベントのお手伝いや専門スキルを活かした支援など、様々な形でご参加いただけます。まずはお問い合わせください。",
                icon: <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    {faq.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: 'var(--primary-color)',
                      marginBottom: '1rem',
                      lineHeight: '1.4'
                    }}>
                      Q. {faq.question}
                    </h3>
                    <div style={{
                      padding: '1rem'
                    }}>
                      <p style={{
                        margin: '0',
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#555'
                      }}>
                        <strong style={{ color: 'var(--primary-color)' }}>A.</strong> {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;