// sfc
import Image from 'next/image'
import { FaMobileAlt } from 'react-icons/fa'
import { FaCloud } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'
import { MdOutlineSecurity } from 'react-icons/md'

const SuggestionPage = () => {
  return (
    <div>
      <h2 className="text-center text-[30px] my-10 mx-3">
        あなたの会社でこのような課題ございませんか？
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 mx-3 items-center">
        <div className="flex flex-col items-center pl-3">
          <div className="flex p-4 space-x-2 h-auto">
            <div className="bg-blue-500 border-black border-solid border-2 rounded-md">
              <FaCloud size={80} width={40} className="p-1" />
            </div>
            <div className="bg-emerald-200 border-black border-solid border-2 rounded-md">
              <FaMobileAlt size={80} width={40} className="p-1" />
            </div>
            <div className="bg-yellow-200 border-black border-solid border-2 rounded-md">
              <FaComputer size={80} width={40} className="p-1" />
            </div>
          </div>
          <div className="flex flex-wrap px-3">
            <p className="items-center">
              いろいろやりたいことはあるのに
              <span className="text-red-500">
                IT専任の管理者・担当者がいない
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center px-3">
          <div className="flex p-4">
            <MdOutlineSecurity size={80} width={40} />
          </div>
          <div className="flex flex-wrap">
            <p>
              社外での端末使用は
              <span className="text-red-500">セキュリティ面で不安がある</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center px-3">
          <Image
            src="/images/unific615DSC6287_TP_V.png"
            alt="pc"
            width={200}
            height={150}
            className="rounded-lg"
          />
          <div className="flex flex-wrap">
            <p>
              グループウェアを使いこなせば、
              <span className="text-red-500">もっと組織力を強化できるのに</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center px-3">
          <Image
            src="/images/n__bz.png"
            width={100}
            height={150}
            alt="work_everywhere"
            className="rounded-md"
          />
          <div>
            <p>
              時間と場所を選ばず
              <span className="text-red-500">BCP対策もしっかりしたい</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuggestionPage
