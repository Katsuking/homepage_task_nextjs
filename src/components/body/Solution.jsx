import React from 'react'
import Image from 'next/image'
import { FcManager } from 'react-icons/fc'
import { FaLock } from 'react-icons/fa'
import { IoIosLock } from 'react-icons/io'
import { SiMicrosoftteams } from 'react-icons/si'

import { BsMicrosoftTeams } from 'react-icons/bs'

const Solution = () => {
  return (
    <div>
      <h1 className=" text-5xl text-center p-20">
        これらの問題を
        <br />
        <br />
        全て解決致します
      </h1>
      <div className="hero lg:flex-row min-h-screen bg-base-200 ">
        <div>
          <div className="pr-20 hero-content flex-col lg:flex-row items-center">
            <div className="block">
              <FcManager size={500} />
            </div>
            <div>
              <h1 className="text-3xl font-bold items-start">
                Q:IT専任の管理者・担当者がいない
                <br />
                A:ITのプロフェッショナルに全てお任せください
              </h1>
              <p1 className="py-6 text-center text-[20px] ">
                長年培った経験と技術で一から十まで
                <br />
                全てサポートさせていただきますので特別な知識等は必要ありません
              </p1>
            </div>
          </div>

          <div className="pl-20 hero-content flex-col  lg:flex-row-reverse">
            <IoIosLock size={550} />

            <div>
              <h2 className="text-3xl font-bold items-start">
                Q:セキュリティ面で不安がある
                <br />
                A:ご安心ください全てお守りします
              </h2>
              <p2 className="py-6 text-center text-[20px] keep-all">
                今やDX（デジタルトランスフォーメーション）が進む時代
                <br />
                盤石なセキュリティは業務を進める上で必須です
                <br />
                Micerosoftのセキュリティはサーバーやアプリ等ありとあらゆる
                <br />
                データを安全に守ります
              </p2>
            </div>
          </div>
          <div className="pr-20 hero-content flex-col lg:flex-row items-center">
            <SiMicrosoftteams size={400} />
            <div>
              <h2 className="text-3xl font-bold items-start">
                Q:もっと組織力を強化したい
                <br />
                A:Microsoft Teamsは如何でしょうか
              </h2>
              <p2 className="py-6 text-center text-[20px] keep-all">
                Microsoft
                Teamsであればビデオ会議、資料の共有業務遂行に必要な全てを
                <br />
                一つのツールで管理できます <br />
                シンプルで速くスマートなMicrosoftTeamsを是非ご活用ください
              </p2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
