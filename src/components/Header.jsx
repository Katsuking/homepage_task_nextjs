import Image from 'next/image'
import { CiMail } from 'react-icons/ci'
import { FaPhoneAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="flex justify-between sticky top-0 bg-[#FFFFFF] z-50">
      <div className="ml-3">
        <Image src="/images/OPLAN.png" alt="cloud" width={100} height={50} />
      </div>
      <div className="mr-3">
        <div className="flex flex-row items-center">
          <CiMail size={20} className="m-2" />
          <p className="pt-1">お問い合わせはこちら</p>
        </div>
        <div className="flex flex-row items-center">
          <FaPhoneAlt size={20} className="m-2" />
          <p className="pt-1">03-XXXX-XXXX</p>
        </div>
      </div>
    </header>
  )
}

export default Header
