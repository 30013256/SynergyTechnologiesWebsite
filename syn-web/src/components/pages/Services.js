import React, { Component } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow } from 'swiper';

import CloudImg from '../images/server.png';
import LaptopImg from '../images/LaptopImg.jpg';
import Clouds from '../images/Clouds.jpg';
SwiperCore.use([EffectCoverflow]);

export class Services extends Component {
    
    state = {
        SlideTitle: [
            "Cloud Statergy",
            "Oher Title",
            "Oher Title 3",
            "Oher Title 4",
            "Oher Title 5",
            "Oher Title 6",
        ],
        SlideContent: [
            "Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore."
            ,
            "Other contents dsf gf g fgr jfj fj f sddddddd ffffdsdfs   fqwqejkjh sdf   sdfgf  fgh g fh fgadsg fd hgfhjfg dfgd h dhdfh fgh fg fgh fghfg"
            ,
            "Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore."
            ,
            "Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore."
            ,
            "Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore."
            ,
            "Et do reprehenderit magna officia aute tempor mollit exercitation sunt ad occaecat non duis. Qui sit elit irure veniam elit aliqua esse. Ut et anim ea ex incididunt amet est non pariatur. Aliquip ut et culpa laboris officia anim irure deserunt pariatur occaecat irure laborum laboris dolor. Velit proident laborum ex aute officia culpa commodo enim ex. Proident elit nostrud sint est. Laborum velit Lorem ullamco dolore."
        ],
        SlideBg: [
            Clouds,
            LaptopImg,
            Clouds,
            Clouds,
            Clouds,
            Clouds,
        ]
    }
    
    componentDidMount() {
        AOS.init({duration : 500})
    }

    render() {
        return (
            <>
                <div className={"section-header"} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Services
                </div>
                <div className="icons-container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a className="icon">
                        <img src={CloudImg}/>
                        <p>Title section area</p>
                    </a>
                    <a className="icon">
                        <img src={CloudImg}/>
                        <p>Title section area</p>
                    </a>
                    <a className="icon">
                        <img src={CloudImg}/>
                        <p>Title section area</p>
                    </a>
                    <a className="icon">
                        <img src={CloudImg}/>
                        <p>Title section area</p>
                    </a>
                    <a className="icon">
                        <img src={CloudImg}/>
                        <p>Title section area</p>
                    </a>
                    <a className="icon">
                        <img src={CloudImg}/>
                        <p>Title section area</p>
                    </a>
                </div>
                    
                <Swiper 
                    effect={'coverflow'} 
                    centeredSlides={true} 
                    slidesPerView={'2'}
                    coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true}}
                    className="swiper" 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="top-bottom"
                >
                {this.state.SlideTitle.map((slideTitle, index) => (
                    <SwiperSlide 
                        style={{backgroundImage: this.state.SlideBg[index]}} 
                        className="swiper-slide" 
                        key={slideTitle} 
                        virtualIndex={index}
                    >
                        <img src={this.state.SlideBg[index]}/>
                        <div>
                            <h1>{slideTitle}</h1>
                            <p>{this.state.SlideContent[index]}</p>
                        </div>
                    </SwiperSlide>
                ))}
                                
                </Swiper>
            </>
        )
    }
}

export default Services
