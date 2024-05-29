import Onboard1 from "../assets/images/Onboard1.svg";
import Onboard2 from "../assets/images/Onboard2.svg";
import Onboard3 from "../assets/images/Onboard3.svg";

import Google from "../assets/images/google.svg";
import Facebook from "../assets/images/facebook.svg";

import Forget from "../assets/images/Circle_mail.svg";

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