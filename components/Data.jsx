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
        text: 'Women',
    },
    {
        id: 2,
        image: <Slider2 />,
        text: 'Men',
    },
    {
        id: 3,
        image: <Slider3 />,
        text: 'Shoes',
    },
    {
        id: 4,
        image: <Slider4 />,
        text: 'Accessories',
    },
    {
        id: 5,
        image: <Slider5 />,
        text: 'Beauty',
    },
]