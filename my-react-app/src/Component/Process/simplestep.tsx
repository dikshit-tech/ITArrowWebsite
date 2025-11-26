export default function SimpleStep()
{
    return (
        <div className="outer">
            <div className="inner flex-col! gap-7">
                <div className="flex flex-col justify-between items-center ">
                    <p className="slogan"> Process</p>
                    <h2 className="title">Simple Way To Get Started</h2>
                    <p className="description">At IT Arrow Technologies, we believe in a simple and straightforward process to help you get started with our services.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 ">
                    <div className=" rounded shadow-xs shadow-[#ff6637] p-4 flex flex-col justify-between gap-3 items-center ">
                        <img src="../count1.png" alt="" />
                         <div className="w-full">
                         <h2 className="text-[#ff6637]! text-center ">Contact Sales Team</h2>
                         <p className="description text-center">Reach out to our friendly and knowledgeable sales team to discuss your project needs.
                             We’ll provide you with all the information you need to get started and recommend the best solutions tailored to your business goals.</p>
                         </div>
                    </div>
                        <div className=" rounded shadow-xs shadow-[#ff6637] p-4 flex flex-col justify-between gap-3 items-center ">
                        <img src="../count.png" alt="" />
                         <div className="w-full">
                         <h2 className="text-[#ff6637]! text-center ">SetUp a Account</h2>
                         <p className="description ">Once you’ve decided to move forward, setting up an account is quick and easy. For just $30 (non-refundable), you’ll be ready to start your project with us. This step ensures that we have all the necessary details to kick off your project smoothly.</p>
                         </div>
                    </div>
                    <div className=" rounded shadow-xs shadow-[#ff6637] p-4 flex flex-col justify-between gap-3 items-center ">
                        <img src="../ROCKET.png" alt="" />
                         <div className="w-full">
                         <h2 className="text-[#ff6637]! text-center ">Ready For Deployment</h2>
                         <p className="description text-center">With your account set up, our expert team will get to work on your project. Whether it’s SEO, web development, or Google Ads services, we’ll ensure your project is completed to the highest standards, delivering results that exceed your expectations.</p>
                         </div>
                    </div>
                   
                </div>
            </div>

        </div>
    );
}