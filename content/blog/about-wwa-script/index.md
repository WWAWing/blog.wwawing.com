---
title: WWA Script のご紹介
date: "2024-01-31T00:00:00+09:00"
description: "WWA Wing Team です。近頃正式リリースを目指している WWA Script についてご紹介します。"
category: "お知らせ"
---

WWA Wing Team です。近頃正式リリースを目指している WWA Script についてご紹介します。
WWA Wing Team のヒラリラーさんが執筆した記事「新機能・WWAscriptの紹介と今後について」も併せてご覧ください。

- [新機能・WWAscriptの紹介と今後について](https://qiita.com/hirarira/items/60844620eeb8d011951f)

## WWA Script について

WWA では Java 版時代ではマクロ文、 WWA Wing になってからはユーザー変数など、制作の幅を広げる機能を次第に追加しました。

WWA Script は、マクロ文やユーザー変数などに代わる新しい機能です。基本はプログラミング言語の JavaScript をベースとし、 WWA 内部で使用できる関数を活用してプログラムを組むことができます。わかりやすい例で言うと、 RPG ツクールの RGSS に該当します。

## WWA Script を駆使した作品たち

WWA Script はプログラミングに近い書き方をするため、プログラミングを知らない人にとっては難しいと思います。まずは WWA Script を使用して制作した WWA ゲームを見てみましょう。

（それぞれ PLiCy のプレイページに移動します）

（作品募集中！）

特に、 WWA Contest 2023 では WWA Script を活用して制作した作品が数多くエントリーされています。

- [WWA Contest 2023 (WWA FanSquare のサイトに移動します)](https://www.wwafansq.com/contest/2023)

### 書き方以外に何ができるようになるのか

- イベントを定義することができます。例えば Quick Save 実行時や移動時などに任意の処理を実行させることができます。特定のキーへの入力に任意の処理を実行させることで、タイピングゲームなんか作ることもできます。
- WWA Script を外部ファイルで記載することができます。より複雑な処理を WWA のメッセージ欄に頼らずに、任意のテキストエディターで書くことができます。

## WWA Script を使用してみよう

まずは WWA Script をその場で試してみましょう。

- [Standard Map (WWA Script 搭載版)](https://wwawing.com/unstable/wwamap)

ゲーム画面下にあるテキストから WWA Script を入力、実行することができます。

### サンプル一覧

（TODO 記載する）

## WWA Script で WWA ゲームを制作してみよう

現在 WWA Script が使用できる WWA Wing は **不安定版** として提供しています。 WWA Wing のページより、「WWA Script 搭載バージョン」から WWA Script が使用できる WWA Wing をダウンロードすることができます。基本はその中の最新バージョンの完全版を入手しましょう（すでに WWA Wing をお手持ちの PC に入っている方でも完全版のダウンロードをお勧めします）。

（画像: WWA Wing のダウンロードページから最新の不安定版のダウンロードボタンに丸印を付ける図）

新しくマップデータを作成したり、既存のマップデータを編集したりしましょう。パーツに `<script>` を記載し、その下に WWA Script を書き込むことで、そのパーツを実行すると書き込んだ WWA Script で動き出します。

```
<script>
MSG("テストですよ！");
```

（画像: WWA マップ作成ツールのパーツ編集画面で \<script\> が含まれたメッセージの図）

WWA Script の解説マップは WWA Wing の完全版の中には含まれていません。後述のマニュアルなどを参考にマップに組み込んでみてください。

### 外部スクリプトファイルについて

前述の通り、 WWA Script を外部ファイルで記載することができます。まずは WWA Wing の mapdata フォルダーから script フォルダーを作成しましょう。

その中にテキストファイル script_file_list.json を作成し、テキストエディターで下記の通りに記載します。 script_file_list.json は固定です。 data-wwa 属性で変更することはできません。

```
[
  "./script/index.js",
]
```

`"./script/index.js"` は WWA Script が実行できるスクリプトファイルです（ファイルの場所の基準は WWA Wing を実行しているフォルダーとします）。同じ script フォルダーにテキストファイル index.js を作成します。あとはテキストエディターでこのファイルに WWA Script を書き込むだけです。

```
function moveRand() {
  JUMPGATE(RAND(100), RAND(100));
  MSG("ジャンプしました。")
}
```

外部スクリプトファイルを作成した状態のファイル構造は下記の通りです（一部関係無いファイルは省略しています）。

```
wwawing
|- mapdata
|  |- audio
|  |  |- *.mp3
|  |- script <- NEW!!!
|  |  |- index.js
|  |  |- script-file-list.json
|  |- making.gif
|  |- style.css
|  |- wwa.css
|  |- wwa.js
|  |- wwa.js
|  |- wwamap.dat
|  |- wwamap.html
|  |- wwamap-vars.json
|  |- wwa-server.exe
|- WinWwamk.exe  
```

WWA ゲームでは定義した関数名を記載することで、その関数の中身を呼び出すことができます。

```
<script>
moveRand();
```

（画像: WWA マップ作成ツールのパーツ編集画面で moveRand 関数の実行が含まれたメッセージの図）

## リファレンスについて

Notion のマニュアルをご確認ください。

- [開発中機能 (WWA Script)](https://wwawing.notion.site/WWA-Script-c0b8474fda96446f8852d36d2f411b46)

## WWA Script はまだ不安定版です

先ほどお伝えしたように、 WWA Script はまだ不安定版です。不具合がいくつか見つかるかもしれません。今後のアップデートで仕様や挙動が変わる可能性もあるかもしれません。そうした点を承知の上ご利用ください。

現在、この不安定版から安定板になるように改良を進めています。
