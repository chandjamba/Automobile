import "./homepage.scss";

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage__rental-car-cards-container">
                <div className="homepage__rental-car-card1">CARD-1</div>
                <div className="homepage__rental-car-card2">CARD-2</div>
            </div>

            <div className="homepage__pick-drop-container">
            <div className="homepage__pickup-container">
                <div className="homepage__pickup-heading-box">
                    <p className="homepage__pickup-heading">Pick-Up</p>
                </div>
                <div className="homepage__pickup-selection-container">
                    <div className="homepage__pickup-locations-box">
                        <p className="homepage__pickup-locations-heading">Locations</p>
                        <select className="homepage__pickup-locations"
                                placeholder="Select"                      
                        >
                            <option>Batala</option>
                            <option>Qadian</option>
                            <option>Amritsar</option>
                            <option>Gurdaspur</option>
                            <option>Ludhiana</option>
                            <option>Jalandhar</option>

                        </select>
                    </div>
                    <div className="homepage__pickup-date-box">
                    <p className="homepage__pickup-date-heading">Date</p>
                        <select className="homepage__pickup-date"
                                placeholder="Select"                      
                        >
                            <option>Batala</option>
                            <option>Qadian</option>
                            <option>Amritsar</option>
                            <option>Gurdaspur</option>
                            <option>Ludhiana</option>
                            <option>Jalandhar</option>

                        </select>
                    </div>
                    <div className="homepage__pickup-time-box">
                    <p className="homepage__pickup-time-heading">Time</p>
                        <select className="homepage__pickup-time"
                                placeholder="Select"                      
                        >
                            <option>Batala</option>
                            <option>Qadian</option>
                            <option>Amritsar</option>
                            <option>Gurdaspur</option>
                            <option>Ludhiana</option>
                            <option>Jalandhar</option>

                        </select>
                    </div>
                </div>
            </div>

            <button className="homepage__swap-btn">SWAP</button>    

            <div className="homepage__dropoff-container">
                <div className="homepage__dropoff-heading-box">
                    <p className="homepage__dropoff-heading">Drop-Off</p>
                </div>
                <div className="homepage__dropoff-selection-container">
                    <div className="homepage__dropoff-locations-box">
                        <p className="homepage__dropoff-locations-heading">Locations</p>
                        <select className="homepage__dropoff-locations"
                                placeholder="Select"                      
                        >
                            <option>Batala</option>
                            <option>Qadian</option>
                            <option>Amritsar</option>
                            <option>Gurdaspur</option>
                            <option>Ludhiana</option>
                            <option>Jalandhar</option>

                        </select>
                    </div>
                    <div className="homepage__pickup-date-box">
                    <p className="homepage__pickup-date-heading">Date</p>
                        <select className="homepage__pickup-date"
                                placeholder="Select"                      
                        >
                            <option>Batala</option>
                            <option>Qadian</option>
                            <option>Amritsar</option>
                            <option>Gurdaspur</option>
                            <option>Ludhiana</option>
                            <option>Jalandhar</option>

                        </select>
                    </div>
                    <div className="homepage__pickup-time-box">
                    <p className="homepage__pickup-time-heading">Time</p>
                        <select className="homepage__pickup-time"
                                placeholder="Select"                      
                        >
                            <option>Batala</option>
                            <option>Qadian</option>
                            <option>Amritsar</option>
                            <option>Gurdaspur</option>
                            <option>Ludhiana</option>
                            <option>Jalandhar</option>

                        </select>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}