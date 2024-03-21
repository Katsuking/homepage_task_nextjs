import Price_oplan from './Price_oplan'
import Price_general from './Price_general'

const Price = () => {
  return (
    <section>
      <div className="px-10  items-center text-center">
        <h2 className="text-6xl font-black">料金プラン</h2>
        {/* diff */}
        <div className="diff aspect-[9/16] md:aspect-[16/9]">
          <Price_oplan />
          <Price_general />
          <div className="diff-resizer"></div>
        </div>
      </div>
    </section>
  )
}

export default Price
