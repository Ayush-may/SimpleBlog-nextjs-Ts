import React from 'react'
import AddBlog from './AddBlog'

interface AddBlogBtnAreaProp {
    submitBlog: () => void
}

const AddBlogBtnArea: React.FC<AddBlogBtnAreaProp> = (prop) => {
    return (
        <div className='flex justify-end gap-3 mt-5' >
            {/* <SaveDraft /> */}
            <div onClick={prop.submitBlog} ><AddBlog /></div>
        </div>
    )
}

export default AddBlogBtnArea