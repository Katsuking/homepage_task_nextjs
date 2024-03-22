import React from 'react'
import Image from 'next/image'

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
          <div className="m-5">
            <div className="bg-gray-300 rounded-lg bg-opacity-70">
              <div className="flex flex-col">
                <h1 className="title">ご要望に応じたきめ細やかなサービス</h1>
                <p className="text-[25px] mt-2 mx-5 ">
                  ユーザーアカウントの作成、データの移行、セキュリティ設定の構築など、
                  お客様のご要望に応じた
                  具体的な導入ステップを含む計画を策定します。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/PK4131311PAR58130_TP_V.png')]">
          <div className="m-5">
            <div className="bg-gray-300 rounded-lg bg-opacity-70">
              <div className="flex flex-col">
                <h1 className="title">現役のエンジニアがサポートします</h1>
                <p className="text-[25px] mt-2 mx-5 ">
                  当社のエンジニアは高度な専門知識と豊富な経験を持ち、お客様のニーズに合わせてカスタマイズされたソリューションを提供します。
                  <br />
                  どんな課題にも柔軟に対応し、革新的なテクノロジーを活用してお客様のビジネスを支援します。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/merit3.jpg')]">
          <div className="m-5">
            <div className="bg-gray-300 rounded-lg bg-opacity-70">
              <div className="flex flex-col">
                <h1 className="title">トラブル時の迅速な対応</h1>
                <p className="text-[25px] mt-2 mx-5 ">
                  問題が解決された後も、顧客とのコミュニケーションを継続し、問題が再発しないように対策を講じます。
                  <br />
                  また、顧客からのフィードバックを収集し、サービスの改善に活かします。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/merit2.jpg')]">
          <div className="m-5">
            <div className="bg-gray-300 rounded-lg bg-opacity-70">
              <div className="flex flex-col">
                <h1 className="title">組織に応じたTeamsの設計</h1>
                <p className="text-[25px] mt-2 mx-5 ">
                  弊社の専門家チームは、組織のニーズや業務フローに合わせてTeamsの設計をカスタマイズし、最適な環境を提供します。
                  <br />
                  ユーザー向けのトレーニングセッションを提供し、Teamsの効果的な利用方法を指導します。また、トラブルシューティングやサポートも行います。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/merit1.jpg')]">
          <div className="m-5">
            <div className="bg-gray-300 rounded-lg bg-opacity-70">
              <div className="flex flex-col">
                <h1 className="title">実務で培った経験と知識</h1>
                <p className="text-[25px] mt-2 mx-5 ">
                  長年にわたる実務経験と深い専門知識を活かし、お客様に最高のサポートを提供しています。
                  <br />
                  常に最新のトレンドやテクノロジーを追跡し、それを活用してお客様に価値あるソリューションを提供します。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item w-full md:w-1/2 justify-center oowaku bg-[url('/images/merit4.jpg')]">
          <div className="m-5">
            <div className="bg-gray-300 rounded-lg bg-opacity-70">
              <div className="flex flex-col">
                <h1 className="title">充実なアフターケア</h1>
                <p className="text-[25px] mt-2 mx-5 ">
                  トータルサービスなので、導入後もしっかりとアフターケアをします。
                  <br />
                  運用のご支援はもちろん、お客様の課題やニーズに合わせて、最適な解決策を提供します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Merit
