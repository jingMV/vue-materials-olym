<template>
    <div id="section">
        <div class="wrapper">
            <section>
                <div class="main-content">
                    <h1>Olympian<br>
                    Gods and<br>
                    Goddesses</h1>
                    <p>
                        In ancient Greek religion and mythology, the twelve Olympians
                        are the major deities of the Greek pantheon, commonly 
                        considered to be Zeus, Hera, Poseidon, Demeter,
                        Athena, Apollo, Artemis, Ares, Aphrodite, Hephaestus, 
                        Hermes, and either Hestia or Dionysus
                    </p>
                    <v-btn text-align="center" color="#B6B1AD" class="btn-explore" router to="/Explore">
                       <span>Explore</span> 
                    </v-btn>
                </div>

                <div class="background-content">
                    <img :src="require('../assets/backgroundd.png')">
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'homeSection',
}
</script>
<style scoped>
section {
    padding: 90px 20px 0px 20px;
    background-image: url('~@/assets/background1.png');
    background-size: cover;
    height: 100vh;
}
.main-content {
    background: white;
    padding: 60px 10px 60px 8px;
}
.background-content {
    display: none;
}
.main-content h1 {
    font-size: 50px;
    color: #393939;
    line-height: 55px;
    margin-bottom: 40px;
    font-family: 'open sans'
}
.main-content p {
    font-size: 12px;
    margin-bottom: 70px;
}
@media only screen and (min-width: 700px) {
    .main-content h1 {
        font-size: 76px;
        line-height: 70px;
    }
    .main-content p {
        width: 400px;
        font-size: 13px;
    }
    .main-content {
    padding: 20px 10px 80px 20px;
}
}
@media only screen and (min-width: 900px) {
    .background-content {
    display: block;
    width: 50%;
}
.main-content {
    width: 50%;
    padding: 100px 0px 0px 50px;
    height: 100vh;
}
.background-content img {
    height: 100%;
    width: 100%;
}
section {
    display: flex;
    background: none;
    padding: 10px;
}
}
@media only screen and (min-width: 1200px) {
        .main-content h1 {
        font-size: 80px;
        line-height: 75px;
    }
        .main-content p {
        font-size: 14px;
        width: 500px;
    }
    .btn-explore {
        margin-left: 300px;
    }
}
@media only screen and (min-width: 1700px) {
.main-content {
    width: 50%;
    padding: 200px 0px 0px 100px;
    height: 100vh;
}
        .main-content h1 {
        font-size: 98px;
        line-height: 98px;
    }
    .main-content p {
        font-size: 20px;
        width: 500px;
    }
    .btn-explore span {
        font-size: 18px;
        font-weight: bold;
        padding: 10px;
    }
}

</style>

