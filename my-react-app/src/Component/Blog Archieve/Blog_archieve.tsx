export default function Blog_archieve() {
    return (
        <div className="outer">
            <div className="inner flex-col!  " >

                <div className="flex w-full gap-2 flex-wrap md:flex-nowrap  border">
                    <div className="w-[65%] flex flex-col gap-2 p-2 " >
                        <img src="./mav.png" className="border w-full" alt="" />
                        <h2 className="title w-full text-center">Detail about our Work</h2>
                        <p className="description text-justify">
                            Explore in-depth case studies, design decisions, and practical tips from our team—real-world lessons and project highlights to help you build better products.
                        </p>
                    </div>
                    <div className="w-[30%] p-2 flex flex-col gap-y-5 border">
                        <div>
                            <p className="slogan">Recent Post</p>
                        </div>
                        <div className="flex  w-full gap-3 p-2  items-center border-b ">
                            <img src="./mav.png" className="h-[100px]!" alt="" />
                            <p className="description">
                                Explore in-depth case studies, design decisions, and practical</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}