import React from 'react'
import Image from 'next/image'
import { FcManager } from 'react-icons/fc'

const Solution = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div>
        <div className="hero-content flex-col lg:flex-row items-center">
          <FcManager size={500} />
          <div>
            <h1 className="text-5xl font-bold items-start">
              一から十まで全てさせていただきます！
            </h1>
            <p1 className="py-6 text-center keep-all">
              ライセンス購入からアプリケーション導入までトータル対応なので、
              お客様の作業を大幅に削減することができます
            </p1>
          </div>
        </div>
        <div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src="/images/Rectangle@2x.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="cloud"
              width={500}
              height={500}
            />
            <div>
              <h2 className="text-[43px] font-bold ">
                ITのプロフェッショナルが常にサポート BCP対策も万全!
              </h2>
              <p2 className="py-6">任せろ</p2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
