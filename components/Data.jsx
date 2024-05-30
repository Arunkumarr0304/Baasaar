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
import Feature5 from "../assets/images/feature5.svg";
import Feature6 from "../assets/images/feature6.svg";
import Feature7 from "../assets/images/feature7.svg";
import Feature8 from "../assets/images/feature8.svg";

import Recommend1 from "../assets/images/recommend1.svg";
import Recommend2 from "../assets/images/recommend2.svg";

import Collection2 from "../assets/images/collection2.svg";
import Collection3 from "../assets/images/collection3.svg";

import Star from "../assets/images/Star.svg";
import White_Star from "../assets/images/White_star.svg";

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
        price: " 39.99",
    },
    {
        id: 2,
        image: <Feature2 />,
        heading: "Long Sleeve Dress",
        price: " 45.00",
    },
    {
        id: 3,
        image: <Feature3 />,
        heading: "Sportwear Set",
        price: " 80.00",
    },
    {
        id: 4,
        image: <Feature4 />,
        heading: "Elegant Dress",
        price: " 75.00",
    },
    {
        id: 5,
        image: <Feature5 />,
        heading: "Apple Watch SE",
        price: " 39.99",
    },
    {
        id: 6,
        image: <Feature6 />,
        heading: "Apple Watch SE",
        price: " 45.00",
    },
    {
        id: 7,
        image: <Feature7 />,
        heading: "Long Sleeve Dress",
        price: " 80.00",
    },
    {
        id: 8,
        image: <Feature8 />,
        heading: "Elegant Dress",
        price: " 75.00",
    },
    
]

export const recommend_data = [
    {
        id: 1,
        image: <Recommend1 />,
        heading: 'Apple Watch SE',
        price: '$ 299.00',
    },
    {
        id: 2,
        image: <Recommend2 />,
        heading: 'Cotton T-shirt',
        price: '$ 30.00',
    },
]

export const collection_data = [
    {
        id: 1,
        image: <Collection3 />,
        heading: 'T-Shirts',
        text: 'The Office Life',
    },
    {
        id: 2,
        image: <Collection2 />,
        heading: 'Dresses',
        text: 'Elegant Design',
    },
]


export const circle_data = [
    {
        id: 1,
        backgroundColor: "#FFB709",
    },
    {
        id: 2,
        backgroundColor: "#FF0000",
    },
    {
        id: 3,
        backgroundColor: "#151515",
    },
    {
        id: 4,
        backgroundColor: "#44565C",
    },
    {
        id: 5,
        backgroundColor: "#E4E4E4",
    },
    {
        id: 6,
        backgroundColor: "#6D4F44",
    },
    {
        id: 7,
        backgroundColor: "#DFA8A9" 
       },
]

export const circledata2 = [ 
    {
        id: 1,
        star: <Star />,
        White_Star: <White_Star />,
        number: '1',
    },
    {
        id: 2,
        star: <Star />,
        White_Star: <White_Star />,
        number: '2',
    },
    {
        id: 3,
        star: <Star />,
        White_Star: <White_Star />,
        number: '3',
    },
    {
        id: 4,
        star: <Star />,
        White_Star: <White_Star />,
        number: '4',
    },
    {
        id: 5,
        star: <Star />,
        White_Star: <White_Star />,
        number: '5',
    },
]