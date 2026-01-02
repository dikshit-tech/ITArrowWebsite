import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Testimonials_Table()
{
    return (
        <div>
            <Table className="w-full" hoverable={true} striped={true}>
                <TableHead className="text-[#ff6637] text-lg font-light!">
                    <TableHeadCell>
                        S.N
                    </TableHeadCell>
                    <TableHeadCell>
                        Testimonials Name
                    </TableHeadCell>
                    <TableHeadCell>
                        Company Name
                    </TableHeadCell>
                    <TableHeadCell>
                        Total Rating
                        </TableHeadCell>
                    <TableHeadCell>
                        Date
                        </TableHeadCell>
                    <TableHeadCell>
                        Action
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            1
                        </TableCell>
                        <TableCell>
                            <p>Rajaya Shrestha</p>
                        </TableCell>
                        <TableCell>
                            <p>IT Arrow Technology</p>
                        </TableCell>
                        <TableCell>
                            <i className="fa fa-star text-xl text-amber-400"></i>
                            <i className="fa fa-star text-xl text-amber-400"></i>
                            <i className="fa fa-star text-xl text-amber-400"></i>
                            <i className="fa fa-star text-xl text-amber-400"></i>
                            <i className="fa fa-star text-xl text-amber-400"></i>
                        </TableCell>
                        <TableCell>
                            12-05-2025
                        </TableCell>
                        <TableCell className="flex gap-3">
                            <Link to={""}><i className="fa fa-edit bg-green-500 text-white text-2xl p-1 rounded"></i></Link>
                            <Link to={""}><i className="fa fa-trash bg-red-500 text-white text-2xl p-1 rounded"></i></Link>
                            <Link to={""}><i className="fa fa-eye bg-blue-500 text-white text-2xl p-1 rounded"></i></Link>
                        </TableCell>
                    </TableRow>
                   
                    </TableBody>
                    </Table>
        </div>
    );
}