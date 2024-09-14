import { addProduct } from "@/app/lib/actions"

const page = () => {
  return (
    <div className="bg-slate-900 rounded p-4 mt-5">
    <form action={addProduct} className="w-full">
      <div className="flex justify-between p-3 mt-5">
      <div className="flex flex-col gap-3">
    <input type="text" className="p-3 bg-slate-950 w-[30rem]" placeholder="Title" name="name" required/>
    <input type="number"  className="p-3 bg-slate-950" placeholder="Price" name="price" required/>
    <input type="text"  className="p-3 bg-slate-950" placeholder="Color" name="color" required/>
    <input type="number"  className="p-3 bg-slate-950" placeholder="size in Inch ''" name="size" required/>
      </div>
      <div className="flex flex-col gap-4">
    <select name="type" id="" className="p-3 bg-slate-950 w-[30rem]">
      <option disabled>Select Category</option>
      <option value="laptop">Laptop</option>
      <option value="charger">Charger</option>
      <option value="mobile">Mobile</option>
    </select>
    <input type="number" name="stock"  className="p-3 bg-slate-950" placeholder="stock" required/>
    <input type="text" name="img"  className="p-3 bg-slate-950" placeholder="Image url" required/>
      </div>
      </div>
      <textarea name="desc" id="" className="w-[88.5rem] h-[10rem] bg-slate-950 flex m-auto mb-4 mt-4 p-3 " placeholder="Description here..." required></textarea>
     <button className="w-[88.5rem] p-3 flex m-auto justify-center bg-green-700 rounded" type="submit">Submit</button>
    </form>
    </div>
  )
}

export default page