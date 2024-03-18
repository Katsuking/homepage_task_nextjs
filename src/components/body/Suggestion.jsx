// sfc
import Image from 'next/image'
import { FaMobileAlt } from 'react-icons/fa'
import { FaCloud } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'
import { MdOutlineSecurity } from 'react-icons/md'

const SuggestionPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="flex flex-col items-center">
        <div className="flex p-4">
          <div className="bg-yellow-300 border-black border-solid border-2 rounded-md">
            <FaCloud size={80} width={40} className="p-1" />
          </div>
          <FaMobileAlt size={80} width={40} />
          <FaComputer size={80} width={40} />
        </div>
        <div className="flex flex-wrap px-3">
          <p>
            いろいろやりたいことはあるのに
            <span className="text-red-500">IT専任の管理者・担当者がいない</span>
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
      <div>c</div>
    </div>
  )
}

export default SuggestionPage
