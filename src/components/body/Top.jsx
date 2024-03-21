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
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">
              <span className="">オープランで</span>
              <br /> Microsoft365の導入はじめませんか?
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
