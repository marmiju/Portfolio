import React from 'react'
import facebook from "../../assets/Icons/facebook.png"
import linkedin from "../../assets/Icons/linkedin.png"
import github from "../../assets/Icons/github.png"
import leetcode from "../../assets/Icons/leetcode.png"

const Social_media = () => {
    return (
        <div className='flex justify-center items-center mt-4'> {/*SOcial Media  */}
            <div className='flex rounded-full text-black pr-[2px] justify-around gap-2 items-center'>
                <a href='https://facebook.com/dev.mar.miju'><img src={facebook}></img></a>
                <a href='https://www.linkedin.com/in/marmiju/'><img src={linkedin}></img></a>
                <a href='https://github.com/marmiju'><img src={github}></img></a>
                <a href='https://leetcode.com/u/devmar/'><img src={leetcode}></img></a>
            </div>
        </div>
    )
}

export default Social_media