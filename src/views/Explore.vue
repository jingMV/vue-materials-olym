<template>
    <div id="explore">
        <div class="wrapper">
            <section>
                <h1>OLYMPIAN<br> Gods and Goddesses</h1>
                <div class="img-content"> 
                   <li  v-for="item in items" :key="item.Id"><router-link :to="item.route"><img :src="item.imageUrl" ></router-link></li> 
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Explore',
    data() {
        return {
            items: [
                {imageUrl: require('../assets/Group 1.png'), route: '/Aohrodite'},
                {imageUrl: require('../assets/Group -1.png'), route: '/Apollo'},
                {imageUrl: require('../assets/Group -2.png'), route: '/Ares'},
                {imageUrl: require('../assets/Group -3.png'), route: '/Artemis'},
                {imageUrl: require('../assets/Group -4.png'), route: '/Athena'},
                {imageUrl: require('../assets/Group -5.png'), route: '/Demeter'},
                {imageUrl: require('../assets/Group -6.png'), route: '/Dionysus'},
                {imageUrl: require('../assets/Group -7.png'), route: '/Hades'},
                {imageUrl: require('../assets/Group -8.png'), route: '/Hephethus'},
                {imageUrl: require('../assets/Group -9.png'), route: '/Hera'},
                {imageUrl: require('../assets/Group -10.png'), route: '/Hermes'},
                {imageUrl: require('../assets/Group -11.png'), route: '/Hestia'},
                {imageUrl: require('../assets/Group -12.png'), route: '/Poseidon'},
                {imageUrl: require('../assets/Group -13.png'), route: '/Zues'},
                {imageUrl: require('../assets/Group -14.png'), route: '/Tyche'},
            ]
        }
    }
}
</script>
<style scoped>
section h1 {
    width: 60%;
    text-align:center;
    margin: 25px auto;
    color: #fff;
    font-family: 'open sans';
    font-size: 25px;
    background: black;
    padding: 10px;
    border-radius: 10px;
}
.img-content img {
    width: 100%;
}
.img-content {
    width: 60%;
    margin: 0px auto;
    display: grid;
    display: -moz-grid;
    grid-template-columns: 100%;
}
section {
    background: url('~@/assets/backBlurr.png');
    background-size: cover;
    background-attachment: fixed;
    padding-top: 40px;
}
@media only screen and (min-width: 500px) {
    .img-content {
        grid-template-columns: 50% 50%;
        grid-column-gap: 5px;
    }
}
@media only screen and (min-width: 900px) {
    .img-content {
        grid-template-columns: 33% 33% 33%;
        grid-column-gap: 5px;
    }
}
@media only screen and (min-width: 900px) {
    .img-content {
        grid-template-columns: 25% 25% 25% 25%;
        grid-column-gap: 5px;
    }
}
</style>


