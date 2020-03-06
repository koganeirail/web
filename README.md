# 初期設定の前に
- GitHubに登録する
- gitをインストールする
- コマンド(mipsparcを自分の名前に置き換える) `git config --global user.name "mipsparc"`
- コマンド(自分のメールアドレスにする) `git config --global user.email johndoe@example.com`

# 初期設定
- Node.js と npmをインストールする
- コマンド `git clone git@github.com:koganeirail/web.git`
- コマンド `npm update`

# 編集方法
お好みのエディタで ejs ディレクトリ以下を触る。
それ以外は自動生成されるので、直接編集してはいけない。
- ejsディレクトリ以下が変換前のコード
- notminifiedディレクトリ以下が変換後のHTMLコード
- docディレクトリ以下が不要な空白や改行を除去した、最終的にブラウザで表示するHTMLコード

# ビルド(HTML書き出し)方法
- `npm run gulp ejs`


# Webページに反映方法
- `git status`
- `git add -u`
- `git commit`
- `git push`
- しばらく待つ or CloudFlareのコントロールパネルからキャッシュクリア


Created by (mipsparc@gmail.com)
