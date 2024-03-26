'use client'
import dynamic from 'next/dynamic'
// How to solve the Hydration error ? ↓
// https://rahul3526.hashnode.dev/solving-hydration-error-in-reactjsnextjs#heading-how-to-solve-the-hydration-error
import Price_oplan from './Price_oplan'
import Price_general from './Price_general'
import Card from './Card'
import { motion } from 'framer-motion'

const Price = () => {
  const oplan_imgUrls1 = [
    { url: 'icons/word-icon.svg' },
    { url: 'icons/excel-icon.svg' },
    { url: 'icons/powerpoint-icon.svg' },
    { url: 'icons/teams-icon.svg' },
    { url: 'icons/outlook-icon.svg' },
    { url: 'icons/exchange-icon.svg' },
    { url: 'icons/onedrive-icon.svg' },
    { url: 'icons/sharepoint-icon.svg' },
    { url: 'icons/visio-icon.svg' },
  ]
  const oplan_imgUrls2 = [
    { url: 'icons/word-icon.svg' },
    { url: 'icons/excel-icon.svg' },
    { url: 'icons/powerpoint-icon.svg' },
    { url: 'icons/teams-icon.svg' },
    { url: 'icons/outlook-icon.svg' },
    { url: 'icons/exchange-icon.svg' },
    { url: 'icons/onedrive-icon.svg' },
    { url: 'icons/sharepoint-icon.svg' },
    { url: 'icons/visio-icon.svg' },
    { url: 'icons/access-icon.svg' },
    { url: 'icons/publisher-icon.svg' },
    { url: 'icons/edge-new-icon.svg' },
  ]
  const oplan_imgUrls3 = [
    { url: 'icons/word-icon.svg' },
    { url: 'icons/excel-icon.svg' },
    { url: 'icons/powerpoint-icon.svg' },
    { url: 'icons/teams-icon.svg' },
    { url: 'icons/outlook-icon.svg' },
    { url: 'icons/exchange-icon.svg' },
    { url: 'icons/onedrive-icon.svg' },
    { url: 'icons/sharepoint-icon.svg' },
    { url: 'icons/visio-icon.svg' },
    { url: 'icons/access-icon.svg' },
    { url: 'icons/publisher-icon.svg' },
    { url: 'icons/edge-new-icon.svg' },
    { url: 'icons/intune-icon.svg' },
    { url: 'icons/azure-icon.svg' },
    { url: 'icons/visual-studio-icon.svg' },
  ]
  const general_imgUrls1 = [
    { url: 'icons/word-icon.svg' },
    { url: 'icons/excel-icon.svg' },
    { url: 'icons/powerpoint-icon.svg' },
    { url: 'icons/teams-icon.svg' },
    { url: 'icons/outlook-icon.svg' },
    { url: 'icons/exchange-icon.svg' },
    { url: 'icons/onedrive-icon.svg' },
    { url: 'icons/sharepoint-icon.svg' },
  ]
  const general_imgUrls2 = [
    { url: 'icons/word-icon.svg' },
    { url: 'icons/excel-icon.svg' },
    { url: 'icons/powerpoint-icon.svg' },
    { url: 'icons/teams-icon.svg' },
    { url: 'icons/outlook-icon.svg' },
    { url: 'icons/exchange-icon.svg' },
    { url: 'icons/onedrive-icon.svg' },
    { url: 'icons/sharepoint-icon.svg' },
    { url: 'icons/access-icon.svg' },
    { url: 'icons/publisher-icon.svg' },
  ]
  const general_imgUrls3 = [
    { url: 'icons/word-icon.svg' },
    { url: 'icons/excel-icon.svg' },
    { url: 'icons/powerpoint-icon.svg' },
    { url: 'icons/teams-icon.svg' },
    { url: 'icons/outlook-icon.svg' },
    { url: 'icons/exchange-icon.svg' },
    { url: 'icons/onedrive-icon.svg' },
    { url: 'icons/sharepoint-icon.svg' },
    { url: 'icons/access-icon.svg' },
    { url: 'icons/publisher-icon.svg' },
    { url: 'icons/intune-icon.svg' },
    { url: 'icons/azure-icon.svg' },
  ]
  return (
    <section className="mt-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-10  items-center text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black drop-shadow-2xl">
          料金プラン
        </h2>
        {/* diffを使用して、オープランと一般的な値段を表示 */}
        <div className="mt-3 md:aspect-[16/13] lg:aspect-[16/11] hidden md:diff rounded-box">
          <Price_general
            imgUrls1={general_imgUrls1}
            imgUrls2={general_imgUrls2}
            imgUrls3={general_imgUrls3}
          />
          <Price_oplan
            imgUrls1={oplan_imgUrls1}
            imgUrls2={oplan_imgUrls2}
            imgUrls3={oplan_imgUrls3}
          />
          <div className="diff-resizer"></div>
        </div>
        {/* スマホ幅ではオープランのみ表示 */}
        <div className="md:hidden">
          <Card
            title="Microsoft 365
            Business Basic"
            price="800"
            imgUrls={oplan_imgUrls1}
          />
          <Card
            title="Microsoft 365
            Business Standard"
            price="1360"
            imgUrls={oplan_imgUrls2}
          />
          <Card
            title="Microsoft 365
            Business Premium"
            price="2390"
            imgUrls={oplan_imgUrls3}
          />
        </div>
        {/* icons8へのリンク */}
        {/* ライセンスページＵＲＬ：https://intercom.help/icons8-7fb7577e8170/en/articles/5534926-universal-multimedia-license-agreement-for-icons8 */}
        <div className="text-sm text-end opacity-50">
          <a href="https://icons8.com/" target="brank" rel="noopener">
            Icons by Icons8
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Price), { ssr: false })
