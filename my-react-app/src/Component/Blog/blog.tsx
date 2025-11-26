export default function Blog() {
    return (
        <div className="outer">
            <div className="inner flex-col! gap-6 ">
                <div className="flex justify-between">
                    <div className="w-[50%] flex flex-col gap-2 p-0 ">
                        <p className="slogan">Blog</p>
                        <h2 className="title">Detail about our Work</h2>
                        <p className="description">
                            Explore in-depth case studies, design decisions, and practical tips from our team—real-world lessons and project highlights to help you build better products.
                        </p>
                    </div>
                    <div className="[w-50%] flex justify-end items-center">
                        <button className="buttonstyle">Read More</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <div className="flex flex-col gap-3 shadow-xl p-5 rounded-3xl  ">
                        <img className="h-[200px] object-cover rounded-2xl" src="../image.jpg" alt="" />
                        <h2 className="headertwo text-center">Maximizing SEO Impact: Strategies for 2024</h2>
                        <p className="description text-center!">Discover the latest SEO strategies for 2024 to boost your website's visibility and drive organic traffic. Learn about keyword optimization, content marketing, and technical SEO best practices.</p>
                    </div>
                    <div className="flex flex-col gap-3 shadow-xl p-5 rounded-3xl  ">
                        <img className="h-[200px] object-cover rounded-2xl" src="../image2.jpg" alt="" />
                        <h2 className="headertwo text-center">The Future of Web Development: Trends to Watch</h2>
                        <p className="description text-center!">Stay ahead in web development by exploring emerging trends such as AI integration, progressive web apps, and enhanced user experiences that are shaping the future of the digital landscape.</p>
                    </div>
                    <div className="flex flex-col gap-3 shadow-xl p-5 rounded-3xl  ">
                        <img className="h-[200px] object-cover rounded-2xl" src="../group.jpg" alt="" />
                        <h2 className="headertwo text-center">Designing for Accessibility: Best Practices</h2>
                        <p className="description text-center!">Learn how to create inclusive digital experiences by implementing accessibility best practices in web design. Discover techniques to ensure your website is usable for all users, including those with disabilities.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

