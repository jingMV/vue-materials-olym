<template>
  <v-app>
    <!--NAVIGATION-->
      <v-card fixed  class="nav">
      <v-toolbar fixed class="nav">
        <v-app-bar-nav-icon x-large color="black" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
         <router-link to="/"><img :src="require('./assets/logo.png')" class="img-logo" alt="OGG" ></router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
        <v-btn icon link class="mt-1">
            <v-icon large color="black" center>search</v-icon>
        </v-btn>
        </div>
      </v-toolbar>
      </v-card>
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list>
          <v-list-item v-for="item in items" :key="item.Id" link router :to="item.route">
            <v-list-item-icon>
              <v-icon right>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
<router-view></router-view>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    items: [
      {title: 'Home', icon: 'home', route: '/'},
      {title: 'About', icon: 'perm_identity'},
      {title: 'Blog', icon: 'announcement'},
      {title: 'Contact', icon: 'contact_support'},
    ],
    drawer: null,
  }),
};
</script>
<style>
li {
  list-style-type: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.img-logo {
  width: 70px;
  padding: 0;
  margin-left: -20px;
  margin-top: 8px;
}
.nav {
  position: fixed;
}
</style>
