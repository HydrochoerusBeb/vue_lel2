<script>
import { RouterLink, RouterView } from 'vue-router'
  export default{
    
  }
</script>

<template lang="">
  <header>
    <ul class='spisok'>
      <router-link class='spisok_ssylka' to="/">
        <li class='spisok_unit'>Home</li>
      </router-link>
      <router-link class='spisok_ssylka' to="/users">
        <li class='spisok_unit'>users</li>
      </router-link>
      <router-link class='spisok_ssylka' to="/profile">
        <li class='spisok_unit'>profile</li>
      </router-link>
    </ul>
  </header>
  <router-view>
  </router-view>
  <div class='links'>
    <ul class='links-list'>
      <li>
        <a href=""><img src="./assets/fb.png" alt=""></a>
      </li>
      <li>
        <a href=""><img src="./assets/Linkedin.png" alt=""></a>
      </li>
      <li>
        <a href=""><img src="./assets/insta.png" alt=""></a>
      </li>
      <li>
        <a href=""><img src="./assets/group.png" alt=""></a>
      </li>
    </ul>
    <p>Copyright ©2020 All rights reserved </p>
  </div>
</template>

<style>
  *{
    font-family: 'Heebo';
  }
  .spisok{
    width: 80%;
    margin-inline: auto;
    display: flex;
    justify-content: end;
    align-items:center;
    gap: 30px;
    list-style: none;
    flex-direction: row;
  }  
  .spisok_ssylka{
    text-transform: capitalize;
    text-decoration: none;
    font-weight:700;
  }
  .links{
    width: 100% ;
  }
  .links p{
    width: 24%;
    margin-inline: auto;
  }
  .links-list{
    display: flex; 
    gap: 35px;
    width: 24%;
    margin-inline: auto;
  }
  .links-list li{
    list-style: none;

  } 
</style>
