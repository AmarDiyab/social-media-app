import React, { useState, useRef } from 'react'
import './SharePost.css'
import Profile from '../../img/profileImg.jpg'
import { UilScenery, UilLocationPoint, UilPlayCircle, UilSchedule, UilTimes } from '@iconscout/react-unicons'

function SharePost() {
    const [image, setImage] = useState(null);
    const imageRef = useRef()

    const selectImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImage ({
                image: URL.createObjectURL(img)
            })

        }
    }
    return (
        <div className='SharePost'>
            <img src={Profile} alt="" />
            <div>
                <input type="text" placeholder="What's Happening" />
                <div className="PostOptions">
                    <div className="Option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="Option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="Option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="Option" style={{ color: "var(--schedule)" }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className='Button ShareButton'>Share</button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name='MyImage' ref={imageRef} onChange={selectImage} accept='image/*'/>
                    </div>
                </div>
                {image && (
                    <div className='PreviewImage'>
                    <UilTimes onClick={()=> setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SharePost