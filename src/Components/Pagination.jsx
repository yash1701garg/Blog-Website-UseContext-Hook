import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
        <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-x-2'>
            { page > 1 && 
                <button className='border-2 rounded-md px-4 py-1 '
                onClick={ () => handlePageChange(page-1)}>
                    Previous
                </button>
            }
             {
                page < totalPages && 
                <button className='border-2 rounded-md px-4 py-1 '
                 onClick={() => handlePageChange(page+1)}>
                    Next
                </button>
            }

        </div>    
            <p>
                Page {page} of {totalPages}
            </p>
            </div>
    </div>
  )
}

export default Pagination