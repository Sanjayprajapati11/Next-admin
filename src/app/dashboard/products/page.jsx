import Search from "@/app/_components/dashboard/search/Search"
import Image from "next/image"
import user from '../../../../public/user.png'
import { FcNext, FcPrevious } from "react-icons/fc";
import Link from "next/link"
import { MdSearch } from "react-icons/md"
import { fetchProducts } from "@/app/lib/data";
import Pagination from "@/app/_components/dashboard/pagination/Pagination";
import { deleteProduct } from "@/app/lib/actions";

const Products = async({searchParams}) => {
   const q = searchParams?.q || ""
   const page = searchParams?.page || 1;
   const product = await fetchProducts(q, page);
  return (
    <div className="mt-3 bg-slate-900 p-[20px] rounded-[10px]">
    <div className="flex items-center justify-between">
    <Search placeholder="Search for a user..."/>
    <Link href="/dashboard/products/add">
    <button className="bg-purple-600 p-3 rounded-lg">Add New</button>
    </Link>
    </div>
    <table className="w-full">
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
          {product.products.map((product) => (
        <tr key={product._id}>
          <td  className="flex gap-3 items-center">
            <Image src={product.img} width={100} height={100} className="rounded-full object-cover h-10 w-10"/>{product.name}</td>
          <td><p className="w-52 overflow-hidden overflow-ellipsis text-nowrap"  maxLength='20' >
          {product.desc} 
            </p>
            </td>
          <td>${product.price}</td>
          <td>{product.createdAt?.toString().slice(4,16)}</td>
          <td>{product.stock}</td>
          <td className="flex gap-2"><Link href={`/dashboard/products/${product._id}`} className="p-2 bg-green-700 rounded-lg">View</Link> 
          <form action={deleteProduct}>
            <input type="text" name="id" value={product.id} className="hidden" />
          <button className="p-2 bg-red-700 rounded-lg">Delete</button>
          </form>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
   <Pagination count={product.count}/>
  </div>
  )
}

export default Products