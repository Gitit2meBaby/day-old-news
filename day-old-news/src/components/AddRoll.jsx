import hungry from "../../public/assets/hungry-ad.mp4"
import ad from "../../public/assets/Ad.mp4"

export const AddRoll = () => {
    return (
        <div className="video-container">
            <video src={hungry} preload="none" type="video/mp4" autoPlay muted loop></video>
            <video src={ad} preload="none" type="video/mp4" autoPlay muted loop></video>
        </div>
    )
}
