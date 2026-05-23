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
    lead: 'もうすぐ社会に出る子どもたちを、わたしたちにつないでください。',
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
            title: '1. わたしたちを行事に呼んでください',
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
            title: '2. ちょっとしたイベントを開かせてください',
            content: [
              {
                type: 'paragraph',
                text: '中高生向けの自立支援につながるイベントを、施設のなかで開かせてください。',
              },
            ],
          },
        ],
      },

      // 自立支援プログラム
      { type: 'heading', level: 2, text: '自立支援プログラム' },
      {
        type: 'keyphrase',
        text:
          'もうすぐ社会に出る子どもたちを、わたしたちにつないでください。中高生向けの自立支援プログラムを提供しています。',
      },

      // 施設の行事で「おちかづき」
      { type: 'heading', level: 3, text: '施設の行事で「おちかづき」' },
      {
        type: 'list',
        items: [
          '施設のお祭り。出店で高校生と一緒に。',
          'スポーツ大会で、一緒に汗を流して。',
          '卒園式で、バトンタッチの機会を。',
        ],
      },

      // こんなイベント、開きます
      { type: 'heading', level: 3, text: 'こんなイベント、開きます' },
      {
        type: 'list',
        items: [
          '若者のリアルなお財布事情、教えます！',
          '卒園生が巻き込まれやすいトラブルとは？',
          'こんな仕事、知ってますか？',
          '先輩の話を聞いてみよう！',
          '女子会したい！',
        ],
      },

      // 相談体制
      { type: 'heading', level: 2, text: '相談体制' },
      {
        type: 'keyphrase',
        text: '相談がないと動けないわたしたちに、子どもたちとの出会いの場をください。',
      },
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
          '電話とWEBによる相談受付',
          'アウトリーチ型のケースワーク',
          '弁護士によるバックアップ',
        ],
      },

      // アフターケア事業
      { type: 'heading', level: 2, text: 'アフターケア事業' },
      {
        type: 'paragraph',
        text:
          '福岡県から委託を受けて運営している「施設退所児童等自立支援促進事業」です。2015年11月に始まり、児童養護施設・里親家庭・自立援助ホームなどの社会的養護を経験した方を対象に、住まいや仕事の確保、生活全般の支援を行っています。',
      },
      {
        type: 'table',
        rows: [
          ['委託元', '福岡県'],
          ['事業名', '施設退所児童等自立支援促進事業'],
          ['運用開始', '2015年11月1日'],
          ['対象', '児童養護施設・里親家庭・自立援助ホームなど社会的養護経験者'],
          ['支援内容', '住まいの確保 / 仕事の確保 / その他の生活支援'],
        ],
      },

      // 連絡先
      { type: 'heading', level: 2, text: '連絡先' },
      {
        type: 'contactInfo',
        phone: '092-791-1673',
        hours: '平日10:00〜18:00',
      },

      // 協力のお願い CTA
      { type: 'heading', level: 2, text: '協力のお願い' },
      { type: 'keyphrase', text: 'わたしたちと一緒に、若者を支えてください。' },
      {
        type: 'cta',
        text: 'お問い合わせ・ご相談はこちらから',
        href: '/contact',
      },
    ],
  },

  // --------------------------------------
  // /sodachinoki/for-wakamono — 10代20代のみなさんへ
  // --------------------------------------
  'for-wakamono': {
    title: '10代20代のみなさんへ',
    lead:
      '居場所がないと感じているあなたへ。話を聞かせてください。わたしたちが、いっしょに動きます。',
    image: '/images/sodachinoki/original/kokoline-images_top__girl02.png',
    alt: '若者向けイメージ',
    blocks: [
      // メインメッセージ
      {
        type: 'keyphrase',
        text:
          'わたしたちは、居場所のない子どもたち、若者たちが、ひとりじゃないと思える未来を目指しています。',
      },

      // こんなあなたへ
      { type: 'heading', level: 2, text: 'こんなあなたへ' },
      {
        type: 'list',
        items: [
          '施設や里親家庭、児童相談所などで暮らしたことのあるすべての人',
          '家族や生活のことで悩みがある10代の人',
        ],
      },

      // 話を聞かせてください
      { type: 'heading', level: 2, text: '話を聞かせてください' },
      { type: 'keyphrase', text: '話を聞かせてください。わたしたちが動きます。' },
      {
        type: 'paragraph',
        text:
          '家族や生活の悩みを誰かに解決してほしいと思ったら、わたしたちに連絡してください。社会福祉士や弁護士が、聞いて、動いて、解決します。',
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
        hours: '平日10:00〜18:00',
      },
    ],
  },

  // --------------------------------------
  // /sodachinoki/for-citizen — 困っている若者を見かけたら
  // --------------------------------------
  'for-citizen': {
    title: '困っている若者を見かけたら',
    lead:
      '虐待、家族との関係悪化、非行などの原因で居場所を失った子どもや若者を支援しています。',
    image: '/images/sodachinoki/original/_common__bg03.jpg',
    alt: '一般の方向けイメージ',
    blocks: [
      // みなさまへのお願い
      { type: 'heading', level: 2, text: 'みなさまへのお願い' },
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
          'たとえばこんな時に、わたしたちを呼んでください。聞いて、動いて、解決します。',
      },
      {
        type: 'list',
        items: [
          '「家庭で暴力を受けている子がいる。居場所を探してほしい。」',
          '「女の子が家を出ている間に妊娠したらしい。病院に同行してもらえないか。」',
          '「アダルトサイトで法外な請求を受けた。」',
          '「親との関係に悩んでいて息苦しそう。気晴らしにどこかへ連れて行ってあげてほしい。」',
        ],
      },

      // 信頼情報
      { type: 'heading', level: 2, text: 'わたしたちについて' },
      {
        type: 'box',
        variant: 'green',
        title: '秘密は守ります',
        items: [
          '聞き上手なスタッフが対応します',
          '社会福祉士・弁護士などの専門家が在籍しています',
          '本人の同意なしに警察・施設などへ無断で連絡することはありません',
        ],
      },

      // 「ここライン」について（言葉として残す）
      { type: 'heading', level: 2, text: '「ここライン」について' },
      {
        type: 'box',
        variant: 'cream',
        title: 'コンセプト「聞く。会う。動く。」',
      },

      // 協力のお願い
      { type: 'heading', level: 2, text: '協力のお願い' },
      { type: 'keyphrase', text: 'わたしたちと一緒に、若者を支えてください。' },

      // 連絡先（最後尾に移動）
      { type: 'heading', level: 2, text: '連絡先' },
      {
        type: 'contactInfo',
        phone: '092-791-1673',
        hours: '平日10:00〜18:00',
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
      '居場所を失った子どもたち、若者たちが\n自分らしく生活できるように、社会とつなぐ',
    supportTargets: '虐待、施設からの自立困難、住居喪失',
  },

  // 全体を貫くキーフレーズ
  keyphrase: '聞く・会う・社会につなぐ',

  // 法人概要・設立趣旨（要約） — 設立の想いのみ
  about: {
    sectionTitle: 'そだちの樹について',
    missionTitle: '設立の想い',
    mission:
      '「傷ついた心をゆっくりと癒し、未来への希望を胸に抱きながら眠ることのできる居場所」を見つけた子どもたちは、大人たちの想像を越えて力強い一歩を踏み出せます。家庭で暮らせない子どもたちへの安心できる居場所の提供は、子どもの権利条約に定められた子どもの権利であり、国や自治体だけでなく社会全体の責任です。',
  },

  // 私たちのアクション
  action: {
    sectionTitle: '私たちのアクション',
    lead:
      '社会につなぐ、居場所をつくる、いまを伝える。3つのアクションで、若者たちの自立を支援してきました。',
    areas: [
      {
        title: '社会につなぐ',
        items: [
          '相談窓口「ここライン」',
          'アフターケア事業',
        ],
      },
      {
        title: '居場所をつくる',
        items: ['フリースペース', '子どもシェルター'],
      },
      {
        title: 'いまを伝える',
        items: ['研修・講演など'],
      },
    ],
    aftercareDetail: {
      title: 'アフターケア事業',
      desc:
        '委託元 福岡県、事業名「施設退所児童等自立支援促進事業」、運用開始 2015年11月。児童養護施設、里親家庭、自立援助ホームなどの社会的養護を経験した方を対象に、住まいや仕事の確保、生活全般の支援を行います。',
    },
  },

  // 福祉CC紹介
  fukushiCC: {
    sectionTitle: '福祉コーディネーター（福祉CC）',
    desc:
      '子ども・若者と関わる社会福祉士など、現場経験豊富な福祉CC（コーディネーター）が、相談者一人ひとりに寄り添ってきました。',
  },

  // 連絡先（TOPフッター直前）
  contactInfo: {
    sectionTitle: '連絡先',
    phone: '092-791-1673',
    fax: '092-791-1674',
    hours: '平日10:00〜18:00',
  },
};

// ========================================
// 補助エクスポート（3カードを配列で取り出す）
// ========================================
export const sectionList = SECTION_ORDER.map((id) => sectionMeta[id]).filter(Boolean);
