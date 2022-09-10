---
title: 【仮想パッド】 WWA Wing v3.10.0 をリリース！
date: "2022-09-11T00:00:00+09:00"
description: "WWA Wing Team の Aokashi です。本日から WWA Wing v3.10.0 をリリースしました。本リリースではモバイルデバイスで仮想パッドが使用できるようになります。"
category: "リリース"
image: "wwawing_title_screen_with_virtualpad.png"
---

WWA Wing Team の Aokashi です。本日から WWA Wing v3.10.0 をリリースしました。

本リリースではモバイル端末で仮想パッドが使用できるようになります。

## 仮想パッドを有効にするには？

### PLiCy でアップロードする場合

WWA Wing 対応ゲームが投稿できる PLiCy では、最初から仮想パッドが有効化されています。特別な設定を行うことなく、仮想パッドを使用することができます。

（操作性は後述の自分のホームページにアップロードした場合のものと少し異なる場合があります。）

### 自分のホームページにアップロードする場合

レイアウト崩れを考慮して何も設定していない場合は仮想パッドは有効になりません。下記の手順に従って有効にしていただく必要があります。

お手持ちのゲームの HTML ファイルに、下記を参考に追記してください。

1. `<div class="wwa-size-box">` のある行を探します。特別に改行したりしてなければ14行目辺りにあると思います。
2. 行の末尾にある `></div>` を探し、その直前に data-wwa 属性の `data-wwa-virtualpad-enable="true" data-wwa-virtualpad-viewport-fit-enable="true"` を追加します。
    - 各々の data-wwa 属性については後述の「data-wwa 属性について」をご参照ください。状況に応じて外す必要があるかもしれません。
3. HTML ファイルを保存します。

```html
  <body>
    <div id="wrapper">
      <div class="wwa-size-box" id="wwa-wrapper" data-wwa-mapdata="wwamap.dat" data-wwa-urlgate-enable="true" data-wwa-title-img="cover.gif" data-wwa-autosave="200" data-wwa-virtualpad-enable="true" data-wwa-virtualpad-viewport-fit-enable="true"></div>
    </div>
    <footer id="copyright">
      <p>Internet RPG &quot;<a class="wwa-copyright" href="https://wwajp.com/">World Wide Adventure</a>&quot; 1996-2016 &copy; NAO</p>
      <p> &quot;<a class="wwa-copyright" href="https://wwawing.com/">WWA Wing</a>&quot; 2013-2022 &copy; WWA Wing Team</p>
    </footer>
  </body>
```

## data-wwa 属性について

### data-wwa-virtualpad-enable

仮想パッドを有効にします。

### data-wwa-virtualpad-viewport-fit-enable

端末の向きに応じて仮想パッドのサイズも切り替わるようにします。

WWA Wing 付属の HTML ファイルを利用していない場合やビューポート設定を独自にしている場合は `data-wwa-virtualpad-viewport-fit-enable` は省略してください。

逆に `data-wwa-virtualpad-enable` を省略してこの属性を使用することもできます。モバイル端末の大きな画面で WWA 画面を操作したいが、仮想パッドが不要な場合にご利用ください。

## 操作方法

<!-- TODO 操作しているスクリーンショットを作る -->

左下が移動ボタンです。押しっぱなしの状態で指を動かすと動かした先の移動先に反応します。

右下が操作ボタンです。各ボタンは下記の通りに対応しています。

- Y: 決定ボタン。フィールド上では戦闘結果予測を開き、二者択一ではYesを選択します。
- N: キャンセルボタン。フィールド上では右の操作パネルの操作モードに移行し、二者択一ではNoを選択します。
- I: ゲームスピードを1段階落とします。
- Y: ゲームスピードを1段階速くします。

また、端末の向きに応じて仮想パッドのサイズも切り替わります。WWA Wing Team 的には横持ちがおすすめです。ただし、前述で `data-wwa-virtualpad-viewport-fit-enable="true"` を省略した場合は有効になりません。

仮想パッドの表示は切り替えることが可能です。「仮想パッド切り替え」ボタンで非表示にしたり、表示したりすることができます。PC でも仮想パッドを表示することはできますが、クリック操作には対応していません。

## 操作性について

タッチパネルの操作は押した際の反応が乏しく、移動操作においてはコントロールできない場合もあります。1段階移動速度を落とすと良いと思います。

もちろん、崩れる床での操作については難しいでしょう。複雑なコースを高速で突破できたなら達人者です。

以上が仮想パッドの解説です。WWA Wing のリリースから7年近く。Java アプレットの実行環境から HTML5 の実行環境に移行したことで、スマートフォンでも遊べるという利点が得られました。ただし、操作性については若干の改善はありましたが最適化には至っていませんでした。リリースにおいては長らくお待たせしたかと思います。

今後も WWA Wing Team をよろしくお願いします。
