import GoogleMapReact from "google-map-react";
import React, { useEffect } from "react";
import Map from "../../assets/image 8.png";
import Line from "../../assets/line.png";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import "./contact.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 6.8383,
      lng: 3.2228,
    },
    zoom: 11,
  };
  return (
    <section className='contacts' id='contacts'>
      <div className='con'>
        <div className='cont'>
          <div className='conta'>
            <img
              className='line'
              src={Line}
              alt='line'
              width={100}
              height={8}
            />
            <h1 className='main_text'>Contacts</h1>
            <section>
              <div className='office'>
                <MdLocationPin className='icon icon_office' />
                <p className='para_office'>
                  Shop F14 Sango Garage Opposite First Bank PLC, Sango-Ota Ogun
                  State Nigeria
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
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB4ZF2GU_edxPVaVnbxcwuEvyyQhU21sFw&libraries=places&callback=initialize",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent lat={6.6927} lng={3.2365} text='Your Marker' />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import "./contact.css";
// import React, { useEffect } from "react";
// import { AiOutlineMail } from "react-icons/ai";
// import { HiPhone } from "react-icons/hi";
// import { MdLocationPin } from "react-icons/md";
// import Line from "../../assets/line.png";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const Contact = () => {
//   const defaultProps = {
//     center: {
//       lat: 6.8383,
//       lng: 3.2228,
//     },
//     zoom: 11,
//   };

//   return (
//     <section className='contacts' id='contacts'>
//       <div className='con'>
//         <div className='cont'>
//           <div className='conta'>
//             <img
//               className='line'
//               src={Line}
//               alt='line'
//               width={100}
//               height={8}
//             />
//             <h1 className='main_text'>Contacts</h1>
//             <section>
//               <div className='office'>
//                 <MdLocationPin className='icon icon_office' />
//                 <p className='para_office'>
//                   Shop F14 Sango Garage Opposite First Bank PLC, Sango-Ota Ogun
//                   State Nigeria
//                 </p>
//               </div>
//             </section>

//             <div className='post'>
//               <section>
//                 <div className='email'>
//                   <AiOutlineMail className='icon icon_email' />
//                   <a
//                     className='texta'
//                     href='mailto:a1agrofoodsexport@gmail.com'
//                     rel='noopener noreferrer'
//                     target='_blank'
//                   >
//                     a1agrofoodsexport@gmail.com
//                   </a>
//                 </div>
//               </section>

//               <section>
//                 <div className='phone'>
//                   <HiPhone className='icon icon_phone' />
//                   <a
//                     className='textb'
//                     href='tel:+2348027322977'
//                     rel='noopener noreferrer'
//                     target='_blank'
//                   >
//                     +2348027322977
//                   </a>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//         <div className="google">
//           <GoogleMapReact
//             bootstrapURLKeys={{
//               key: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB4ZF2GU_edxPVaVnbxcwuEvyyQhU21sFw&libraries=places&callback=initialize",
//             }}
//             defaultCenter={defaultProps.center}
//             defaultZoom={defaultProps.zoom}
//           >
//             <AnyReactComponent lat={6.6927} lng={3.2365} text='Your Marker' />
//           </GoogleMapReact>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
