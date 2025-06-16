import "./Result.css"
import photo from "../../assets/photo.png"

function Result(props){
    return(
        <>
        <section className="result-container">
            <img src={photo}/>
            <div className="num-result">You selected {props.number} out of 5</div>
            <h2 className="thanks">Thank you!</h2>
            <p className="res-para">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </section>
        </>
    )
}

export default Result