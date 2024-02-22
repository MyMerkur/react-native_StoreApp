import React from "react";
import { View, Text, Image } from "react-native";
import styles from './Products.style';

const Products = ({ products }) => {
    return (
        <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <Image
                        style={styles.productImage}
                        source={{ uri: products.imgURL }}
                    />
                    <Text style={styles.productTitle}>{products.title}</Text>
                    <Text style={styles.productPrice}>{products.price}</Text>
                </View>
        </View>
    )
}
export default Products;