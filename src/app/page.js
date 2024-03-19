import Solution from '@/components/body/Solution'
import SuggestionPage from '@/components/body/Suggestion'
import TopPage from '@/components/body/Top'

export default function Home() {
  return (
    <main>
      <TopPage />
      <SuggestionPage />
      <Solution />
      <div className="py-[500px]"></div>
    </main>
  )
}
