
import InstallPage from '@/components/body/Install'
import Price from '@/components/body/Price'

import SuggestionPage from '@/components/body/Suggestion'
import TopPage from '@/components/body/Top'

export default function Home() {
  return (
    <main>
      <TopPage />
      <SuggestionPage />
      <InstallPage />
      <Price />
      <div className="py-[500px]"></div>
    </main>
  )
}
