// そだちの樹アーカイブページ コンテンツデータ
// 仕様書: ~/.claude/jobs/7db71eef/sodachinoki_content_spec_v2.md
// 構造: TOP + ターゲット別3ページ（for-shisetsu / for-wakamono / for-citizen）
// 位置づけ: NPO法人そだちの樹（2012〜）の事業内容を SJFK が継承する形でアーカイブ

// ========================================
// 3つのターゲット別下層ページのID（順序保持）
// ========================================
export const SECTION_ORDER = ['for-shisetsu', 'for-wakamono', 'for-citizen'];

// ========================================
// TOP用に表示する3カードのメタ
// ========================================
export const sectionMeta = {
  'for-shisetsu': {
    id: 'for-shisetsu',
    title: '施設の先生・里親さんへ',
    subtitle: '若者を、つないでください。',
    image: '/images/sodachinoki/original/generation__geteration.png',
    alt: '施設の先生・里親さん向けイメージ',
    bgColor: '#F7941D', // オレンジ系
  },
  'for-wakamono': {
    id: 'for-wakamono',
    title: '10代20代のみなさんへ',
    subtitle: 'わたしたちが、聞きます。動きます。',
    image: '/images/sodachinoki/original/kokoline-images_top__girl02.png',
    alt: '若者向けイメージ',
    bgColor: '#07913A', // 緑
  },
  'for-citizen': {
    id: 'for-citizen',
    title: '困っている若者を見かけたら',
    subtitle: '若者を、わたしたちにつないでください。',
    image: '/images/sodachinoki/original/_common__bg03.jpg',
    alt: '一般の方向けイメージ',
    bgColor: '#8B7C64', // ブラウン
  },
};

// ========================================
// 3つの下層ページの本文（blocks 配列）
// ========================================
export const sectionData = {
  // --------------------------------------
  // /sodachinoki/for-shisetsu — 施設の先生・里親さんへ
  // --------------------------------------
  'for-shisetsu': {
    title: '施設の先生・里親さんへ',
    image: '/images/sodachinoki/original/generation__geteration.png',
    alt: '施設の先生・里親さん向けイメージ',
    blocks: [
      // 2つのお願い（twoColumn でカード並び）
      { type: 'heading', level: 2, text: '2つのお願い' },
      {
        type: 'twoColumn',
        left: [
          {
            type: 'box',
            variant: 'green',
            title: 'わたしたちを行事に呼んでください',
            content: [
              {
                type: 'paragraph',
                text: '施設の行事のなかで、子どもたちとお近づきになる機会をいただけませんか。',
              },
            ],
          },
        ],
        right: [
          {
            type: 'box',
            variant: 'green',
            title: 'ちょっとしたイベントを開かせてください',
            content: [
              {
                type: 'paragraph',
                text: '中高生向けの自立支援につながるイベントを、施設のなかで開かせてください。',
              },
            ],
          },
        ],
      },

      // 相談体制
      { type: 'heading', level: 2, text: '相談体制' },
      {
        type: 'box',
        variant: 'cream',
        title: 'プロセス',
        content: [{ type: 'paragraph', text: '聞く。会う。動く。社会につなぐ。' }],
      },
      { type: 'heading', level: 3, text: 'サービス内容' },
      {
        type: 'list',
        items: [
          '電話による相談受付',
          'アウトリーチ型のケースワーク',
          '弁護士・心理士によるバックアップ',
        ],
      },

      // 連絡先（最後尾に移動）
      { type: 'heading', level: 2, text: '連絡先' },
      {
        type: 'contactInfo',
        phone: '092-791-1673',
        hours: '平日9:30〜18:00',
      },
    ],
  },

  // --------------------------------------
  // /sodachinoki/for-wakamono — 10代20代のみなさんへ
  // --------------------------------------
  'for-wakamono': {
    title: '10代20代のみなさんへ',
    image: '/images/sodachinoki/original/kokoline-images_top__girl02.png',
    alt: '若者向けイメージ',
    blocks: [
      // メインメッセージ
      {
        type: 'keyphrase',
        text:
          'わたしたちは、若者たちひとりひとりが自分らしく安心して過ごせる未来を目指しています。',
      },

      // こんなあなたへ
      { type: 'heading', level: 2, text: 'こんなあなたへ' },
      {
        type: 'list',
        items: [
          '施設や里親家庭、児童相談所などで暮らしたことのあるすべての人',
          '家族や生活のことで悩みがある10代、20代の人',
        ],
      },

      {
        type: 'paragraph',
        text:
          '家族や生活の悩みを誰かに聞いて欲しい、話したいと思ったら、わたしたちに連絡してください。',
      },
      {
        type: 'box',
        variant: 'orange',
        title: '大切なお知らせ',
        content: [
          {
            type: 'paragraph',
            text:
              '相談は無料です。わたしたちに話した内容が親や学校、施設などに伝わることはありません。困ったことや、話したいことがあったら、一度ご連絡くださいね。',
          },
        ],
      },

      // 相談例
      { type: 'heading', level: 2, text: 'こんな相談を受けてきました' },
      {
        type: 'list',
        items: [
          '家を出たい、行く場所がない',
          '身体的・言語的な暴力を受けている',
          '性的暴力やセクハラに困っている',
          '不当な請求でトラブルになっている',
          '借金の悩み',
          '住む場所の問題（寮からの退出など）',
          'ガスや電気などライフラインが止まりそう',
          '就職・転職をどうしたらいいか分からない',
          '人間関係で悩んでいる',
        ],
      },

      // 6つの安心
      { type: 'heading', level: 2, text: '6つの安心' },
      {
        type: 'list',
        checklist: true,
        items: [
          'ニックネームでも話せます',
          'ひみつは守ります',
          '本人の同意なしに警察・施設などに無断で連絡しません',
          '電話に予約はいりません',
          '対面相談もできます',
          '解決まで支援します（相談・解決は無料）',
        ],
      },

      // 連絡先
      { type: 'heading', level: 2, text: '連絡先' },
      {
        type: 'contactInfo',
        phone: '092-791-1673',
        hours: '平日9:30〜18:00',
      },
    ],
  },

  // --------------------------------------
  // /sodachinoki/for-citizen — 困っている若者を見かけたら
  // --------------------------------------
  'for-citizen': {
    title: '困っている若者を見かけたら',
    image: '/images/sodachinoki/original/_common__bg03.jpg',
    alt: '一般の方向けイメージ',
    blocks: [
      // みなさまへのお願い
      { type: 'keyphrase', text: '子どもたちや若者たちを、わたしたちにつないでください。' },

      // つなぎ方（2項目に修正）
      { type: 'heading', level: 3, text: 'つなぎ方' },
      {
        type: 'numberedList',
        items: ['このサイトを見せる', '代わりに電話する'],
      },

      // 対応事例
      { type: 'heading', level: 2, text: '対応事例' },
      {
        type: 'paragraph',
        text:
          'たとえばこんな時に、わたしたちを呼んでください。',
      },
      {
        type: 'list',
        items: [
          '「家庭で暴力を受けている子がいる。」',
          '「妊娠したらしい。病院に同行してもらえないか。」',
          '「法外な請求を受けた。」',
          '「親との関係に悩んでいて息苦しそう。」',
        ],
      },

      // 信頼情報
      { type: 'heading', level: 2, text: 'わたしたちについて' },
      {
        type: 'box',
        variant: 'green',
        title: '秘密は守ります',
        items: [
          '社会福祉士・弁護士などの専門家が在籍しています',
          '本人の同意なしに警察・施設などへ無断で連絡することはありません',
        ],
      },

      // 連絡先（最後尾に移動）
      { type: 'heading', level: 2, text: '連絡先' },
      {
        type: 'contactInfo',
        phone: '092-791-1673',
        hours: '平日9:30〜18:00',
      },
    ],
  },
};

// ========================================
// TOPページ用統合コンテンツ
// ========================================
export const topContent = {
  // ヒーロー
  hero: {
    image: '/images/sodachinoki/hero/top__bg01.jpg',
    alt: '居場所のない子どもたち、若者たち',
    mainMessage:
      '若者たちが安心して生活できるように、人と社会とのつながりを大切にします。',
  },

  // 全体を貫くキーフレーズ
  keyphrase: '聞く・会う・社会につなぐ',

  // 私たちのアクション
  action: {
    sectionTitle: '私たちのアクション',
    lead:
      '社会につなぐ、居場所をつくる、いまを伝える。3つのアクションで、若者たちの自立を支援しています。',
    areas: [
      {
        title: '社会につなぐ',
        items: [
          '相談支援',
        ],
      },
      {
        title: '居場所をつくる',
        items: ['フリースペース', '（ここ食堂）無料の食事会'],
      },
      {
        title: 'いまを伝える',
        items: ['研修・講演など'],
      },
    ],
  },

  // 連絡先（TOPフッター直前）
  contactInfo: {
    sectionTitle: '連絡先',
    phone: '092-791-1673',
    fax: '092-791-1674',
    hours: '平日9:30〜18:00',
  },
};

// ========================================
// 補助エクスポート（3カードを配列で取り出す）
// ========================================
export const sectionList = SECTION_ORDER.map((id) => sectionMeta[id]).filter(Boolean);
