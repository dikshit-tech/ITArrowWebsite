import Caurosel from "../../small component/Caurosel";


export default function Testimonials() {
    return (
        <div className="outer bg-[#f9f9f9] ">
            <div className="inner flex-col! gap-6 ">
                <div className="w-full flex flex-col gap-5 justify-center items-center ">
                    <p className="slogan">Testimonials</p>
                    <h2 className="title">What Our <span className="text-[#ff6637]">Clients </span> Say</h2>
                    <p className="description text-center!  ">At IT Arrow Technologies, we pride ourselves on delivering exceptional website design and SEO services that drive real results for our clients. But don’t just take our word for it – hear what our satisfied clients have to say about their experiences working with us.</p>
                </div>
                <div className="">
                    <Caurosel/>

                </div>
            </div>
        </div>
    );
}   