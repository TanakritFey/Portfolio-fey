import WorkItem from './WorkItem'


// data สำหรับเขียน ประสบการณ์การทำงาน
const data = [
    {
    year:2023 ,
    company:'Generation Thailand' ,
    title : 'Junior Software Developer Bootcamp',
    duration:'4 Months' ,
    details:`- Learned how to build web applications from React as front-end, Node.js as backend and MongoDB as a Database.
    , Learned essential skills for switching careers,such as growth mindset, communication, agile and teamwork
    , Final Project MERN Stack CRUD Project : The application website is divided into front-end using React with React-router and Axios as the main dependency. in the backend, it uses Express to manage RESTful API and uses PassportJS for authentication. Finally, using Mongoose to connect MongoDB `
    },
    {
    year:2021 ,
    company:'REALTECH CORPORATION COMPANY LIMITED' ,
    title : 'Digital Marketing',
    duration:'2 Years' ,
    details:`- Providing Solution Marketing, integrated marketing services 
    , Manage of the social media channels of the organization/client , Write and create an SEO website and make ads on social platform
    , Making monthly planing and doing admin position waiting to serve customers
    , Manage the organization sales and marketing to achieve its goals by focus mainly on online marketing
    , Making monthly planing and doing admin position waiting to serve customers ` 
    },
    {
    year:2019 ,
    company:'T C QUICK COMPANY LIMITED' ,
    title :'Marketing E-Commerce',
    duration:'2 Years' ,
    details:`- Taking care of the shop on Facebook, Shopee and Lazada, JD Central of Thecyclingzone shop
    , Creating Content, making art work promote the products of the shop to increase sales
    , Making  Ads on Facebook, Shopee and Lazada and Update products in stock and fix problems with suspended products and create codes and promotions such as Flash Sale or monthly campaigns of Facebook, Shopee, LAZADA
    , Selling products in front of the store named Minburi Cycle Shop Waiting to provide information to customers
    ` 
    }
]

const Work = () => {
    
    return(
        <div id='work' className='flex justify-center w-full m-auto md:pl-20 p-4 py-16 bg-[#000000]' >
            <div className='max-w-[1040px] '>
            <div className='pb-4 text-center' data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
            <h1 className='font-Bangers text-6xl font-bold  text-white inline border-b-4'>Work Experience</h1>
            </div>
            <div data-aos="fade-right" data-aos-offset="500" data-aos-duration="500">
            {data.map((item,index) => (
                /* Props ข้อมูล Data ทั้งหมดจาก ไฟล์ Work.jsx ส่งไปยัง WorkItem.jsx โดยผ่านการ map() */
                <WorkItem 
                key={index} 
                year={item.year} 
                title={item.title} 
                company={item.company} 
                duration={item.duration} 
                details={item.details} />
                    
            ) )}
            </div>
            </div>
        </div>
    )
}
export default Work