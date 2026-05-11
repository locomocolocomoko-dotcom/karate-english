/* 空手道場 英会話トレーナー - メインアプリケーション */

// === フレーズデータ ===
const CATEGORIES = [
  {
    id: 'greeting', name: '出迎え・挨拶', icon: '🤝',
    description: '最初の挨拶と自己紹介',
    phrases: [
      { ja: 'ようこそ！', en: 'Welcome!', hint: 'ウェルカム！', audio: 0 },
      { ja: 'はじめまして。', en: 'Nice to meet you.', hint: 'ナイス トゥ ミート ユー', audio: 1 },
      { ja: '私が先生です。', en: "I'm the instructor.", hint: 'アイム ジ インストラクター', audio: 2 },
      { ja: '来てくれてありがとう。', en: 'Thank you for coming.', hint: 'サンキュー フォー カミング', audio: 3 },
      { ja: 'お名前は？', en: "What's your name?", hint: 'ワッツ ユア ネーム？', audio: 4 },
      { ja: 'どこから来たの？', en: 'Where are you from?', hint: 'ウェア アー ユー フロム？', audio: 5 },
      { ja: '日本は初めてですか？', en: 'Is this your first time in Japan?', hint: 'イズ ディス ユア ファースト タイム イン ジャパン？', audio: 6 },
      { ja: 'いつ日本に来たの？', en: 'When did you arrive in Japan?', hint: 'ウェン ディド ユー アライヴ イン ジャパン？', audio: 7 },
      { ja: 'どのくらい滞在しますか？', en: 'How long are you staying?', hint: 'ハウ ロング アー ユー ステイイング？', audio: 8 },
    ]
  },
  {
    id: 'smalltalk', name: '雑談', icon: '💬',
    description: '軽い会話・質問',
    phrases: [
      { ja: 'お仕事は何をされていますか？', en: 'What do you do for a living?', hint: 'ワット ドゥ ユー ドゥ フォー ア リヴィング？', audio: 9 },
      { ja: '空手はどのくらいやってますか？', en: 'How long have you been practicing karate?', hint: 'ハウ ロング ハヴ ユー ビーン プラクティシング カラテ？', audio: 10 },
      { ja: '何帯ですか？', en: 'What belt are you?', hint: 'ワット ベルト アー ユー？', audio: 11 },
      { ja: '何流ですか？', en: 'What style do you practice?', hint: 'ワット スタイル ドゥ ユー プラクティス？', audio: 12 },
      { ja: '先生は誰ですか？', en: 'Who is your sensei?', hint: 'フー イズ ユア センセイ？', audio: 13 },
      { ja: '日本はどうですか？', en: 'How do you like Japan?', hint: 'ハウ ドゥ ユー ライク ジャパン？', audio: 14 },
      { ja: '日本食は好きですか？', en: 'Do you like Japanese food?', hint: 'ドゥ ユー ライク ジャパニーズ フード？', audio: 15 },
      { ja: '怪我はありますか？', en: 'Do you have any injuries?', hint: 'ドゥ ユー ハヴ エニー インジュリーズ？', audio: 16 },
      { ja: '何か質問はありますか？', en: 'Do you have any questions?', hint: 'ドゥ ユー ハヴ エニー クエスチョンズ？', audio: 17 },
      { ja: '疲れてない？大丈夫？', en: 'Are you tired? Are you okay?', hint: 'アー ユー タイアード？ アー ユー オーケー？', audio: 18 },
    ]
  },
  {
    id: 'training', name: '稽古', icon: '🥋',
    description: '稽古中に使うフレーズ',
    phrases: [
      { ja: '並んでください。', en: 'Line up, please.', hint: 'ライン アップ、プリーズ', audio: 19 },
      { ja: '礼。', en: 'Bow.', hint: 'バウ', audio: 20 },
      { ja: 'はじめます。', en: "Let's begin.", hint: 'レッツ ビギン', audio: 21 },
      { ja: '用意。', en: 'Get ready.', hint: 'ゲット レディ', audio: 22 },
      { ja: 'はじめ！', en: 'Start!', hint: 'スタート！', audio: 23 },
      { ja: 'やめ！', en: 'Stop!', hint: 'ストップ！', audio: 24 },
      { ja: 'もう一回。', en: 'One more time.', hint: 'ワン モア タイム', audio: 25 },
      { ja: 'よく見てください。', en: 'Watch carefully.', hint: 'ウォッチ ケアフリー', audio: 26 },
      { ja: 'こうやって。', en: 'Like this.', hint: 'ライク ディス', audio: 27 },
      { ja: '真似してください。', en: 'Follow me.', hint: 'フォロー ミー', audio: 28 },
      { ja: 'もっと速く！', en: 'Faster!', hint: 'ファスター！', audio: 29 },
      { ja: 'もっと強く！', en: 'Stronger!', hint: 'ストロンガー！', audio: 30 },
      { ja: 'もっとゆっくり。', en: 'Slower.', hint: 'スローワー', audio: 31 },
      { ja: 'いいですよ！', en: 'Good job!', hint: 'グッド ジョブ！', audio: 32 },
      { ja: 'その調子！', en: 'Keep it up!', hint: 'キープ イット アップ！', audio: 33 },
      { ja: '二人一組になって。', en: 'Pair up.', hint: 'ペア アップ', audio: 34 },
      { ja: '相手を変えて。', en: 'Switch partners.', hint: 'スウィッチ パートナーズ', audio: 35 },
      { ja: '休憩してください。', en: 'Take a break.', hint: 'テイク ア ブレイク', audio: 36 },
      { ja: '水を飲んでください。', en: 'Drink some water.', hint: 'ドリンク サム ウォーター', audio: 37 },
      { ja: '今日はここまでです。', en: "That's all for today.", hint: 'ザッツ オール フォー トゥデイ', audio: 38 },
      { ja: 'お疲れ様でした。', en: 'Thank you for your hard work.', hint: 'サンキュー フォー ユア ハード ワーク', audio: 39 },
    ]
  },
  {
    id: 'farewell', name: '見送り', icon: '👋',
    description: '帰りの挨拶',
    phrases: [
      { ja: '今日はありがとうございました。', en: 'Thank you for today.', hint: 'サンキュー フォー トゥデイ', audio: 40 },
      { ja: '一緒に稽古できてよかったです。', en: 'It was great training with you.', hint: 'イット ワズ グレイト トレーニング ウィズ ユー', audio: 41 },
      { ja: 'またいつでも来てください。', en: 'Please come again anytime.', hint: 'プリーズ カム アゲイン エニータイム', audio: 42 },
      { ja: '気をつけて帰ってね。', en: 'Have a safe trip back.', hint: 'ハヴ ア セイフ トリップ バック', audio: 43 },
      { ja: '楽しかったですか？', en: 'Did you enjoy it?', hint: 'ディド ユー エンジョイ イット？', audio: 44 },
      { ja: '連絡先を交換しましょう。', en: "Let's exchange contact info.", hint: 'レッツ エクスチェンジ コンタクト インフォ', audio: 45 },
      { ja: '写真を撮りましょう！', en: "Let's take a photo!", hint: 'レッツ テイク ア フォト！', audio: 46 },
      { ja: 'また会えるのを楽しみにしています。', en: 'I look forward to seeing you again.', hint: 'アイ ルック フォワード トゥ シーイング ユー アゲイン', audio: 47 },
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

// === 音声再生（ローカルWAVファイル） ===
let currentAudio = null;

function speakEnglish(text) {
  const dbg = $('debug-status');
  if (dbg) {
    dbg.style.display = 'block';
    dbg.textContent = '🔍 準備中...';
  }

  // 前の再生を停止
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }

  // 現在のフレーズの音声インデックスを取得
  const phrase = state.currentCategory.phrases[state.currentIndex];
  const audioIndex = phrase.audio;

  if (audioIndex === undefined) {
    if (dbg) dbg.textContent = '⚠️ この音声ファイルは未対応です';
    return;
  }

  // WAVファイルのパス
  const filename = `audio/phrase_${String(audioIndex).padStart(3, '0')}.wav`;
  const audio = new Audio(filename);
  currentAudio = audio;

  if (dbg) dbg.textContent = `🔊 ${filename} | ${text}`;

  $('btn-listen').classList.add('playing');

  audio.onplay = () => {
    if (dbg) dbg.textContent += ' | ▶️再生中';
  };

  audio.onended = () => {
    $('btn-listen').classList.remove('playing');
    currentAudio = null;
    if (dbg) dbg.textContent += ' | ⏹️完了';
  };

  audio.onerror = (e) => {
    $('btn-listen').classList.remove('playing');
    currentAudio = null;
    if (dbg) dbg.textContent = `❌ 音声ファイル読込エラー: ${filename}`;
  };

  audio.play().catch((e) => {
    $('btn-listen').classList.remove('playing');
    currentAudio = null;
    if (dbg) dbg.textContent = `❌ 再生エラー: ${e.message}`;
  });
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
