# wak-tutorial-2015-06-10
World Tour 2015で使用した4D Mobileの例題です。

Notes
---
Wakanda Studio起動直後の認証画面には，directoryで設定されたユーザー名```admin```とパスワード```1234```を入力してください。この時点では```ds```オブジェクトが未定義であるため，```required.js```は```return false```となります。これは，WakandaネイティブのDirectory認証をする，という意味になります。以降，認証はカスタムモードになるので，4Dで設定されたユーザー名とパスワード（```miyako, abcd```または```yamada, 1234```）を入力してください。カスタムモードの認証に拒否した場合，エラーオブジェクトが返されます。```return false```とは違い，WakandaネイティブのDirectory認証で再試行されることにはなりません。

