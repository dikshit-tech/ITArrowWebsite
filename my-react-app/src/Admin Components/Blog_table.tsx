import { Modal, ModalBody, ModalFooter, ModalHeader, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";
import { url } from "../Config/config";
import axios from "axios";
import { useEffect, useState } from "react";
interface blogdetails {
    sn: number
    blogTitle: string
    blogDescription: string
    blogDate: Date
    blogImagePath: string
    author: string
}
export default function Blog_Table() {



    const [page, setPage] = useState(0);
    const [blogdetails, setBlogdetails] = useState<blogdetails[]>([]);
    const [openmodel, setopenmodel] = useState(false);

    const getBlogs = async () => {
        await axios.get(`${url}/blog/showcaseblogs`,
            {
                params:
                {
                    page: page,
                    size: 10
                }
            }
        ).then
        (
            (res)=>
            {
                setBlogdetails(res.data.content);
            }
        )
    }
    const deleteBlog = async(id:number)=>
    {
        await axios.delete(`${url}/blog`,
        {
            params:
            {
                id:id
            }
        }
        )
        .then
        (
            (res)=>
            {
                (res.data ?getBlogs() : alert("something went wrong"));
                setopenmodel(false)
            }
        )
    }
    useEffect(
        ()=>
        {
            getBlogs();
           
        },[]
    )
    


    return (

        <div>
            <Table className="w-full" hoverable={true} striped={true}>
                <TableHead className="text-[#ff6637] text-lg font-light!">
                    <TableHeadCell>
                        S.N
                    </TableHeadCell>
                    <TableHeadCell>
                        Blog Title
                    </TableHeadCell>
                    <TableHeadCell>
                        Author
                    </TableHeadCell>
                    <TableHeadCell>
                        Date
                    </TableHeadCell>
                    <TableHeadCell>
                        Action
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {
                            blogdetails.map((item, index) => {
                                return (
                                    <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {index+1}
                                        </TableCell>
                                        <TableCell>
                                            <p>{item.blogTitle}</p>
                                        </TableCell>
                                        <TableCell>
                                            {item.author}
                                        </TableCell>
                                        <TableCell>
                                           {new Date(item.blogDate).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell className="flex gap-3">
                                            <Link to={""}><i className="fa fa-edit bg-green-500 text-white text-2xl p-1 rounded"></i></Link>
                                            <p onClick={()=>setopenmodel(true)}><i className="fa fa-trash bg-red-500 hover:cursor-pointer text-white text-2xl p-1 rounded"></i></p>
                                            <Link to={""}><i className="fa fa-eye bg-blue-500 text-white text-2xl p-1 rounded"></i></Link>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }

                </TableBody>
            </Table>
            <Modal show={openmodel} size="lg" popup={true} position="center" onClose={() => setopenmodel(false)}>
                    <ModalHeader className=" text-white "><p className="text-2xl text-[#ff6637]!">Delete Blog</p></ModalHeader>
                    <ModalBody className="flex align-center  p-3 justify-center">
                        <p className="text-gray-600 font-semibold">Are you sure you want to delete this blog ?</p>
                    </ModalBody>
                    <ModalFooter className="flex justify-center m-0 gap-1">
                        <button className="bg-[green] text-white py-2 w-full px-4 rounded" onClick={() => setopenmodel(false)}>No</button>
                        <button className="bg-[#ff0000] text-white py-2 w-full px-4 rounded" onClick={() => deleteBlog(blogdetails[0].sn)}>Yes</button>
                    </ModalFooter>
                </Modal>
        </div>
    );
}