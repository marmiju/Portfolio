import React from 'react'
import facebook from "../../assets/Icons/facebook.png"
import linkedin from "../../assets/Icons/linkedin.png"
import github from "../../assets/Icons/github.png"
import leetcode from "../../assets/Icons/leetcode.png"

const Social_media = () => {
    return (
        <div className='flex justify-center items-center'> {/*SOcial Media  */}
            <div className='flex rounded-full text-black pr-[2px] justify-around gap-2 items-center'>
                <a href='https://facebook.com/dev.mar.miju'><img className='w-6 h-6' src={facebook}></img></a>
                <a href='https://www.linkedin.com/in/marmiju/'><img className='w-6 h-6' src={linkedin}></img></a>
                <a href='https://github.com/marmiju'><img className='w-6 h-6' src={github}></img></a>
                <a href='https://leetcode.com/u/devmar/'><img className='w-5 h-5' src={leetcode}></img></a>
            </div>
        </div>
    )
}

export default Social_media