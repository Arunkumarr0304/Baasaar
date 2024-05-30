import Onboard1 from "../assets/images/Onboard1.svg";
import Onboard2 from "../assets/images/Onboard2.svg";
import Onboard3 from "../assets/images/Onboard3.svg";

import Google from "../assets/images/google.svg";
import Facebook from "../assets/images/facebook.svg";

import Forget from "../assets/images/Circle_mail.svg";

import Bg from "../assets/images/slider_bg.svg";
import Slider_right from "../assets/images/slider_right_image.svg";

import Slider1 from "../assets/images/slider_vector1.svg";
import Slider2 from "../assets/images/slider_vector2.svg";
import Slider3 from "../assets/images/slider_vector3.svg";
import Slider4 from "../assets/images/slider_vector4.svg";
import Slider5 from "../assets/images/slider_vector5.svg";
import Active_slider1 from "../assets/images/white_slider_vector1.svg";
import Active_slider2 from "../assets/images/white_slider_vector2.svg";
import Active_slider3 from "../assets/images/white_slider_vector3.svg";
import Active_slider4 from "../assets/images/white_slider_vector4.svg";
import Active_slider5 from "../assets/images/white_slider_vector5.svg";

import Feature1 from "../assets/images/feature1.svg";
import Feature2 from "../assets/images/feature2.svg";
import Feature3 from "../assets/images/feature3.svg";
import Feature4 from "../assets/images/feature4.svg";

export const pages = [
    {
        id: 1,
        heading: 'Welcome To',
        heading2 : 'Baasaar',
        image: <Onboard1 />,
        Text: 'Stay stylish with our best-selling clothing and accessories for every season.',
        
    },
    {
        id: 2,
        heading: 'Electronics &',
        heading2: 'Gadgets',
        image: <Onboard2 />,
        Text: 'Stay stylish with our best-selling clothing and accessories for every season.',

    },
    {
        id: 3,
        heading: 'Fashion &',
        heading2: 'Accessories',
        image: <Onboard3 />,
        Text: 'Stay stylish with our best-selling clothing and accessories for every season.',

    },
]

export const login_items = [
    {
        id: 1,
        image: <Google />,
    },
    {
        id: 2,
        image: <Facebook />,
    }
]

export const forget_data = [
    {
        id: 1,
        image: <Forget />,
        heading: "Email",
        text: "minatonami@example.com",

    }
]

export const slider_data = [
    {
        id: 1,
        background_image: <Bg />,
        right: <Slider_right />,
        heading: "Shop with us!",
        heading2 : "Get",
        heading3 : " Off for all items",
        percentage: ' 40%',
        shop: 'Shop Now',
    },
    {
        id: 2,
        background_image: <Bg />,
        right: <Slider_right />,
        heading: "Shop with us!",
        heading2 : "Get",
        heading3 : " Off for all items",
        percentage: ' 40%',
        shop: 'Shop Now',
    },
    {
        id: 3,
        background_image: <Bg />,
        right: <Slider_right />,
        heading: "Shop with us!",
        heading2 : "Get",
        heading3 : " Off for all items",
        percentage: ' 40%',
        shop: 'Shop Now',
    },
]

export const scroll_slider = [
    {
        id: 1,
        image: <Slider1 />,
        active: <Active_slider1 />,
        text: 'Women',
    },
    {
        id: 2,
        image: <Slider2 />,
        active: <Active_slider2 />,
        text: 'Men',
    },
    {
        id: 3,
        image: <Slider3 />,
        active: <Active_slider3 />,
        text: 'Shoes',
    },
    {
        id: 4,
        image: <Slider4 />,
        active: <Active_slider4 />,
        text: 'Accessories',
    },
    {
        id: 5,
        image: <Slider5 />,
        active: <Active_slider5 />,
        text: 'Beauty',
    },
    {
        id: 6,
        image: <Slider1 />,
        active: <Active_slider1 />,
        text: 'Women',
    },
]

export const feature_data = [
    {
        id: 1,
        image: <Feature1 />,
        heading: "Turtleneck Sweater",
        price: "$ 39.99",
    },
    {
        id: 2,
        image: <Feature2 />,
        heading: "Long Sleeve Dress",
        price: "$ 45.00",
    },
    {
        id: 3,
        image: <Feature3 />,
        heading: "Sportwear Set",
        price: "$ 80.00",
    },
    {
        id: 4,
        image: <Feature4 />,
        heading: "Elegant Dress",
        price: "$ 75.00",
    },
]