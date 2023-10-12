function About() {
  return (
    <div id="about" className="bg-[#000000]  flex flex-col justify-center items-center h-screen"  >
      <div className="text-center mb-10" data-aos="fade-left" >
        <h1 className='font-Bangers text-6xl font-bold inline border-b-4 text-white '>About Me</h1>
      </div>

      <p className="text-justify text-2xl md:w-[60%] text-white font-Nanum" data-aos="fade-right">
        I am a graduate of Generation Thailand Junior Software Developer
        Bootcamp, and I have experience in Digital Marketing for 4 years. I got
        better at planning, working in teams, and leading teams. I want to be a
        Junior FullStack Software Developer. I am excited to use my special
        skills to make new and smart ideas that connect technology and how
        people use it.
      </p>
      <div data-aos="fade-right">
      <img src="https://media2.giphy.com/media/ClfT8RsZPbiPj4YdhH/200w.webp" alt="image-gif" className="m-8 w-[15rem] fade-down"/>
      </div>
    </div>
  );
}

export default About;
