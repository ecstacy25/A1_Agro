import "./contact.css";
import Map from "../../assets/image 8.png";
import Line from "../../assets/line.png";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="contacts" id='contacts'>
      <div className='con'>
        <div className='cont'>
          <div className='conta'>
            <img className="line" src={Line} alt='line' width={100} height={8} />
            <h1 className='main_text'>Contacts</h1>
            <section>
              <div className='office'>
                <MdLocationPin className='icon icon_office' />
                <p className='para_office'>
                Shop F14 Sango Garage Opposite First Bank PLC, Sango-Ota Ogun State Nigeria
                </p>
              </div>
            </section>

            <div className='post'>
              <section>
                <div className='email'>
                  <AiOutlineMail className='icon icon_email' />
                  <a
                    className='texta'
                    href='mailto:a1agrofoodsexport@gmail.com '
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    a1agrofoodsexport@gmail.com 
                  </a>
                </div>
              </section>

              <section>
                <div className='phone'>
                  <HiPhone className='icon icon_phone' />
                  <a
                    className='textb'
                    href='tel:+2348027322977'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    +2348027322977
                  </a>
                </div>
              </section>
            </div>
          </div>

          <img className='place' src={Map} alt='location' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
