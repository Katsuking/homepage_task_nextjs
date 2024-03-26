'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Carousel, Typography, Button } from '@material-tailwind/react'

const Solution = () => {
  return (
    <div>
      <h1 className=" text-center text-[50px] my-10 mx-3">
        これらの問題を 全て解決致します
      </h1>
      <div className="grid grid-row-1 sm:grid-row-2 md:grid-row-3 lg:grid-row-4 gap-4 my-5 mx-3 items-center">
        <div className=" hero-content lg:flex-row flex-col items-center">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src="/images/Rectangle@2x.png"
              alt="pc"
              width={300}
              height={300}
              className=""
            />
          </motion.button>
          <div>
            <h1 className="text-3xl font-bold items-start">
              Q:IT専任の管理者・担当者がいない
              <br />
              A:ITのプロフェッショナルに全てお任せください
            </h1>
            <p1 className="py-6 text-center text-[20px] ">
              長年培った経験と技術で一から十まで
              <br />
              全てサポートさせていただきます
            </p1>
          </div>
        </div>

        <div className=" hero-content flex-col  lg:flex-row-reverse items-center">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src="/images/n__bt@2x.png"
              alt="lock"
              width={300}
              height={300}
              className=""
            />
          </motion.button>

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
        <div className=" hero-content flex-col lg:flex-row items-center">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src="/images/Rectangle_dd@2x.png"
              alt="pc"
              width={300}
              height={300}
              className="items-center"
            />
          </motion.button>
          <div>
            <h2 className="text-3xl font-bold items-start">
              Q:もっと組織力を強化したい
              <br />
              A:Microsoft Teamsは如何でしょうか
            </h2>
            <p2 className="py-6 text-center text-[20px] keep-all">
              Microsoft
              Teamsであればビデオ会議、資料の共有業務遂行に必要な全てを、
              <br />
              一つのツールで管理できます <br />
              シンプルで速くスマートなMicrosoftTeamsを是非ご活用ください
            </p2>
          </div>
        </div>
        <div className=" hero-content flex-col  lg:flex-row-reverse items-center">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {' '}
            <Image
              src="/images/Rectangle_dq@2x.png"
              alt="lock"
              width={300}
              height={300}
            />
          </motion.button>
          <div>
            <h2 className="text-3xl font-bold items-start">
              Q:BCP対策が不安
              <br />
              A:事業継続の為専門家がサポート致します
            </h2>
            <p2 className="py-6 text-center text-[20px] keep-all">
              テロや災害、電波障害ありとあらゆる危機的状況を想定し専門知識を持つ
              <br />
              プロフェッショナルが対策を立てさせていただきますので
              <br />
              特別な知識は必要ありません
            </p2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
