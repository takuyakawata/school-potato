import { Card, CardHeader, CardTitle } from "@school-potato/ui"
import { H1, Small } from '@school-potato/ui'

export default function Home() {
  return (
    //todo  header component
    <CardHeader className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <Card className="max-w-4xl mx-auto">
        <CardTitle className="text-center mb-12">
          <H1 className="text-4xl font-bold text-gray-900 mb-4">
            School Potato
          </H1>
          <Small className="text-xl text-gray-600">
            monorepoで管理されたNext.jsアプリケーション
          </Small>
        </CardTitle>
      </Card>
    </CardHeader>
  );
}
