import { TypeAnimation } from 'react-type-animation';
import fey from '../Img/fey.jpg'

// ขั้นตอนที่ 2 : สร้าง hero ที่แสดงภาพด้านบนสุดของ Web
const Main = () => {

    return (
        <div id='main' >
            <img className="w-full h-screen object-cover object-left scale-x-[-1] opacity-70 " 
            src="https://media4.giphy.com/media/BHNfhgU63qrks/giphy.gif?cid=ecf05e47j82m72of69tjcpwd83w0j3a4mrwl9h3128xhqxek&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="/" />
            {/* Overlay */}
            <div className="w-full h-screen absolute top-0 bg-black/90 " >
                {/* text ที่ทับรูปภาพ */}
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start'>
                  
                    <h1 className='sm:text-7xl text-4xl font-bold text-[#FFCC70]  mt-10 mx-auto font-Nanum'>Hi my name is </h1>
                    
                    <h2 className='flex sm:text-4xl text-3xl pt-4 my-4 text-white mx-auto font-Nanum  '>
                        
                    {/* Import Animation มาใช้กับ ชื่อของเรา */}
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Tanakrit Sonsue',
                            4000, // wait 1s 
                        ]}
                        wrapper="div"
                        cursor={true}
                        style={{ fontSize: '1.5em', paddingLeft:'15px' }}
                        repeat={Infinity}
                        />
                    </h2>
                     {/* img profiles */}
                     <img className='w-[25rem] rounded-full my-6 shadow-2xl shadow-slate-700 mx-auto' src={fey} alt="profile-img" />
                   
{/*                     <p className='text-center text-lg text-white w-full h-screen'>I am a graduate of Generation Thailand Junior Software Developer Bootcamp, and I have experience in Digital Marketing for 4 years. I got better at planning, working in teams, and leading teams. I want to be a Junior FullStack Software Developer. I am excited to use my special skills to make new and smart ideas that connect technology and how people use it.</p>
 */}
                    <h2 className='flex sm:text-4xl text-2xl pt-4  text-white mx-auto font-Nanum  '>
                        I'm a
                        {/* Import Animation มาใช้กับ ชื่อของเรา */}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Junior Software Developer',
                                2000, // wait 1s 
                                'Tech Enthusiast',
                                2000, // wait 2s
                            ]}
                            wrapper="div"
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft:'15px' }}
                            repeat={Infinity}
                            />
                        </h2>
                    {/* <div className='flex justify-between text-center  pt-6 max-w-[200px] w-full h-full mx-auto text-white'>
                        <FaTwitter className='cursor-pointer' size={30}/>
                        <FaFacebook className='cursor-pointer' size={30}/>
                        <FaInstagram className='cursor-pointer' size={30}/>
                        <FaLinkedin className='cursor-pointer' size={30}/>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}

export default Main