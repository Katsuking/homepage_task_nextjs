import Solution from '@/components/body/Solution'
import InstallPage from '@/components/body/Install'
import Price from '@/components/body/Price'
import SuggestionPage from '@/components/body/Suggestion'
import TopPage from '@/components/body/Top'
import Merit from '@/components/body/Merit'

export default function Home() {
  return (
    <main>
      <TopPage />
      <SuggestionPage />
      <Solution />
      <InstallPage />
      <Price />
      <Merit />
      <div className="py-[500px]"></div>
    </main>
  )
}
