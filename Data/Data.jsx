import Onboard1 from "../assets/images/Onboard1.png";
import Onboard2 from "../assets/images/Onboard2.png";
import Onboard3 from "../assets/images/Onboard3.png";

import Google from "../assets/images/google.svg";
import Facebook from "../assets/images/facebook.svg";
import Forget from "../assets/images/Circle_mail.svg";
import Bg from "../assets/images/slider_bg.png";
import Slider_right from "../assets/images/slider_right_image.png";

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

import Feature1 from "../assets/images/feature1.png";
import Feature2 from "../assets/images/feature2.png";
import Feature3 from "../assets/images/feature3.png";
import Feature4 from "../assets/images/feature4.png";
import Feature5 from "../assets/images/feature5.png";
import Feature6 from "../assets/images/feature6.png";
import Feature7 from "../assets/images/feature7.png";
import Feature8 from "../assets/images/feature4.png";

import Recommend1 from "../assets/images/recommend1.svg";
import Recommend2 from "../assets/images/recommend2.svg";

import Collection2 from "../assets/images/collection2.png";
import Collection3 from "../assets/images/collection3.png";

import Star from "../assets/images/Star.svg";
import White_Star from "../assets/images/White_star.svg";

import Watch1 from "../assets/images/watch1.png";
import Watch2 from "../assets/images/watch2.png";
import Watch3 from "../assets/images/watch3.png";
import Watch4 from "../assets/images/watch4.png";
import Watch5 from "../assets/images/watch5.png";
import Watch6 from "../assets/images/watch6.png";

import Cart1 from "../assets/images/cart_img1.svg";
import Cart2 from "../assets/images/cart_img2.svg";

import Card1 from "../assets/images/card1.png";
import Card2 from "../assets/images/card2.png";
import Card3 from "../assets/images/card3.png";

import Pay1 from "../assets/images/pay1.svg";
import Pay2 from "../assets/images/pay2.svg";
import Pay3 from "../assets/images/pay3.svg";
import Pay4 from "../assets/images/pay4.svg";
import Pay5 from "../assets/images/pay5.svg";

import Wishlist1 from "../assets/images/wishlist1.png";
import Wishlist2 from "../assets/images/wishlist2.png";

import Category1 from "../assets/images/category1.png";
import Category2 from "../assets/images/category2.png";
import Category3 from "../assets/images/category3.png";
import Category4 from "../assets/images/category4.png";
import Category5 from "../assets/images/category5.png";

import Opened from "../assets/images/opened.svg";
import NotOpened from "../assets/images/notopened.svg";

import Profile_icon1 from "../assets/images/profile_icon1.svg";
import Profile_icon2 from "../assets/images/profile_icon2.svg";
import Profile_icon3 from "../assets/images/profile_icon3.svg";
import Profile_icon4 from "../assets/images/profile_icon4.svg";
import Profile_icon5 from "../assets/images/profile_icon5.svg";
import Profile_icon6 from "../assets/images/profile_icon6.svg";
import Dark_Profile_icon1 from "../assets/images/dark_profile_icon1.svg";
import Dark_Profile_icon2 from "../assets/images/dark_profile_icon2.svg";
import Dark_Profile_icon3 from "../assets/images/dark_profile_icon3.svg";
import Dark_Profile_icon4 from "../assets/images/dark_profile_icon4.svg";
import Dark_Profile_icon5 from "../assets/images/dark_profile_icon5.svg";
import Dark_Profile_icon6 from "../assets/images/dark_profile_icon6.svg";

import Tick from "../assets/images/tick.png";
import Red_Tick from "../assets/images/red-tick.png";

export const pages = [
    {
        id: 1,
        heading: 'Welcome To',
        heading2 : 'Baasaar',
        image: Onboard1,
        Text: 'Stay stylish with our best-selling clothing and accessories for every season.',
        
    },
    {
        id: 2,
        heading: 'Electronics &',
        heading2: 'Gadgets',
        image: Onboard2,
        Text: 'Stay stylish with our best-selling clothing and accessories for every season.',

    },
    {
        id: 3,
        heading: 'Fashion &',
        heading2: 'Accessories',
        image: Onboard3,
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
        background_image: Bg,
        right: Slider_right,
        heading: "Shop with us!",
        heading2 : "Get",
        heading3 : " Off for all items",
        percentage: ' 40%',
        shop: 'Shop Now',
    },
    {
        id: 2,
        background_image: Bg,
        right: Slider_right,
        heading: "Shop with us!",
        heading2 : "Get",
        heading3 : " Off for all items",
        percentage: ' 40%',
        shop: 'Shop Now',
    },
    {
        id: 3,
        background_image: Bg,
        right: Slider_right,
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
]

export const feature_data = [
    {
        id: 1,
        image: Feature1 ,
        heading: "Turtleneck Sweater",
        price: " 39.99",
    },
    {
        id: 2,
        image: Feature2,
        heading: "Long Sleeve Dress",
        price: " 45.00",
    },
    {
        id: 3,
        image: Feature3,
        heading: "Sportwear Set",
        price: " 80.00",
    },
    {
        id: 4,
        image: Feature4,
        heading: "Elegant Dress",
        price: " 75.00",
    },
    {
        id: 5,
        image: Feature5,
        heading: "Apple Watch SE",
        price: " 39.99",
    },
    {
        id: 6,
        image: Feature6,
        heading: "Apple Watch SE",
        price: " 45.00",
    },
    {
        id: 7,
        image: Feature7,
        heading: "Long Sleeve Dress",
        price: " 80.00",
    },
    {
        id: 8,
        image: Feature8,
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
        image: Collection2,
        heading: 'T-Shirts',
        text: 'The Office Life',
    },
    {
        id: 2,
        image: Collection3,
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



export const discount_data = [
    {
        id: 1,
        offer: '50% off',
    },
    {
        id: 2,
        offer: '40% off',
    },
    {
        id: 3,
        offer: '30% off',
    },
    {
        id: 4,
        offer: '25% off',
    },
]

export const products_data = [
    {
        id: 1,
        image: Watch1,
        Name: 'Apple Watch SE',
        rating: '4.9',
        brand: 'Apple',
        dashed: '$799',
        price: '349.99',
    },
    {
        id: 2,
        image: Watch2,
        Name: 'Apple Watch ultra',
        rating: '4.9',
        brand: 'Apple',
        dashed: '$799',
        price: '249.99',
    },
    {
        id: 3,
        image: Watch3,
        Name: 'Apple watch series',
        rating: '4.9',
        brand: 'Apple',
        price: '199.99',
    },
    {
        id: 4,
        image: Watch4,
        Name: 'Fastrack vyb mirage',
        rating: '4.9',
        brand: 'Apple',
        price: '279.99',
    },
    {
        id: 5,
        image: Watch5,
        Name: 'sonata poze quartz',
        rating: '4.9',
        brand: 'Apple',
        price: '349.99',
    },
    {
        id: 6,
        image: Watch6,
        Name: 'Titan minimalist',
        rating: '4.9',
        brand: 'Apple',
        price: '349.99',
    },

]

export const circle_data2 = [
    {
        id: 1,
        backgroundColor: "#FFB709",
        text: 'yellow',
    },
    {
        id: 2,
        backgroundColor: "#839E76",
        text: 'green',
    },
    {
        id: 3,
        backgroundColor: "#FF0000",
        text: 'red',
    },
]

export const details_review = [
    {
        id: 1,
        heading: 'details',
        description : 'Smartwatches have become increasingly popular as multifunctional devices that integrate seamlessly with smartphones and offer a range of features to enhance daily life',
    },
    {
        id: 2,
        heading: 'review', 
        description: 'watches have become increasingly popular as multifunctional devices that integrate seamlessly with smartphones and offer a range of features to enhance daily life',
    }
]

export const cart_data = [
    {
        id: 1,
        image: <Cart1 />,
        name: 'Apple Watch SE Gen 2',
        delivery: 'Free Delivery',
        dashed: '$280',
        price: '200',
        count: 1,
    },
    {
        id: 2,
        image: <Cart2 />,
        name: 'Long Sleeve Dress',
        option: 'size',
        size: 'xl',
        delivery: 'Free Delivery',
        dashed: '$280',
        price: '200',
        count: 1,
    }
]



export const shipping_method = [
    {
        id: 1,
        method: 'Free',
        to: 'Delivery to home',
        time: 'Delivery from 3 to 7 business days',
    },
    {
        id: 2,
        method: '$ 9.90',
        to: 'Delivery to home',
        time: 'Delivery from 4 to 6 business days',
    },
    {
        id: 3,
        method: '$ 9.90',
        to: 'Fast Delivery',
        time: 'Delivery from 2 to 3 business days',
    },
]

export const payment_data = [
    {
        id: 1,
        image: Card1,
        cardno: '4364   1345   8932   8378',
        head1: "CARDHOLDER NAME",
        head2: 'Minato Namikaza',
        name: 'VALID THRU',
        date: '05/24',
    },
    {
        id: 2,
        image: Card2,
        cardno: '4364   1345   8932   8378',
        head1: "CARDHOLDER NAME",
        head2: 'Minato Namikaza',
        name: 'VALID THRU',
        date: '05/24',
    },
    {
        id: 3,
        image: Card3,
        cardno: '4364   1345   8932   8378',
        head1: "CARDHOLDER NAME",
        head2: 'Minato Namikaza',
        name: 'VALID THRU',
        date: '05/24',
    }
]

export const price_data = [
    {
        id: 1,
        heading: 'Product price',
        value: '$11',
    },
    {
        id: 2,
        heading: 'Shipping',
        value: 'Freeship',
    },
]

export const pay_types =[
    {
        id: 1,
        image: <Pay1 />,
    },
    {
        id: 2,
        image: <Pay2 />,
    },
    {
        id: 3,
        image: <Pay3 />,
    },
    {
        id: 4,
        image: <Pay4 />,
    },
    {
        id: 5,
        image: <Pay5 />,
    }
]

export const wishlist_data = [
    {
        id: 1,
        image: Wishlist1,
        heading: "Amazfit GTS 2",
        text: "ipsum dolor sit amet consectetur",
        price: "$199.99",
    },
    {
        id: 2,
        image: Wishlist2,
        heading: "Amazfit GTS 2",
        text: "Lorem ipsum dolor sit consectetur",
        price: "$80.00",
    },
    {
        id: 3,
        image: Wishlist1,
        heading: "Amazfit GTS 2",
        text: "ipsum dolor sit amet consectetur",
        price: "$199.99",
    },
    {
        id: 4,
        image: Wishlist2,
        heading: "Amazfit GTS 2",
        text: "Lorem ipsum dolor sit consectetur",
        price: "$80.00",
        },
]

export const category_tab = [
    {
        id: 1,
        name: 'all',
    },
    {
        id: 2,
        name: 'female',
    },
    {
        id: 3,
        name: 'male',
    },
    {
        id: 4,
        name: 'kids',
    },
]

export const category_data = [
    {
        id: 1,
        image: Category1,
        name: 'Clothing',
        content: [
            {
                id: 1,
                content1: "Dresses",
                content2: "Pants",
                content3: "Skirts",
                content4: "Shorts",
                content5: "Jackets",
                content6: "Hoodies",
                content7: "Shirts",
                content8: "Polo",
                content9: 'T-Shirts',
                content10: 'Tunics',
            }
        ]
    },
    {
        id: 2,
        image: Category2,
        name: 'Shoes',
        content: [
            {
                id: 1,
                content1: "Dresses",
                content2: "Pants",
                content3: "Skirts",
                content4: "Shorts",
                content5: "Jackets",
                content6: "Hoodies",
                content7: "Shirts",
                content8: "Polo",
                content9: 'T-Shirts',
                content10: 'Tunics',
            }
        ]
    },
    {
        id: 3,
        image: Category3,
        name: 'Bags',
        content: [
            {
                id: 1,
                content1: "Dresses",
                content2: "Pants",
                content3: "Skirts",
                content4: "Shorts",
                content5: "Jackets",
                content6: "Hoodies",
                content7: "Shirts",
                content8: "Polo",
                content9: 'T-Shirts',
                content10: 'Tunics',
            }
        ]
    },
    {
        id: 4,
        image: Category4,
        name: 'Lingerie',
        content: [
            {
                id: 1,
                content1: "Dresses",
                content2: "Pants",
                content3: "Skirts",
                content4: "Shorts",
                content5: "Jackets",
                content6: "Hoodies",
                content7: "Shirts",
                content8: "Polo",
                content9: 'T-Shirts',
                content10: 'Tunics',
            }
        ]
    },
    {
        id: 5,
        image: Category5,
        name: 'Accessories',
        content: [
            {
                id: 1,
                content1: "Dresses",
                content2: "Pants",
                content3: "Skirts",
                content4: "Shorts",
                content5: "Jackets",
                content6: "Hoodies",
                content7: "Shirts",
                content8: "Polo",
                content9: 'T-Shirts',
                content10: 'Tunics',
            }
        ]
    },
];

export const notification_data = [
    {
        id: 1,
        image: <NotOpened />,
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
    {
        id: 2,
        image: <NotOpened />,
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
    },
    {
        id: 3,
        image: <NotOpened />,
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con',
    },
    {
        id: 4,
        image: <NotOpened />,
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
    },
    {
        id: 5,
        image: <Opened />,
        text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma',
    },
    {
        id: 6,
        image: <NotOpened />,
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
    },
    {
        id: 7,
        image: <Opened />,
        text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu',
    },

]


export const profile_data = [
    {
        id: 1,
        icon: <Profile_icon1 />,
        Dark_icon: <Dark_Profile_icon1 />,
        name: 'My Orders',
    },
    {
        id: 2,
        icon: <Profile_icon2 />,
        Dark_icon: <Dark_Profile_icon2 />,
        name: 'Payments Methods',
    },
]

export const profile_data2 = [
    {
        id: 1,
        icon: <Profile_icon3 />,
        Dark_icon: <Dark_Profile_icon3 />,
        name: 'Notifications',
    },
    {
        id: 2,
        icon: <Profile_icon4 />,
        Dark_icon: <Dark_Profile_icon4 />,
        name: 'Dark mode',
    },
]

export const profile_data3 = [
    {
        id: 1,
        icon: <Profile_icon5 />,
        Dark_icon: <Dark_Profile_icon5 />,
        name: 'Support',
    },
    {
        id: 2,
        icon: <Profile_icon6 />,
        Dark_icon: <Dark_Profile_icon6 />,
        name: 'Logout',
    },
]


export const ordered_data = [
    {
        id: 1,
        name: 'Order  #0D6765',
        items: '4 items',
    },
    {
        id: 2,
        name: 'Order  #0D6765',
        items: '7 items',
    },
]

export const ordered_data2 = [
    {
        id: 1,
        name: 'Order  #0D6765',
        items: '18 items',
    },
    {
        id: 2,
        name: 'Order  #0D6765',
        items: '2 items',
    },
]


export const details_data = [
    {
        id: 1,
        heading: 'Order Date',
        value: '20/08/2024',
    },
    {
        id: 2,
        heading: 'Order No',
        value: '#0D6765',
    },
    {
        id: 3,
        heading: 'Total Price',
        value: '$ 579',
    },
]

export const details_data2 = [
    {
        id: 1,
        icon: Red_Tick,
        heading: 'Order Placed',
        value: '20 Dec',
    },
    {
        id: 2,
        icon: Red_Tick,
        heading: 'Order Confirmed',
        value: '22 Dec',
    },
    {
        id: 3,
        icon: Red_Tick,
        heading: 'Shipped',
        value: '24 Dec',
    },
    {
        id: 4,
        icon: Tick,
        heading: 'Delivery on',
        value: '27 Dec',
    },
]


export const payment_data2 = [
    {
        id: 1,
        image: Card3,
        cardno: '4364 1345 8932 8378',
        head1: "CARDHOLDER NAME",
        head2: 'Minato Namikaza',
        name: 'VALID THRU',
        date: '05/24',
    },
    {
        id: 2,
        image: Card2,
        cardno: '4364 1345 8932 8378',
        head1: "CARDHOLDER NAME",
        head2: 'Minato Namikaza',
        name: 'VALID THRU',
        date: '05/24',
    }
]

export const input_datas = [
    {
        id: 1,
        label: 'First Name',
        placeholder: 'John Doe',
    }, 
    {
        id: 2,
        label:  'Last Name',
        placeholder: 'John Doe',
    },
    {
        id: 3,
        label:  'Street Name',
        placeholder: 'Street',
    },
    {
        id: 4,
        label:  'City',
        placeholder: 'City',
    },
    {
        id: 5,
        label:  'State',
        placeholder: 'State',
    },
    {
        id: 6,
        label:  'ZIP Code',
        placeholder: '573021',
    },
    {
        id: 7,
        label:  'Phone Number',
        placeholder: 'Enter phone number',
    },
]

     