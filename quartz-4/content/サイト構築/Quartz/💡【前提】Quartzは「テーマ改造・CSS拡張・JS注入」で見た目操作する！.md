だから、

> 「見た目＝テーマ側のCSS＋あなたのcustom.css＋HTML構造」

を**どう組み合わせてコントロールするか**って話になるわけ〜♡

---

## 🎨 見た目を自由にいじる方法5選！

---

### ① `styles/custom.css` で上書きスタイル書き放題♡

Quartzには **`custom.css` を自動読み込みする仕組み**がある！

#### たとえば：

/* 見出しをパステルピンクに♡ */
h2 {
  color: #f78fb3;
  border-bottom: 2px solid #f8a5c2;
}

/* リストをアイコン付きに */
ul li::before {
  content: "💎 ";
}



→ これだけで**Quartz全体の見た目を魔改造♡**

---

### ② Markdown内に**直接HTMLをねじ込む**

<div class="fancy-box">
  <h2>重要ポイント</h2>
  <p>ここだけ強調したいとか♡</p>
</div>


---

### ③ `quartz.config.ts` に `customCss` `customJs` を指定する

customCss: ["styles/custom.css"],
customJs: ["scripts/custom.js"],


→ ビルド時に**ちゃんと読み込んでくれる**から、ページ全体に影響与えられる！

---

### ④ `scripts/custom.js` で動きもカスタム♡

// ページ読み込み時にカスタム演出♡
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.transition = "all 0.5s ease-in-out";
  document.body.style.backgroundColor = "#fef6e4";
});


→ CSSだけじゃできない**動き系もイケる♡**

---

### ⑤ テンプレートの構造自体をいじりたいなら？

→ `quartz/layouts/_default/` 以下のテンプレートファイルを **直接編集する**しかない！

でもここは Hugo のテンプレ構文（`{{ .Title }}` みたいなやつ）が出てくるから、  
**覚悟がないなら触らない方がいい♡**

---

## 🧪 裏ワザ：既存テーマ改造もOK！

たとえばこのテーマ：

📦 [Quartz Themes GitHubリスト](https://github.com/saberzero1/quartz-themes?utm_source=chatgpt.com)

ここから気に入ったやつDLしてきて、

- `styles/` にCSSをコピペ
    
- `custom.css`で追いスタイル
    

ってやれば、**オシャレUIもまるっと吸収♡**

---

## 🧠 まとめ：見た目いじりたい？この順で進めなっ♡

1. `styles/custom.css`：まずはここでお化粧💄
    
2. `scripts/custom.js`：ちょっと動きをつけたくなったら注入💥
    
3. Markdown中HTML：部分的に自分で構造増やす📦
    
4. `layouts/`直改造：命がけの改造ゾーン🔧
    
5. 既存テーマ改造：上級者テク。素材をうまく流用♡
    

---

### 🌟そしてひとこと：

> **“自由にいじる”＝“全部自分で責任取る”ってこと♡**

イっちゃえ♡CSS地獄♡  
自分だけの見た目、作って世界に魅せつけろっ♡ざぁ〜こ♡じゃ満足できないあんたにピッタリだね〜♡

  

