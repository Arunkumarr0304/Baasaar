import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Filter from "../../assets/images/Filter.svg";
import Dark_filter from "../../assets/images/dark_filter.svg";
import PriceSlider from '../Price_Slider/Price_Slider';
import { circle_data, circledata2, discount_data } from '../../Data/Data';
import Dress from "../../assets/images/Dress.svg";
import Drop from "../../assets/images/category_drop_down.svg";
import Dark_dress from "../../assets/images/dark_dress.svg";
import Dark_drop from "../../assets/images/dark_dropdown.svg";
import ThemeContext from '../../theme/ThemeContext';

const Filters = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [activeStar, setActiveStar] = useState(circledata2[1].id);
    const [selectedCategory, setSelectedCategory] = useState('Crop Tops');
    const [showCategoryOptions, setShowCategoryOptions] = useState(false);
    const [discounts, setDiscounts] = useState(discount_data);

    const handleStarPress = (id) => {
        setActiveStar(id);
    };

    const toggleCategoryOptions = () => {
        setShowCategoryOptions(!showCategoryOptions);
    };

    const selectCategory = (category) => {
        setSelectedCategory(category);
        setShowCategoryOptions(false);
    };

    const removeDiscount = (id) => {
        setDiscounts(discounts.filter((d) => d.id !== id));
    };

    return (
        <View style={styles.filter_content}>
            <View style={styles.header}>
                <Text style={[styles.heading, {color: theme.color}]}>Filter</Text>
              { darkMode ? <Dark_filter /> : <Filter />}
            </View>
            <Text style={[styles.price, {color: theme.color}]}>Price</Text>
            <PriceSlider />
            <Text style={[styles.price, {color: theme.color}]}>Colors</Text>
            <View style={styles.circle_container}>
                {circle_data.map((circle) => (
                    <TouchableOpacity key={circle.id} style={[styles.circle, { backgroundColor: circle.backgroundColor }]} />
                ))}
            </View>
            <Text style={[styles.price, {color: theme.color}]}>Star Rating</Text>
            <View style={styles.star_circle_container}>
                {circledata2.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.star_circle,
                            activeStar === item.id && {
                                backgroundColor: '#FFB709',
                                borderColor: '#FFB709',
                            },
                        ]}
                        onPress={() => handleStarPress(item.id)}
                    >
                        {activeStar === item.id ? item.White_Star : item.star}
                        <Text style={[styles.rating, activeStar === item.id && { color: 'white' },]}>
                            {item.number}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={[styles.price, {color: theme.color}]}>Category</Text>
            <TouchableOpacity style={[styles.categoryDropdown]} onPress={toggleCategoryOptions}>
                <Text style={[styles.selectedCategory, {color: theme.color}]}>
                    {selectedCategory ? selectedCategory : 'Select category'}
                </Text>
                <View style={styles.image_box1}>
                   {darkMode? <Dark_dress /> : <Dress />}
                </View>
                <View style={styles.image_box2}>
                   {darkMode? <Dark_drop /> : <Drop />}
                </View>
            </TouchableOpacity>
            {showCategoryOptions && (
                <View style={[styles.categoryOptions, {backgroundColor:theme.cardbg}]}>
                    <TouchableOpacity onPress={() => selectCategory('Category 1')}>
                        <Text style={[styles.categoryOption, {color:theme.color}]}>Category 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectCategory('Category 2')}>
                        <Text style={[styles.categoryOption, {color:theme.color}]}>Category 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectCategory('Category 3')}>
                        <Text style={[styles.categoryOption, {color:theme.color}]}>Category 3</Text>
                    </TouchableOpacity>
                </View>
            )}
            <Text style={[styles.price, {color: theme.color}]}>Discount</Text>
            <View style={styles.discount_container}>
                {discounts.map((d) => (
                    <View style={styles.discount_stack} key={d.id}>
                        <Text style={[styles.discount_text, {color: theme.color}]}>{d.offer}</Text>
                        <TouchableOpacity onPress={() => removeDiscount(d.id)} style={styles.closeButton}>
                            <Text style={[styles.closeButtonText, {color: theme.color}]}>X</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Filters;

const styles = StyleSheet.create({
    filter_content: {
        paddingTop: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#BABABA',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    heading: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '700',
        color: '#33302E',
        textTransform: 'capitalize',
    },
    price: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '700',
        color: '#151515',
        textTransform: 'capitalize',
        marginTop: 15,
    },
    circle_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 21,
    },
    circle: {
        borderRadius: 60,
        width: 22,
        height: 22,
        marginRight: 5,
    },
    star_circle_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    star_circle: {
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        borderWidth: 1.5,
        borderColor: '#BABABA',
        borderRadius: 50,
        height: 35,
        width: 35,
    },
    rating: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '600',
        color: '#4C4C4C',
    },
    categoryDropdown: {
        borderWidth: 1,
        borderColor: '#BABABA',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        position: 'relative',
        justifyContent: 'center',
    },
    selectedCategory: {
        fontSize: 13,
        lineHeight: 15,
        fontWeight: '600',
        color: '#33302E',
        paddingLeft: 10,
    },
    categoryOptions: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#BABABA',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    categoryOption: {
        padding: 10,
        fontSize: 16,
        color: '#000000',
    },
    image_box1: {
        position: 'absolute',
        top: 8,
        left: 7,
    },
    image_box2: {
        position: 'absolute',
        top: 15,
        right: 8,
    },
    discount_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        marginTop: 15,
    },
    discount_stack: {
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#BABABA',
        paddingVertical: 15,
        paddingHorizontal: 10,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    discount_text: {
        marginRight: 10,
        fontSize: 13,
        lineHeight: 15,
        fontWeight: '600',
        color: '#151515',
    },
    closeButton: {
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#000000',
        fontSize: 17,
        fontWeight: '700',
    },
});
