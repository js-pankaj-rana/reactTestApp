import React from 'react';


class SwiperSlides extends React.Component {
			render(){
			return( <div className="swiper-slide">
            	<div className="panel panel-primary">
            		<div className="panel-heading">{}</div>
            		<div className="panel-body">
						<img src="{}" width="" className="img-responsive" />
						<div className="news-content">
							{}
						</div>
            		</div>
            	</div>
            </div>
            )
          }
       }
export default SwiperSlides;