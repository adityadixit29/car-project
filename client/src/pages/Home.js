import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Col, Row, Divider, DatePicker, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';
import moment from 'moment'




const { RangePicker } = DatePicker
function Home() {
    const { cars } = useSelector(state => state.carsReducer)
    const { loading } = useSelector(state => state.alertsReducer)
    const [totalCars, setTotalcars] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)

    }, [cars])


    function setFilter(values) {

        var selectedFrom = moment(values[0], 'MMM DD yyyy HH:mm')
        var selectedTo = moment(values[1], 'MMM DD yyyy HH:mm')

        var temp = []

        for (var car of cars) {

            if (car.bookedTimeSlots.length == 0) {
                temp.push(car)
            }
            else {

                for (var booking of car.bookedTimeSlots) {

                    if (selectedFrom.isBetween(booking.from, booking.to) ||
                        selectedTo.isBetween(booking.from, booking.to) ||
                        moment(booking.from).isBetween(selectedFrom, selectedTo) ||
                        moment(booking.to).isBetween(selectedFrom, selectedTo)
                    ) {

                    }
                    else {
                        temp.push(car)
                    }

                }

            }

        }


        setTotalcars(temp)


    }

    return (
        <>
            <DefaultLayout>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="model-search-content" style={{ zIndex: 1 }}>
                                <div className="row">
                                    <div className="col-md-offset-1 col-md-2 col-sm-12">
                                        <div className="">
                                            <h2 style={{margin:'7px', fontSize:'16px'}}> select year</h2>
                                            <div className="" style={{ width: "100px" }}>
                                                <section className="" style={{ width: "257px", marginBottom: "40px" }}>

                                                    <RangePicker
                                                        showTime={{ format: 'HH:mm' }}
                                                        format='MMM DD yyyy HH:mm'
                                                        onChange={setFilter}
                                                        style={{
                                                            padding: '20px',
                                                            outline: 'none',
                                                            border: 'none',
                                                            background: '#f8f8f8',
                                                            color: '#888f9d'
                                                        }}
                                                    />

                                                </section>
                                            </div>
                                        </div>
                                        <div className="single-model-search">
                                            <h2>body style</h2>
                                            <div className="model-select-icon">
                                                <select className="form-control">

                                                    <option value="default">style</option>
                                                    <option value="sedan">sedan</option>

                                                    <option value="van">van</option>
                                                    <option value="roadster">roadster</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-offset-1 col-md-2 col-sm-12">
                                        <div className="single-model-search">
                                            <h2>select make</h2>
                                            <div className="model-select-icon">
                                                <select className="form-control">

                                                    <option value="default">make</option>

                                                    <option value="toyota">toyota</option>

                                                    <option value="holden">holden</option>
                                                    <option value="maecedes-benz">maecedes-benz.</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="single-model-search">
                                            <h2>car condition</h2>
                                            <div className="model-select-icon">
                                                <select className="form-control">

                                                    <option value="default">condition</option>

                                                    <option value="something">something</option>
                                                    <option value="something">something</option>
                                                    <option value="something">something</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-offset-1 col-md-2 col-sm-12">
                                        <div className="single-model-search">
                                            <h2>select model</h2>
                                            <div className="model-select-icon">
                                                <select className="form-control">

                                                    <option value="default">model</option>

                                                    <option value="kia-rio">kia-rio</option>

                                                    <option value="mitsubishi">mitsubishi</option>
                                                    <option value="ford">ford</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="single-model-search">
                                            <h2>select price</h2>
                                            <div className="model-select-icon">
                                                <select className="form-control">

                                                    <option value="default">price</option>

                                                    <option value="$0.00">$0.00</option>

                                                    <option value="$0.00">$0.00</option>
                                                    <option value="$0.00">$0.00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-12">
                                        <div className="single-model-search text-center">
                                            <button className="welcome-btn model-search-btn" onclick="window.location.href='#'">
                                                search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* cars */}
                <section id="featured-cars" class="featured-cars">
			<div class="container">
				<div class="section-header" style={{padding:'61px'}}>
					<p>checkout <span>the</span> featured cars</p>
					<h2 >featured cars</h2>
				</div>
                {loading === true && (<Spinner />)}
                 {totalCars && totalCars.map(car => {
				return <div class="" >
					<div class="" style={{marign:'10px'}}>
						<div class="col-lg-3 col-md-4 col-sm-6">
							<div class="single-featured-cars">
								<div class="featured-img-box">
									<div class="featured-cars-img">
										<img src={car.image} className="carimg" alt='alt'/>
									</div>
									<div class="featured-model-info">
										<p>
											model: 2017
											<span class="featured-mi-span"> 3100 mi</span> 
											<span class="featured-hp-span"> 240HP</span>
											 automatic
										</p>
									</div>
								</div>
								<div class="featured-cars-txt">
									<h2><p>{car.name}</p></h2>
									<h3>Rent Per Hour {car.rentPerHour}</h3>
									<div>
                                        <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                                    </div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
                 })}
			</div>

		</section>
    
    {/* bottom section */}
	
		<section id="blog" class="blog"></section>
		
		<footer id="contact"  class="contact">
			<div class="container">
				<div class="footer-top">
					<div class="row">
						<div class="col-md-3 col-sm-6">
							<div class="single-footer-widget">
								<div class="footer-logo">
									<a href="index.html">carvilla</a>
								</div>
								<p>
									Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.
								</p>
								<div class="footer-contact">
									<p>info@themesine.com</p>
									<p>+1 (885) 2563154554</p>
								</div>
							</div>
						</div>
						<div class="col-md-2 col-sm-6">
							<div class="single-footer-widget">
								<h2>about devloon</h2>
								<ul>
									<li><a href="#">about us</a></li>
									<li><a href="#">career</a></li>
									<li><a href="#">terms <span> of service</span></a></li>
									<li><a href="#">privacy policy</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-3 col-xs-12">
							<div class="single-footer-widget">
								<h2>top brands</h2>
								<div class="row">
									<div class="col-md-7 col-xs-6">
										<ul>
											<li><a href="#">BMW</a></li>
											<li><a href="#">lamborghini</a></li>
											<li><a href="#">camaro</a></li>
											<li><a href="#">audi</a></li>
											<li><a href="#">infiniti</a></li>
											<li><a href="#">nissan</a></li>
										</ul>
									</div>
									<div class="col-md-5 col-xs-6">
										<ul>
											<li><a href="#">ferrari</a></li>
											<li><a href="#">porsche</a></li>
											<li><a href="#">land rover</a></li>
											<li><a href="#">aston martin</a></li>
											<li><a href="#">mersedes</a></li>
											<li><a href="#">opel</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-offset-1 col-md-3 col-sm-6">
							<div class="single-footer-widget">
								<h2>news letter</h2>
								<div class="footer-newsletter">
									<p>
										Subscribe to get latest news  update and informations
									</p>
								</div>
								<div class="hm-foot-email">
									<div class="foot-email-box">
										{/* <input type="text" class="form-control" placeholder="Add Email"> */}
									</div>
									<div class="foot-email-subscribe">
										<span><i class="fa fa-arrow-right"></i></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-copyright">
					<div class="row">
						<div class="col-sm-6">
							<p>
								&copy; copyright.designed and developed by <a href="https://www.themesine.com/">themesine</a>.
							</p>
						</div>
						<div class="col-sm-6">
							<div class="footer-social">
								<a href="#"><i class="fa fa-facebook"></i></a>	
								<a href="#"><i class="fa fa-instagram"></i></a>
								<a href="#"><i class="fa fa-linkedin"></i></a>
								<a href="#"><i class="fa fa-pinterest-p"></i></a>
								<a href="#"><i class="fa fa-behance"></i></a>	
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="scroll-Top">
				<div class="return-to-top">
					<i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div>
				
			</div>
			
        </footer>
		


		
	

		<script src="assets/js/jquery.js"></script>
        
     
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
		
	
        <script src="assets/js/bootstrap.min.js"></script>
	
		<script src="assets/js/bootsnav.js"></script>

	
        <script src="assets/js/owl.carousel.min.js"></script>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

      
        <script src="assets/js/custom.js"></script>
        
            </DefaultLayout>
        </>

    )
}

export default Home
