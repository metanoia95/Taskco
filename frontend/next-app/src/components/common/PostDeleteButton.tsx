'use client'

import { deletePost } from "@/lib/services/blogService";
import { useRouter } from "next/navigation"

export default function PostDeleteButton({postId}:{postId:number}){

    const router = useRouter();

    const handleDelete = async () => {
        
        try {
            const res = await deletePost(postId)
            

            if (res.status === 200) {
                router.push("/blog");
              }


        } catch(err:unknown){
            console.log(err)

        }
        

    }


    return <button 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        onClick={handleDelete}
    > 삭제하기 </button>


}