export default function About()
{
    return (
        <div className="outer pb-[200px]!">
            <div className="inner">
                <div className="flex box-border relative  w-[50%] p-4 " >
                    <img className="w-[400px] object-cover left-40 top-30 absolute h-[400px] border-10 border-[#ff6637] rounded-lg" src="../banner1.jpg" alt="" />
                     <img className=" w-[400px]  object-cover    h-[400px] border-10 border-[#727272] rounded-lg" src="../banner2.jpg" alt="" />
                   
                    

                </div>
                <div className="w-[50%] flex flex-col gap-2 justify-center mb-5 ">
                    <p className="slogan">About IT Arrow Technologies</p>
                    <h2 className="title">Innovating <span className="text-[#ff6637]">Web </span>& <span className="text-[#ff6637]">SEO</span> Solutions for Success</h2>
                    <p className="description">At IT Arrow Technologies, we are committed to delivering top-tier website design and SEO solutions that help businesses thrive in the digital world. 
                        With over six years of experience, our team blends creativity with data-driven strategies to build visually stunning, high-performing websites and
                        implement SEO techniques that drive organic growth. We prioritize innovation, client satisfaction, and measurable results, ensuring that every project
                        we undertake enhances online visibility and business success. Whether you’re looking to establish a strong digital presence or improve search rankings,
                          IT Arrow Technologies is your trusted partner for achieving long-term success.</p>
                          <div className="pt-5">
                            <button className="bg-[#ff6637] pl-3 pr-3 pt-2 pb-2 hover:cursor-pointer rounded-xl text-white">Learn More</button>
                          </div>

                </div>
            </div>
        </div>
    );
}