const TopPage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(/images/ap2018FTHG5139_TP_V.png)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold text-start">
              <span className="font-bold">オープランで</span>
              <br />
              <span className="sm:ml-8">Microsoft365の導入はじめませんか?</span>
            </h1>
            <p className="mb-5">
              クラウドベースのサービスであるため、どこからでもアクセスが可能です。
              <br />
              また、Word、Excel、PowerPointなど、おなじみのアプリケーションを最新の状態で利用でき、安全な環境での作業を保証します。
            </p>
            <button className="btn border-[#00004d] text-white bg-[#00004d]">
              無料相談してみる
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPage
