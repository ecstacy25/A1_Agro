import './address.css';
import { AiOutlineMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";

const Address = () => {
  return (
    <div className='heder'>
    <div className='head'>
      <div className='office1'>
        <MdLocationPin />
        <p>Shop F14 Sango Garage Opposite First Bank PLC, Sango-Ota Ogun State Nigeria</p>
      </div>
      <div className='emails'>
        <AiOutlineMail />
        <a
          className='text1'
          href='mailto:a1agrofoodsexport@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
        >
         a1agrofoodsexport@gmail.com 
        </a>
      </div>
      <div className='phones'>
        <HiPhone />
        <a
          className='text1'
          href='tel:+2348027322977'
          rel='noopener noreferrer'
          target='_blank'
        >
          +2348027322977
        </a>
      </div>
    </div>
  </div> 
  );
}

export default Address;
