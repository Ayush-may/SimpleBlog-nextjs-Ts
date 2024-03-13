'use client'
import React, { useRef, useState, useMemo } from 'react'
import JoditEditor from 'jodit-react'
import { PropInterface } from '@/app/newblog/page'

const RichTextEditor: React.FC<PropInterface> = (prop) => {
    const ref = useRef(null);

    return (
        <>
            <JoditEditor
                className='mt-5'
                ref={ref}
                value={prop.value}
                onChange={newContent => prop.setValue(newContent)}
            />
        </>
    )
}

export default RichTextEditor

// <div dangerouslySetInnerHTML={{ __html: content }} />