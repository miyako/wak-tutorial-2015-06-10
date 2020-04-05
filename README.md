# wak-tutorial-2015-06-10
World Tour 2015で使用した4D Mobileの例題です。

![obsolete-word-black-frame-word-obsolete-word-black-frame-d-rendering-123942590](https://user-images.githubusercontent.com/1725068/78463940-29122280-771e-11ea-8be8-a7830725403e.jpg)

**4D**

* REST API
* メソッド公開
* セッション数の上限

**Wakanda**

* サーバーサイドJavaScript
* ページ・ウィジェット・データソース
* テーマ・ロール (application.css)
* スコープ (publicOnServer)
* ディレクトリ
* ブートストラップ
* setLoginListener()
* requried.js
* 制限クエリ

Notes
---
Wakanda Studio起動直後の認証画面には，directoryで設定されたユーザー名```admin```とパスワード```1234```を入力してください。この時点では```ds```オブジェクトが未定義であるため，```required.js```は```return false```となります。これは，WakandaネイティブのDirectory認証をする，という意味になります。以降，認証はカスタムモードになるので，4Dで設定されたユーザー名とパスワード（```miyako, abcd```または```yamada, 1234```）を入力してください。カスタムモードの認証に拒否した場合，エラーオブジェクトが返されます。```return false```とは違い，WakandaネイティブのDirectory認証で再試行されることにはなりません。

