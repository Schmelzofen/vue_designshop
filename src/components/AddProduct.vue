<template>
    <div class="addProduct">
        <form action="/api/add" method="post" enctype="multipart/form-data">
            <input
                type="text"
                v-model="ProductName"
                name="ProductName"
                placeholder="Product-name"
            />
            <input
                type="text"
                v-model="ProductLink"
                name="ProductLink"
                placeholder="Url Picture"
            />
            <input
                type="text"
                v-model="LinkShop"
                name="LinkShop"
                placeholder="Url Shop"
            />
            <input
                type="text"
                v-model="Company"
                name="Company"
                placeholder="Company"
            />
            <input
                type="text"
                v-model="Price"
                name="Price"
                placeholder="Price"
            />
            <textarea
                name="Article"
                cols="30"
                rows="10"
                placeholder="Write your article here ..."
            ></textarea>
            <input type="submit" v-on:click="submit" value="ADD PRODUCT" />
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "AddProduct",
    // read value of form and send a post request to the server
    methods: {
        submit() {
            axios
                .post("/api/add", {
                    ProductName: this.ProductName,
                    ProductLink: this.ProductLink,
                    LinkShop: this.LinkShop,
                    Company: this.Company,
                    Price: this.Price,
                    Article: this.Article,
                })
                .then((response) => {
                    console.log(response.data);
                });
        },
    },
};
</script>

<style></style>
