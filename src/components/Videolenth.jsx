import React from 'react'
import moment from "moment";

const Videolenth = ({ time }) => {

    const videoLengthInSeconds = moment()
    ?.startOf("day")
    ?.seconds(time)
    ?.format("H:mm:ss");
  return (
    <div>
       <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {videoLengthInSeconds}
        </span>
    </div>
  )
}

export default Videolenth
