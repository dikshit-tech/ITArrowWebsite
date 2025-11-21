import { Progress } from "flowbite-react";
export default function WhyChooseUs() {
    return (
        <div className="outer overflow-hidden">
            <div className="inner ">
                <div className="w-[50%] flex flex-col gap-2 justify-center ">
                    <p className="slogan"> Why Choose Us</p>
                    <h2 className="title">Reasons to work with us</h2>
                    <p className="description">At IT Arrow Technologies, we combine innovation, expertise, and data-driven strategies to deliver exceptional website development and SEO solutions. With a proven track record of success, our team ensures top-notch service, measurable results, and long-term growth for your business.
                        Whether it’s crafting stunning websites or optimizing your online presence, we help you stay ahead in the digital world.</p>
                    <div className="flex flex-col gap-3">
                        <Progress progress={95} progressLabelPosition="outside" textLabel="Successful Projects" color="yellow" textLabelPosition="outside" size="lg" labelProgress labelText />
                        <Progress progress={90} progressLabelPosition="outside" textLabel="Client Satisfaction " color="yellow" textLabelPosition="outside" size="lg" labelProgress labelText />
                        <Progress progress={97} progressLabelPosition="outside" textLabel="SEO Success Rate" color="yellow" textLabelPosition="outside" size="lg" labelProgress labelText />
                        <Progress progress={100} progressLabelPosition="outside" textLabel="After Sales Support" color="yellow" textLabelPosition="outside" size="lg" labelProgress labelText />

                    </div>
                </div>
                <div className="w-[50%] flex flex-col gap-2 relative p-3 self-start h-[700px] justify-between">
                    <div className="w-full flex justify-end items-center gap-3">
                        <div className="w-[50%] p-3 bg-[#ff6637] rounded-2xl"  >
                            <h2 className="text-white! -z-20 text-center">Your Trust is our treasure.</h2>
                        </div>
                    </div>
                    <div>
                        <img className="w-full rounded-2xl absolute top-20 h-full -left-10 " src="../patrik_brown.png" alt="" />
                    </div>
                    <div className="w-full flex justify-start items-center gap-3">
                        <div className="w-[40%] p-3 bg-[#201d1c] rounded-2xl z-10 flex flex-col items-center"  >
                            <i className="fa-solid fa-certificate text-[#ff6637] text-[40px] "></i>
                            <h2 className="text-white! text-center">+15 Years of Experience</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}