# School Potato Monorepo

このプロジェクトは、School Potatoアプリケーションのmonorepoです。

## 構成

```
school-potato/
├── apps/
│   └── web/                 # Next.js Webアプリケーション
├── packages/
│   ├── ui/                  # 共有UIコンポーネント（shadcn/ui）
│   ├── utils/               # 共有ユーティリティ関数
│   └── types/               # 共有TypeScript型定義
├── package.json             # ルートのpackage.json（ワークスペース設定）
├── turbo.json              # Turboの設定
└── tsconfig.json           # ルートのTypeScript設定
```

## 技術スタック

- **フレームワーク**: Next.js 15
- **UI**: shadcn/ui + Radix UI
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **パッケージ管理**: npm workspaces
- **ビルドツール**: Turbo
- **ORM**: Prisma（予定）

## 開発環境のセットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. 特定のアプリケーションのみ起動:
```bash
npm run web:dev
```

## 利用可能なスクリプト

- `npm run dev` - すべてのアプリケーションを開発モードで起動
- `npm run build` - すべてのパッケージをビルド
- `npm run lint` - すべてのパッケージでlintを実行
- `npm run type-check` - すべてのパッケージで型チェックを実行
- `npm run clean` - すべてのビルド成果物を削除
- `npm run format` - コードをフォーマット

## パッケージ構成

### @school-potato/ui
shadcn/uiベースの共有UIコンポーネントライブラリ

### @school-potato/utils
共通のユーティリティ関数（cn関数など）

### @school-potato/types
プロジェクト全体で使用するTypeScript型定義

## 開発ガイドライン

- 新しいコンポーネントは`packages/ui`に追加
- 共通のロジックは`packages/utils`に追加
- 型定義は`packages/types`に追加
- 各パッケージは独立してビルド可能
- ワークスペース間の依存関係は`workspace:*`を使用