import { Card, CardHeader, CardTitle } from "@school-potato/ui"
import { H1, Small } from '@school-potato/ui'
import { NavbarV1 } from '../components/ui/navbar'
import SeatShufflePage from './seat-shuffle/page'

export default function Home() {
  return (
    <>
      {/* todo header component */}
      <NavbarV1 />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        {/*席替えアプリの表示*/}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center mb-12">
              <H1 className="text-4xl font-bold text-gray-900 mb-4">School Potato</H1>
              <Small className="text-xl text-gray-600">
                monorepoで管理されたNext.jsアプリケーション
              </Small>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card className="max-w-4xl mx-auto">
          <SeatShufflePage />
        </Card>
      </div>
    </>
  );
}
