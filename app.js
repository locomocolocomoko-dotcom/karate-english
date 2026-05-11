/* 空手道場 英会話トレーナー - メインアプリケーション */

// === フレーズデータ ===
const CATEGORIES = [
  {
    id: 'greeting', name: '出迎え・挨拶', icon: '🤝',
    description: '最初の挨拶と自己紹介',
    phrases: [
      { ja: 'ようこそ！', en: 'Welcome!', hint: 'ウェルカム！' },
      { ja: 'はじめまして。', en: 'Nice to meet you.', hint: 'ナイス トゥ ミート ユー' },
      { ja: '私が先生です。', en: "I'm the instructor.", hint: 'アイム ジ インストラクター' },
      { ja: '来てくれてありがとう。', en: 'Thank you for coming.', hint: 'サンキュー フォー カミング' },
      { ja: 'お名前は？', en: "What's your name?", hint: 'ワッツ ユア ネーム？' },
      { ja: 'どこから来たの？', en: 'Where are you from?', hint: 'ウェア アー ユー フロム？' },
      { ja: '日本は初めてですか？', en: 'Is this your first time in Japan?', hint: 'イズ ディス ユア ファースト タイム イン ジャパン？' },
      { ja: 'いつ日本に来たの？', en: 'When did you arrive in Japan?', hint: 'ウェン ディド ユー アライヴ イン ジャパン？' },
      { ja: 'どのくらい滞在しますか？', en: 'How long are you staying?', hint: 'ハウ ロング アー ユー ステイイング？' },
    ]
  },
  {
    id: 'smalltalk', name: '雑談', icon: '💬',
    description: '軽い会話・質問',
    phrases: [
      { ja: 'お仕事は何をされていますか？', en: 'What do you do for a living?', hint: 'ワット ドゥ ユー ドゥ フォー ア リヴィング？' },
      { ja: '空手はどのくらいやってますか？', en: 'How long have you been practicing karate?', hint: 'ハウ ロング ハヴ ユー ビーン プラクティシング カラテ？' },
      { ja: '何帯ですか？', en: 'What belt are you?', hint: 'ワット ベルト アー ユー？' },
      { ja: '何流ですか？', en: 'What style do you practice?', hint: 'ワット スタイル ドゥ ユー プラクティス？' },
      { ja: '先生は誰ですか？', en: 'Who is your sensei?', hint: 'フー イズ ユア センセイ？' },
      { ja: '日本はどうですか？', en: 'How do you like Japan?', hint: 'ハウ ドゥ ユー ライク ジャパン？' },
      { ja: '日本食は好きですか？', en: 'Do you like Japanese food?', hint: 'ドゥ ユー ライク ジャパニーズ フード？' },
      { ja: '怪我はありますか？', en: 'Do you have any injuries?', hint: 'ドゥ ユー ハヴ エニー インジュリーズ？' },
      { ja: '何か質問はありますか？', en: 'Do you have any questions?', hint: 'ドゥ ユー ハヴ エニー クエスチョンズ？' },
      { ja: '疲れてない？大丈夫？', en: 'Are you tired? Are you okay?', hint: 'アー ユー タイアード？ アー ユー オーケー？' },
    ]
  },
  {
    id: 'training', name: '稽古', icon: '🥋',
    description: '稽古中に使うフレーズ',
    phrases: [
      { ja: '並んでください。', en: 'Line up, please.', hint: 'ライン アップ、プリーズ' },
      { ja: '礼。', en: 'Bow.', hint: 'バウ' },
      { ja: 'はじめます。', en: "Let's begin.", hint: 'レッツ ビギン' },
      { ja: '用意。', en: 'Get ready.', hint: 'ゲット レディ' },
      { ja: 'はじめ！', en: 'Start!', hint: 'スタート！' },
      { ja: 'やめ！', en: 'Stop!', hint: 'ストップ！' },
      { ja: 'もう一回。', en: 'One more time.', hint: 'ワン モア タイム' },
      { ja: 'よく見てください。', en: 'Watch carefully.', hint: 'ウォッチ ケアフリー' },
      { ja: 'こうやって。', en: 'Like this.', hint: 'ライク ディス' },
      { ja: '真似してください。', en: 'Follow me.', hint: 'フォロー ミー' },
      { ja: 'もっと速く！', en: 'Faster!', hint: 'ファスター！' },
      { ja: 'もっと強く！', en: 'Stronger!', hint: 'ストロンガー！' },
      { ja: 'もっとゆっくり。', en: 'Slower.', hint: 'スローワー' },
      { ja: 'いいですよ！', en: 'Good job!', hint: 'グッド ジョブ！' },
      { ja: 'その調子！', en: 'Keep it up!', hint: 'キープ イット アップ！' },
      { ja: '二人一組になって。', en: 'Pair up.', hint: 'ペア アップ' },
      { ja: '相手を変えて。', en: 'Switch partners.', hint: 'スウィッチ パートナーズ' },
      { ja: '休憩してください。', en: 'Take a break.', hint: 'テイク ア ブレイク' },
      { ja: '水を飲んでください。', en: 'Drink some water.', hint: 'ドリンク サム ウォーター' },
      { ja: '今日はここまでです。', en: "That's all for today.", hint: 'ザッツ オール フォー トゥデイ' },
      { ja: 'お疲れ様でした。', en: 'Thank you for your hard work.', hint: 'サンキュー フォー ユア ハード ワーク' },
    ]
  },
  {
    id: 'farewell', name: '見送り', icon: '👋',
    description: '帰りの挨拶',
    phrases: [
      { ja: '今日はありがとうございました。', en: 'Thank you for today.', hint: 'サンキュー フォー トゥデイ' },
      { ja: '一緒に稽古できてよかったです。', en: 'It was great training with you.', hint: 'イット ワズ グレイト トレーニング ウィズ ユー' },
      { ja: 'またいつでも来てください。', en: 'Please come again anytime.', hint: 'プリーズ カム アゲイン エニータイム' },
      { ja: '気をつけて帰ってね。', en: 'Have a safe trip back.', hint: 'ハヴ ア セイフ トリップ バック' },
      { ja: '楽しかったですか？', en: 'Did you enjoy it?', hint: 'ディド ユー エンジョイ イット？' },
      { ja: '連絡先を交換しましょう。', en: "Let's exchange contact info.", hint: 'レッツ エクスチェンジ コンタクト インフォ' },
      { ja: '写真を撮りましょう！', en: "Let's take a photo!", hint: 'レッツ テイク ア フォト！' },
      { ja: 'また会えるのを楽しみにしています。', en: 'I look forward to seeing you again.', hint: 'アイ ルック フォワード トゥ シーイング ユー アゲイン' },
    ]
  }
];

// === アプリ状態 ===
const state = {
  currentCategory: null,
  currentIndex: 0,
  customPhrases: [],
  recognition: null,
  isListening: false
};

// === DOM要素取得 ===
const $ = (id) => document.getElementById(id);

// === 初期化 ===
function init() {
  loadCustomPhrases();
  renderHome();
  setupEventListeners();
}

// === ローカルストレージ ===
function loadCustomPhrases() {
  try {
    const saved = localStorage.getItem('karate-english-custom');
    if (saved) state.customPhrases = JSON.parse(saved);
  } catch (e) { /* 無視 */ }
}

function saveCustomPhrases() {
  localStorage.setItem('karate-english-custom', JSON.stringify(state.customPhrases));
}

// === ホーム画面描画 ===
function renderHome() {
  const grid = $('category-grid');
  const allCats = [...CATEGORIES];
  if (state.customPhrases.length > 0) {
    allCats.push({
      id: 'custom', name: 'カスタム', icon: '⭐',
      description: '自分で追加したフレーズ',
      phrases: state.customPhrases
    });
  }
  grid.innerHTML = allCats.map(cat => `
    <div class="category-card" data-category="${cat.id}" role="button" tabindex="0">
      <div class="card-icon">${cat.icon}</div>
      <div class="card-name">${cat.name}</div>
      <div class="card-desc">${cat.description}</div>
      <div class="card-count">${cat.phrases.length} フレーズ</div>
    </div>
  `).join('');

  // カードクリックイベント
  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.dataset.category;
      if (catId === 'custom') {
        startPractice({ id: 'custom', name: 'カスタム', icon: '⭐', phrases: state.customPhrases });
      } else {
        const cat = CATEGORIES.find(c => c.id === catId);
        if (cat) startPractice(cat);
      }
    });
  });
}

// === 画面切替 ===
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(screenId).classList.add('active');
}

// === 練習開始 ===
function startPractice(category) {
  state.currentCategory = category;
  state.currentIndex = 0;
  showScreen('practice-screen');
  $('practice-category-icon').textContent = category.icon;
  $('practice-category-name').textContent = category.name;
  renderPhrase();
}

// === フレーズ描画 ===
function renderPhrase() {
  const cat = state.currentCategory;
  if (!cat || cat.phrases.length === 0) return;

  const phrase = cat.phrases[state.currentIndex];
  const total = cat.phrases.length;

  $('phrase-ja').textContent = phrase.ja;
  $('phrase-en').textContent = phrase.en;
  $('phrase-hint').textContent = phrase.hint || '';
  $('phrase-hint').classList.add('hidden');
  $('btn-show-hint').classList.remove('active');

  $('practice-current').textContent = state.currentIndex + 1;
  $('practice-total').textContent = total;
  $('progress-bar').style.width = `${((state.currentIndex + 1) / total) * 100}%`;

  $('btn-prev').disabled = state.currentIndex === 0;
  $('result-area').classList.add('hidden');
  $('btn-listen').classList.remove('playing');

  // カードアニメーション
  const card = $('phrase-card');
  card.style.animation = 'none';
  card.offsetHeight; // リフロー強制
  card.style.animation = 'slideUp 0.4s ease';
}

// === 音声合成（読み上げ） ===
// 読み込み済み音声リストのキャッシュ
let cachedVoices = [];

function loadVoices() {
  cachedVoices = window.speechSynthesis.getVoices();
}

function speakEnglish(text) {
  const dbg = $('debug-status');
  if (dbg) {
    dbg.style.display = 'block';
    dbg.textContent = '🔍 準備中...';
  }

  if (!('speechSynthesis' in window)) {
    if (dbg) dbg.textContent = '❌ このブラウザは音声非対応です';
    return;
  }

  // 前の再生があれば停止（speaking中のみ）
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  // 音声リスト読み込み
  if (cachedVoices.length === 0) loadVoices();

  // 発話オブジェクトを作成
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.85;
  utter.pitch = 1;
  utter.volume = 1;

  // 英語音声を探す（見つからなければ指定しない）
  const enVoice = cachedVoices.find(v => v.lang === 'en-US')
    || cachedVoices.find(v => v.lang.startsWith('en'));
  if (enVoice) utter.voice = enVoice;

  if (dbg) {
    dbg.textContent = `🔊 音声数:${cachedVoices.length} | 選択:${enVoice ? enVoice.name : 'デフォルト'} | ${text}`;
  }

  // イベントハンドラ
  $('btn-listen').classList.add('playing');
  utter.onstart = () => {
    if (dbg) dbg.textContent += ' | ▶️再生中';
  };
  utter.onend = () => {
    $('btn-listen').classList.remove('playing');
    if (dbg) dbg.textContent += ' | ⏹️完了';
  };
  utter.onerror = (e) => {
    $('btn-listen').classList.remove('playing');
    if (dbg) dbg.textContent = `❌ エラー: ${e.error}`;

    // synthesis-failedの場合、音声指定なしでリトライ
    if (e.error === 'synthesis-failed' && enVoice) {
      if (dbg) dbg.textContent += ' → 音声なしでリトライ中...';
      const retry = new SpeechSynthesisUtterance(text);
      retry.lang = 'en';
      retry.rate = 0.85;
      retry.volume = 1;
      // 音声を指定しない
      retry.onstart = () => {
        if (dbg) dbg.textContent = '🔊 リトライ成功 | ▶️再生中';
        $('btn-listen').classList.add('playing');
      };
      retry.onend = () => {
        $('btn-listen').classList.remove('playing');
        if (dbg) dbg.textContent += ' | ⏹️完了';
      };
      retry.onerror = (e2) => {
        $('btn-listen').classList.remove('playing');
        if (dbg) {
          dbg.innerHTML = `❌ 音声再生できません (${e2.error})<br>
            📱 Chromeの代わりに「Samsung Internet」や「Firefox」で試してください<br>
            または設定 → Google テキスト読み上げ → 英語データを再ダウンロード`;
        }
      };
      window.speechSynthesis.speak(retry);
    }
  };

  // ★ 直接再生（setTimeoutなし = ユーザージェスチャーを維持）
  window.speechSynthesis.speak(utter);
}

// === 音声認識（マイク入力） ===
function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('このブラウザは音声認識に対応していません。Chromeをお使いください。');
    return;
  }

  if (state.isListening) {
    stopListening();
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;
  state.recognition = recognition;
  state.isListening = true;

  $('listening-overlay').classList.remove('hidden');

  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript;
    stopListening();
    showResult(result);
  };

  recognition.onerror = (event) => {
    stopListening();
    if (event.error === 'no-speech') {
      showResult('（音声が検出されませんでした）', true);
    } else if (event.error !== 'aborted') {
      showResult('（エラー: ' + event.error + '）', true);
    }
  };

  recognition.onend = () => {
    if (state.isListening) stopListening();
  };

  recognition.start();
}

function stopListening() {
  state.isListening = false;
  if (state.recognition) {
    try { state.recognition.stop(); } catch (e) { /* 無視 */ }
    state.recognition = null;
  }
  $('listening-overlay').classList.add('hidden');
}

// === 結果表示 ===
function showResult(spokenText, isError = false) {
  const resultArea = $('result-area');
  resultArea.classList.remove('hidden');
  $('result-text').textContent = spokenText;

  if (isError) {
    $('result-status').textContent = '🔄 もう一度試してみよう';
    $('result-status').className = 'result-status retry';
    return;
  }

  const expected = state.currentCategory.phrases[state.currentIndex].en.toLowerCase().replace(/[^a-z0-9\s]/g, '');
  const spoken = spokenText.toLowerCase().replace(/[^a-z0-9\s]/g, '');

  // 類似度チェック
  const similarity = calcSimilarity(expected, spoken);

  if (similarity > 0.8) {
    $('result-status').textContent = '🎉 すばらしい！';
    $('result-status').className = 'result-status success';
  } else if (similarity > 0.5) {
    $('result-status').textContent = '👍 おしい！もう少し！';
    $('result-status').className = 'result-status partial';
  } else {
    $('result-status').textContent = '🔄 もう一度チャレンジ！';
    $('result-status').className = 'result-status retry';
  }
}

// === 簡易類似度計算 ===
function calcSimilarity(a, b) {
  const wordsA = a.split(/\s+/);
  const wordsB = b.split(/\s+/);
  let matches = 0;
  wordsA.forEach(w => { if (wordsB.includes(w)) matches++; });
  return wordsA.length > 0 ? matches / wordsA.length : 0;
}

// === カスタムフレーズ画面 ===
function renderCustomList() {
  const list = $('custom-list');
  const empty = $('custom-empty');

  if (state.customPhrases.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');
  list.innerHTML = state.customPhrases.map((p, i) => `
    <div class="custom-item">
      <div class="custom-item-text">
        <div class="custom-item-ja">${escapeHtml(p.ja)}</div>
        <div class="custom-item-en">${escapeHtml(p.en)}</div>
      </div>
      <button class="btn-delete-phrase" data-index="${i}" aria-label="削除">✕</button>
    </div>
  `).join('');

  list.querySelectorAll('.btn-delete-phrase').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      state.customPhrases.splice(idx, 1);
      saveCustomPhrases();
      renderCustomList();
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// === イベントリスナー ===
function setupEventListeners() {
  // 戻るボタン
  $('btn-back').addEventListener('click', () => {
    stopListening();
    window.speechSynthesis.cancel();
    showScreen('home-screen');
    renderHome();
  });

  $('btn-back-custom').addEventListener('click', () => {
    showScreen('home-screen');
    renderHome();
  });

  // カスタム管理
  $('btn-manage-custom').addEventListener('click', () => {
    showScreen('custom-screen');
    renderCustomList();
  });

  // 聞くボタン
  $('btn-listen').addEventListener('click', () => {
    const phrase = state.currentCategory.phrases[state.currentIndex];
    speakEnglish(phrase.en);
  });

  // 話すボタン
  $('btn-speak').addEventListener('click', startListening);

  // 認識キャンセル
  $('btn-stop-listening').addEventListener('click', stopListening);

  // ヒント表示
  $('btn-show-hint').addEventListener('click', () => {
    const hint = $('phrase-hint');
    const btn = $('btn-show-hint');
    hint.classList.toggle('hidden');
    btn.classList.toggle('active');
  });

  // 前へ/次へ
  $('btn-prev').addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderPhrase();
    }
  });

  $('btn-next').addEventListener('click', () => {
    const total = state.currentCategory.phrases.length;
    if (state.currentIndex < total - 1) {
      state.currentIndex++;
      renderPhrase();
    } else {
      // 最後まで到達
      alert('🎉 このカテゴリのフレーズを全部練習しました！');
    }
  });

  // カスタムフレーズ追加
  $('custom-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const ja = $('input-ja').value.trim();
    const en = $('input-en').value.trim();
    const hint = $('input-hint').value.trim();
    if (!ja || !en) return;

    state.customPhrases.push({ ja, en, hint: hint || '' });
    saveCustomPhrases();
    $('custom-form').reset();
    renderCustomList();
  });

  // 音声リスト読み込み（Chrome/Safari対応）
  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = () => loadVoices();
    loadVoices();
  }
}

// === アプリ起動 ===
document.addEventListener('DOMContentLoaded', init);
