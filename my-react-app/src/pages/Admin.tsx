import { Link, Outlet } from "react-router-dom"

export default function Admin() {
    return (
        <>
            <div className="outer bg-[#474d51] p-0!">

                <div className=" md:p-3 flex justify-between w-full  ">
                    <div className="flex items-center gap-3 ">
                        <img className="h-15" src="/logo2.png" alt="" />
                        <p className="text-xl  text-white font-bold  ">IT Arrow Technologies</p>
                    </div>
                    <div className="flex md:gap-3 items-center" >
                        <i className="fas fa-user text-xl text-[#ff6637] "></i>
                        <p className="text-xl font-medium text-white ">IT Arrow</p>
                        <i className="fas fa-chevron-down text-white cursor-pointer"></i>
                    </div>
                </div>

            </div>
            <div className="outer p-0! ">

                <div className=" flex md:justify-between w-full">
                    <div className="w-[10%] md:h-[95vh] bg-[#474d51] md:sticky top-0 border md:flex md:flex-col pt-5 p-2 gap-2 ">
                        <Link to={'/itarrowpanel/'} className="admin_nav_item"><p>Dashboard</p></Link>
                        <Link to={'/itarrowpanel/blog'} className="admin_nav_item"><p>Blog</p></Link>
                        <Link to={'/itarrowpanel/testimonials'} className="admin_nav_item"><p>Testimonials</p></Link>
                        <Link to={'/itarrowpanel/projects'} className="admin_nav_item"><p>Projects</p></Link>
                        <Link to={'/itarrowpanel/Settings'} className="admin_nav_item"><p>Settings</p></Link>
                    </div>
                    <div className="w-[90%] p-5 ">

                                <Outlet />
                                
                            
                    </div>

                </div>

            </div>


        </>
    )
}