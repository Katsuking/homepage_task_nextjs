'use client'
import dynamic from 'next/dynamic'
// How to solve the Hydration error ? ↓
// https://rahul3526.hashnode.dev/solving-hydration-error-in-reactjsnextjs#heading-how-to-solve-the-hydration-error
import Price_oplan from './Price_oplan'
import Price_general from './Price_general'
import Card from './Card'
import { motion } from 'framer-motion'

const Price = () => {
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
        <div className="md:aspect-[16/11] lg:aspect-[16/9] hidden md:diff rounded-box">
          <Price_general />
          <Price_oplan />
          <div className="diff-resizer"></div>
        </div>
        {/* スマホ幅ではオープランのみ表示 */}
        <div className="md:hidden">
          <Card
            title="Microsoft 365
            Business Basic"
            price="800"
            url1="icons/excel-icon.svg"
            url2="icons/excel-icon.svg"
            url3="icons/excel-icon.svg"
            url4="icons/excel-icon.svg"
            url5="icons/excel-icon.svg"
            url6=""
            url7=""
            url8=""
            url9=""
            url10=""
            url11=""
            url12=""
          />
          <Card
            title="Microsoft 365
            Business Standard"
            price="1360"
            url1="icons/excel-icon.svg"
            url2="icons/excel-icon.svg"
            url3="icons/excel-icon.svg"
            url4="icons/excel-icon.svg"
            url5="icons/excel-icon.svg"
            url6="icons/excel-icon.svg"
            url7=""
            url8=""
            url9=""
            url10=""
            url11=""
            url12=""
          />
          <Card
            title="Microsoft 365
            Business Premium"
            price="2390"
            url1="icons/excel-icon.svg"
            url2="icons/excel-icon.svg"
            url3="icons/excel-icon.svg"
            url4="icons/excel-icon.svg"
            url5="icons/excel-icon.svg"
            url6="icons/excel-icon.svg"
            url7="icons/excel-icon.svg"
            url8="icons/excel-icon.svg"
            url9="icons/excel-icon.svg"
            url10="icons/excel-icon.svg"
            url11="icons/excel-icon.svg"
            url12="icons/excel-icon.svg"
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
