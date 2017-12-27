import React from 'react';
import ReactDom from 'react-dom';

import SwiperSlides from 'component/bodycomponent/swiper.slides.components.js';


class BodyNews extends React.Component  {
	render() {
		return (
			<div className="swiper-container">
		        <div className="swiper-wrapper">
		            <SwiperSlides />
		        </div>
		        <div className="swiper-pagination"></div>
		        <div className="swiper-button-next"></div>
		        <div className="swiper-button-prev"></div>
		    </div>
			)
		}
	}
export default BodyNews;