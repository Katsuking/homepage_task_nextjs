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
      <div className="carousel rounded-box w-full mt-2">
        <div className="carousel-item w-1/2 ">
          <div className="flex flex-col">
            <h1 className="text-center text-[40px]">充実なアフターケア！！</h1>
            <p className="text-[25px] mt-2 mx-5 ">
              トータルサービスなので、導入後もしっかりとアフターケアをします。
              運用のご支援はもちろん、状況に合わせて運用。最適案を提案し業務支援に貢献します。
            </p>
          </div>
        </div>
        <div className="carousel-item w-1/2">
          <div className="flex flex-col">
            <h1 className="text-center text-[40px]">A社の場合</h1>
            <p className="text-[25px] mt-2 mx-5">
              textaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
        <div className="carousel-item w-1/2 ">
          <div className="flex flex-col">
            <h1 className="text-center text-[40px]">
              用途に応じた多様なプラン
            </h1>
            <p className="text-[25px] mt-2 mx-5 "></p>
          </div>
        </div>
        <div className="carousel-item w-1/2">
          <div className="flex flex-col">
            <h1 className="text-center text-[40px]">B社の場合</h1>
            <p className="text-[25px] mt-2 mx-5">
              textaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
        <div className="carousel-item w-1/2 ">
          <div className="flex flex-col">
            <h1 className="text-center text-[40px]">text3</h1>
            <p className="text-[25px] mt-2 mx-5 ">
              トータルサービスなので、導入後もしっかりとアフターケアをします。
              運用のご支援はもちろん、状況に合わせて運用。最適案を提案し業務支援に貢献します。
            </p>
          </div>
        </div>
        <div className="carousel-item w-1/2">
          <div className="flex flex-col">
            <h1 className="text-center text-[40px]">C社の場合</h1>
            <p className="text-[25px] mt-2 mx-5">
              textaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Merit
