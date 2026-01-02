import Blog_archieve from "../Component/Blog Archieve/Blog_archieve";
import SecondHeroBanner from "../Component/secondary Hero Banner/SecondHeroBanner";

export default function Blog_List() {
    return (
        <div>
            <SecondHeroBanner pagename="Blog" desc="Blogs" />
            <Blog_archieve/>
        </div>
    );
}