import calltoactionimg from "../icons_assets/restauranfood.jpg"


const CallToAction = () => {
    return (
        <div className="calltoaction">
            <div className="calltoaction-textarea">
                <h1 className="calltoaction-title">Little Lemon</h1>
                <h2 className="calltoaction-subtitle">Chicago</h2>
                <h3 className="calltoaction-text">We are a family owned Mediterranean resturant, focused on traditional recipes served with a mordern twist.</h3>
                <button className="calltoaction-btn">Reserve a Table</button>
            </div>
            <div className="calltoaction-imgarea"><img className="calltoaction-img" src={calltoactionimg} alt="CallToAction" /></div>
        </div>
    )
}

export default CallToAction