'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Merit = () => {
  return (
    <div>
      {/* <div className="flex flex-col md:flex-row mx-10 mt-3">
        <div className="w-full">
          <div>
            <h1 className="text-center text-[20px]">オープランの場合</h1>
            <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center">
              <p>
                導入だけでなく運用面もしっかり支援
                <br />
                トータルサービスなので、導入後もしっかりと
                アフターケアをします。
                運用のご支援はもちろん、状況に合わせて運用
                最適案を提案し業務支援に貢献します。
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="mt-1 md:mt-0 w-full">
          <div>
            <h2 className="text-center text-[20px]">他社の場合</h2>
            <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center">
              <p>高い</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="carousel rounded-box w-full space-x-3 flex flex-col items-stretch md:flex-row mt-10">
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/SEP_355215221321_TP_V.png')]">
          <div className="m-5 flex items-center">
            <motion.div
              className="bg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex flex-col">
                <h1 className="title">ご要望に応じたきめ細やかなサービス</h1>
                <p className="nakami">
                  オープランでは、Office365の初期設定から、ユーザーアカウントの作成、データの移行、セキュリティ設定の構築など、
                  お客様のご要望に応じた具体的な導入ステップを含む計画を策定します。
                  <br />
                  お客様とコミュニケーションを取ることで円滑な業務が行えるようにサポートします。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/PK4131311PAR58130_TP_V.png')]">
          <div className="m-5 flex items-center">
            <motion.div
              className="bg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex flex-col">
                <h1 className="title">現役のエンジニアがサポートします</h1>
                <p className="nakami ">
                  オープランのエンジニアは、高度な専門知識と豊富な経験を持ち、お客様のニーズに合わせてカスタマイズされたソリューションを提供します。
                  <br />
                  お客様にとって最適な技術を選択し、導入することで、システムの効率性とセキュリティを向上させます。革新的なテクノロジーを活用してお客様のビジネスを支援します。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/merit3.jpg')]">
          <div className="m-5 flex items-center">
            <motion.div
              className="bg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex flex-col">
                <h1 className="title">トラブル時の迅速な対応</h1>
                <p className="nakami ">
                  トラブルが発生した際には、迅速に情報を収集し、問題の原因や影響範囲を分析します。
                  <br />
                  電話、メール、チャット、SNSなど複数のチャネルを活用し、お客様からの報告を迅速に受け付け、対応します。
                  <br />
                  データやレポートを活用して、トラブルの再発を防ぐための対策を検討します。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/merit2.jpg')]">
          <div className="m-5 flex items-center">
            <motion.div
              className="bg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex flex-col">
                <h1 className="title">組織に応じたTeamsの設計</h1>
                <p className="nakami ">
                  オープランの専門家チームは、組織のニーズや業務フローに合わせてTeamsの設計をカスタマイズし、最適な環境を提供します。
                  <br />
                  ユーザー向けのトレーニングセッションを提供し、Teamsの効果的な利用方法を指導します。また、トラブルシューティングやサポートも行います。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/merit1.jpg')]">
          <div className="m-5 flex items-center">
            <motion.div
              className="bg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex flex-col">
                <h1 className="title">実務で培った経験と知識</h1>
                <p className="nakami ">
                  長年にわたる実務経験と深い専門知識を活かし、お客様に最高のサポートを提供しています。
                  <br />
                  Office365のアップデートや新機能の導入に対応し、継続的なトラブルシューティングの改善に取り組んでいます。
                  <br />
                  常に最新のトレンドやテクノロジーを追跡し、価値あるソリューションを提供します。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/merit4.jpg')]">
          <div className="m-5 flex items-center">
            <motion.div
              className="bg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex flex-col">
                <h1 className="title">充実なアフターケア</h1>
                <p className="nakami ">
                  トータルサービスなので、導入後もしっかりとアフターケアをします。
                  <br />
                  システムのパフォーマンスやセキュリティの状態を定期的に監査し、必要に応じて最適化を行います。
                  <br />
                  運用のご支援はもちろん、お客様の課題やニーズに合わせて、最適な解決策を提供します。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Merit
