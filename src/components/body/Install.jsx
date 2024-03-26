import Image from 'next/image'

const InstallPage = () => {
  return (
    <div className="my-10 sm:mx-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src="/images/install.png"
            alt="install"
            width={500}
            height={500}
          />
        </figure>
        <div className="card-body sm:ml-20 lg:ml-10">
          <h2 className="card-title">MS365導入の流れ</h2>
          <ul className="list-decimal">
            <li className="font-bold">ニーズ分析とプランの選定</li>
            <p className="pb-3">
              ビジネスニーズとIT環境を詳細に把握し、最適なプランを提案します。
            </p>
            <li className="font-bold">環境準備とプランニング</li>
            <p className="pb-3">
              ITインフラと環境を評価し、Microsoft365の準備作業を計画します。
            </p>
            <li className="font-bold">実装と移行</li>
            <p className="pb-3">
              Microsoft365のアカウント設定やデータ移行を実施し.
              <br />
              スムーズな移行を保証します。
            </p>
            <li className="font-bold">研修とサポート</li>
            <p className="pb-3">
              ユーザー向けの研修プログラムを提供し、
              <br />
              技術的なサポートを迅速に提供します。
            </p>
            <li className="font-bold"> 継続的な評価と最適化</li>
            <p className="pb-3">
              利用状況をモニタリングし、サービスの改善や最適化を行います。
            </p>
          </ul>
          <div className="card-actions justify-end pr-4">
            <button className="btn bg-[#00004d] text-white hover:bg-[#5642ad] hover:border-[#5642ad]">
              もっと知りたい
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallPage
