<template>
    <div class="productContainer">
        <div class="product" v-for="product in products" :key="product.id">
            <div class="productImage">
                <img :src="product.ProductLink" alt="product image">
            </div>
            <div class="productInfo">
                <h3>{{ product.ProductName }}</h3>
                <p>{{ product.Price }}.00</p>
            </div>
            <div class="productCompany">
                <p>{{ product.Company }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";


export default {
    name: "ProductComp",
    data() {
        return {
            products: null
        };
    },
    created(){
        axios.get("/products").then(response => {
            console.log(response.data)
            this.products = response.data;
        });
    }
}
</script>

<style>

</style>