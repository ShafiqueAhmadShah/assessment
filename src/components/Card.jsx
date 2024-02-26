import React, { Component } from "react";
import Slider from "react-slick";
import './Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pia from '../image/pia.png'
import airblue from '../image/ab.png'
import airsial from '../image/as.png'
import seren from '../image/sa.png'
import emirates from '../image/emirates.png'
import thai from '../image/thai.jfif'






export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],

        };
        return (
            <div className="main-slick">
                <Slider {...settings}>

                    <div className="main-card">

                        <Card className="card-man">
                            <Card.Img variant="top" src={pia} />
                            <Card.Body className="content-div">
                                <Card.Title>PIA Air Promotional Fares</Card.Title>
                                <Card.Text>
                                    PIA Special Flights Resumed
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>


                    </div>

                    <div className="main-card">

                        <Card className="card-man">
                            <Card.Img variant="top" src={airblue} />
                            <Card.Body className="content-div">
                                <Card.Title>Airblue Air Promotional Fares</Card.Title>
                                <Card.Text>
                                    Airblue Deals
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>

                    </div>


                    <div className="main-card">

                        <Card className="card-man">
                            <Card.Img variant="top" src={seren} />
                            <Card.Body className="content-div">
                                <Card.Title>Serene Air Promotional Fares</Card.Title>
                                <Card.Text>
                                    Applicable on Serene Air Flights
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>

                    </div>


                    <div className="main-card">

                        <Card className="card-man">
                            <Card.Img variant="top" src={thai} />
                            <Card.Body className="content-div">
                                <Card.Title>Thai Air Promotional Fares</Card.Title>
                                <Card.Text>
                                    Book Thai Tickets
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>

                    </div>

                    <div className="main-card">
                        <Card className="card-man">
                            <Card.Img variant="top" src={airsial} style={{ width: '100%' }} />
                            <Card.Body className="content-div">
                                <Card.Title>AirSial Air Promotional Fares</Card.Title>
                                <Card.Text>
                                    Book AirSial Tickets
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="main-card">

                        <Card className="card-man">
                            <Card.Img variant="top" src={emirates} />
                            <Card.Body className="content-div">
                                <Card.Title>Emirates Air Promotional Fares</Card.Title>
                                <Card.Text>
                                    Reserve Emirates Air Tickets
                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </Slider>
            </div>
        );
    }
}