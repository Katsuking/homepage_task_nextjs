import Price_oplan from './Price_oplan'
import Price_general from './Price_general'
import Card from './Card'

const Price = () => {
  return (
    <section className="mt-10">
      <div className="px-10  items-center text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black drop-shadow-2xl">
          料金プラン
        </h2>
        {/* diffを使用した表示 */}
        <div className="md:aspect-[16/11] lg:aspect-[16/9] hidden md:diff rounded-box">
          <Price_oplan />
          <Price_general />
          <div className="diff-resizer"></div>
        </div>
        {/* Cardのみの表示。他社比較との料金比較は省略 */}
        <div className="md:hidden">
          <Card
            title="Microsoft 365
            Business Basic"
            price="800"
            imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
          <Card
            title="Microsoft 365
            Business Standard"
            price="1360"
            imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
          <Card
            title="Microsoft 365
            Business Premium"
            price="2390"
            imgurl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default Price
