import React from 'react'
import Image from 'next/image'
import { FaMobileAlt } from 'react-icons/fa'
import { FaCloud } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'
import { MdOutlineSecurity } from 'react-icons/md'

const Solution = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/images/Rectangle@2x.png"
          alt="cloud"
          width={500}
          height={1000}
        />
        <div>
          <h1 className="text-5xl font-bold">問題はありますか？</h1>
          <p className="py-6">ITのプロが全てを解決いたします</p>
        </div>
      </div>
    </div>
  )
}

export default Solution
