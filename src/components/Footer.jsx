import Image from 'next/image'
import { CiMail } from 'react-icons/ci'
import { FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex justify-between">
      <div className="ml-3">
        <Image src="/images/OPLAN.png" alt="cloud" width={100} height={50} />
      </div>
      <div className="mr-3">
        <div className="flex flex-row">
          <CiMail className="m-2" />
          <p className="pt-1">お問い合わせわこちら</p>
        </div>
        <div className="flex">
          <FaPhoneAlt className="m-2" />
          <p className="pt-1">03-XXXX-XXXX</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
