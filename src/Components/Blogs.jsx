import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
const Blogs = () => {
    //consume
    const {post,loading} = useContext(AppContext);
    console.log(post);
    
  return (
    <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]'>
        {
            loading ? 
            (<Spinner/>) : (
                
                    post.length === 0 ? 
                    (
                        <div>
                            <p>N0 post found</p>
                        </div>
                    ) :
                    (post.map( (post) => (
                        <div key={post.id}>
                            <p className='font-bold text-red-700 text-lg '>{post.title}</p>
                            <p className='text-sm mt-[4px]'>
                                By <span className='italic '>{post.author}</span > on <span className='underlined'>{post.category}</span>
                            </p>
                            <p className='text-sm mt-[4px]'>Posted on {post.data}</p>
                            <p className='text-md mt-[14px]'>{post.content}</p>
                            <div className='flex gap-x-3'>
                                {post.tags.map( (tag,index) => {
                                    return <span className='text-blue-700 font-bold underline text-xs mt-[5px]'
                                    key={index}>{`#${tag}`}</span>
                                })}
                            </div>
                        </div>
                    )
                    ))
            )
        }




    </div>
  )
}

export default Blogs