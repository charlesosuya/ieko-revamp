'use client'
import Image from "next/image"
import sliderImage1 from "../assets/images/sliders/slider-image-1.jpg"
import sliderImage2 from "../assets/images/sliders/slider-image-2.jpg"
import sliderImage3 from "../assets/images/sliders/slider-image-1.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Carousel = () => {
    const images = [sliderImage1, sliderImage2, sliderImage3]

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className='z-50 h-20 absolute '

                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className='z-50 h-20 absolute ml-32'

                onClick={onClick}
            />
        );
    }

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Slider {...settings}>
            <div>
                <Image src={sliderImage1} alt="slider one" className="w-full h-dvh object-cover" />
            </div>
            <div>
                <Image src={sliderImage2} alt="slider two" className="w-full h-dvh object-cover" />
            </div>
            <div>
                <Image src={sliderImage3} alt="slider three" className="w-full h-dvh object-cover" />
            </div>

        </Slider>
    )
}

export default Carousel