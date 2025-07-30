import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。担当者より後日ご連絡いたします。');
  };

  const homes = [
    {
      name: 'かんらん舎',
      address: '福岡市南区○○○○○○',
      phone: '092-XXX-XXXX',
      manager: '施設長 山田 花子'
    },
    {
      name: '結ホーム',
      address: '福岡市南区○○○○○○',
      phone: '092-XXX-XXXX',
      manager: '施設長 佐藤 太郎'
    },
    {
      name: 'LEAP',
      address: '筑紫野市○○○○○○',
      phone: '092-XXX-XXXX',
      manager: '施設長 田中 次郎'
    },
    {
      name: 'スイッチ',
      address: '太宰府市○○○○○○',
      phone: '092-XXX-XXXX',
      manager: '施設長 鈴木 一郎'
    }
  ];

  return (
    <div className="contact-page">
      {/* ヒーローセクション */}
      <section 
        className="hero-section" 
        style={{
          background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
          color: 'white',
          padding: '6rem 0',
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
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📞</div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            お問い合わせ
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '3rem',
            opacity: '0.95',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            ご質問やご相談がございましたら、お気軽にお問い合わせください。<br />
            一人ひとりのお悩みに丁寧にお答えいたします。
          </p>
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
              📧 info@fukuoka-youth.org
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.95rem',
              backdropFilter: 'blur(10px)'
            }}>
              📞 092-XXX-XXXX
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.8rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.95rem',
              backdropFilter: 'blur(10px)'
            }}>
              🕒 平日 9:00〜18:00
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  color: 'var(--primary-color)',
                  marginBottom: '1rem'
                }}>
                  お問い合わせフォーム
                </h2>
                <div style={{
                  width: '60px',
                  height: '4px',
                  background: 'var(--accent-color)',
                  borderRadius: '2px',
                  marginBottom: '1.5rem'
                }}></div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#666',
                  marginBottom: '2rem'
                }}>
                  以下のフォームからお気軽にお問い合わせください。<br />
                  通常2-3営業日以内にご返答いたします。
                </p>
              </div>
              <div style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0'
              }}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="category">お問い合わせ種別 *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="入居相談">入居相談</option>
                      <option value="寄付について">寄付について</option>
                      <option value="求人について">求人について</option>
                      <option value="ボランティア">ボランティア</option>
                      <option value="取材・見学">取材・見学</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>

                  <div className="grid grid-2">
                    <div className="form-group">
                      <label htmlFor="name">お名前 *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">メールアドレス *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-2">
                    <div className="form-group">
                      <label htmlFor="phone">電話番号</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">件名 *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">お問い合わせ内容 *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="お問い合わせの詳細をお書きください"
                      required
                    ></textarea>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button type="submit" className="btn">送信する</button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  color: 'var(--primary-color)',
                  marginBottom: '1rem'
                }}>
                  法人情報
                </h2>
                <div style={{
                  width: '60px',
                  height: '4px',
                  background: 'var(--accent-color)',
                  borderRadius: '2px',
                  marginBottom: '1.5rem'
                }}></div>
              </div>
              
              <div style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                marginBottom: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: 'var(--primary-color)',
                  marginBottom: '2rem',
                  lineHeight: '1.4'
                }}>
                  特定非営利活動法人<br />青少年の自立を支える福岡の会
                </h3>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <div style={{
                    padding: '1.5rem',
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    borderLeft: '4px solid var(--primary-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>📍</span>
                      <strong style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>所在地</strong>
                    </div>
                    <p style={{ margin: '0', color: '#444', fontSize: '1rem', lineHeight: '1.6' }}>
                      〒814-0142<br />
                      福岡市城南区梅林1丁目1番21号
                    </p>
                  </div>
                  
                  <div style={{
                    padding: '1.5rem',
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    borderLeft: '4px solid var(--accent-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>📞</span>
                      <strong style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>電話番号</strong>
                    </div>
                    <p style={{ margin: '0', color: '#444', fontSize: '1rem' }}>092-XXX-XXXX</p>
                  </div>
                  
                  <div style={{
                    padding: '1.5rem',
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    borderLeft: '4px solid var(--primary-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>📧</span>
                      <strong style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>メールアドレス</strong>
                    </div>
                    <p style={{ margin: '0', color: '#444', fontSize: '1rem' }}>info@fukuoka-youth.org</p>
                  </div>
                  
                  <div style={{
                    padding: '1.5rem',
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    borderLeft: '4px solid var(--accent-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>🕒</span>
                      <strong style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>受付時間</strong>
                    </div>
                    <p style={{ margin: '0', color: '#444', fontSize: '1rem', lineHeight: '1.6' }}>
                      平日 9:00〜18:00<br />
                      （土日祝日を除く）
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #fff9f5 0%, #fefefe 100%)',
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid #f0e5d8',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>
                    🚨
                  </div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: 'var(--primary-color)',
                    margin: '0'
                  }}>
                    緊急時連絡先
                  </h3>
                </div>
                <p style={{
                  margin: '0',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: '#555'
                }}>
                  緊急時（夜間・休日）は、各自立援助ホームまで直接お電話ください。<br />
                  緊急事態以外は平日の受付時間内にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 各ホーム連絡先 */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8fafb 0%, #e8f2f5 100%)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
              直接のご相談は各ホームまでお気軽にお電話ください
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {homes.map((home, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2.5rem',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
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
                    🏠
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
                
                <div style={{ display: 'grid', gap: '1.2rem', marginBottom: '2rem' }}>
                  <div style={{
                    padding: '1rem',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--primary-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                      <span>📍</span>
                      <strong style={{ color: 'var(--primary-color)' }}>所在地</strong>
                    </div>
                    <p style={{ margin: '0', color: '#555' }}>{home.address}</p>
                  </div>
                  
                  <div style={{
                    padding: '1rem',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--accent-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                      <span>📞</span>
                      <strong style={{ color: 'var(--primary-color)' }}>電話番号</strong>
                    </div>
                    <p style={{ margin: '0', color: '#555', fontSize: '1.1rem', fontWeight: '600' }}>{home.phone}</p>
                  </div>
                  
                  <div style={{
                    padding: '1rem',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--primary-color)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                      <span>👤</span>
                      <strong style={{ color: 'var(--primary-color)' }}>担当者</strong>
                    </div>
                    <p style={{ margin: '0', color: '#555' }}>{home.manager}</p>
                  </div>
                </div>
                
                <div style={{
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, #fff9f5 0%, #fefefe 100%)',
                  borderRadius: '12px',
                  border: '1px solid #f0e5d8'
                }}>
                  <p style={{
                    margin: '0',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    color: '#666',
                    textAlign: 'center'
                  }}>
                    💡 直接のご相談は事前にお電話でご連絡ください。<br />
                    見学をご希望の場合は、事前予約が必要です。
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                answer: "15歳から20歳までの青少年で、就労または就学している方、もしくはその意思がある方が対象です。詳しくは入居相談にてご説明いたします。",
                icon: "🏠"
              },
              {
                question: "費用はどのくらいかかりますか？",
                answer: "食費や光熱費など実費相当分をご負担いただきます。詳細は個別にご相談させていただきます。",
                icon: "💰"
              },
              {
                question: "見学はできますか？",
                answer: "はい、事前予約制で見学を受け付けています。プライバシー保護のため、利用者の同意を得た上で実施しています。",
                icon: "👀"
              },
              {
                question: "寄付の方法を教えてください",
                answer: "銀行振込、クレジットカード決済、現金書留で受け付けています。継続寄付（月額）も可能です。詳しくは寄付ページをご覧ください。",
                icon: "💝"
              },
              {
                question: "ボランティアに参加したいのですが",
                answer: "ボランティアも大歓迎です。イベントのお手伝いや専門スキルを活かした支援など、様々な形でご参加いただけます。まずはお問い合わせください。",
                icon: "🤝"
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2.5rem',
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
                      padding: '1.5rem',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                      borderRadius: '12px',
                      borderLeft: '4px solid var(--accent-color)'
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

      {/* アクセスマップ */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">アクセス</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>公共交通機関でお越しの場合</h3>
              <ul>
                <li>西鉄○○線「○○駅」から徒歩10分</li>
                <li>地下鉄○○線「○○駅」から徒歩15分</li>
                <li>西鉄バス「○○バス停」から徒歩5分</li>
              </ul>
            </div>
            <div className="card">
              <h3>お車でお越しの場合</h3>
              <ul>
                <li>福岡都市高速「○○IC」から約15分</li>
                <li>駐車場：2台分あり（事前にお知らせください）</li>
                <li>周辺にコインパーキングもございます</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <div className="map-placeholder">
              <p>地図を表示（Google Maps等を埋め込み）</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;