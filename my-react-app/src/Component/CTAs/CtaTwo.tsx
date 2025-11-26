export default function CtaTwo()
{
    return (
        <div className="outer" >
            <div className="inner" >
                <div className="w-full md:w-[30%] flex  gap-4 flex-col ">
                    <p className="slogan">Newsletter</p>
                    <h2 className="title">Subscribe to Our Newsletter  Get a Free Consultation</h2>
                    <p className="description"> Sign up for our newsletter to stay up-to-date with the latest news, updates, and exclusive offers from IT Arrow Technologies.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Email Address" className="p-2 border border-[#ff6637] rounded w-full" />
                        <button className="bg-[#ff6637] text-white p-4 text-lg rounded">Subscribe</button>
                    </div>
                </div>
                <div className="md:w-[70%] ">
                    <img src="../orn.png" className="h-full w-full" alt="" />
                </div>

                
            </div>
        </div>
    );
}