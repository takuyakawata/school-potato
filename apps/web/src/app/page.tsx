import { Button } from "@school-potato/ui"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@school-potato/ui"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            School Potato
          </h1>
          <p className="text-xl text-gray-600">
            monorepoで管理されたNext.jsアプリケーション
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>UI コンポーネント</CardTitle>
              <CardDescription>
                shadcn/uiベースの共有コンポーネントライブラリ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                @school-potato/uiパッケージで管理されています
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ユーティリティ</CardTitle>
              <CardDescription>
                共通のユーティリティ関数
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                @school-potato/utilsパッケージで管理されています
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>型定義</CardTitle>
              <CardDescription>
                プロジェクト全体のTypeScript型定義
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                @school-potato/typesパッケージで管理されています
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="mr-4">
            始める
          </Button>
          <Button variant="outline" size="lg">
            詳細を見る
          </Button>
        </div>
      </div>
    </div>
  );
}
