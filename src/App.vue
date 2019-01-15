<template>
  <div id="app">
    <header>
      <div>
        <b-nav tabs>
          <b-nav-item to="/" exact> Задание </b-nav-item>
          <b-nav-item to="/todo"> Список дел</b-nav-item>
          <b-nav-item to="/filtering"> Фильтрация</b-nav-item>
          <b-nav-item to="/about"> О себе</b-nav-item>
        </b-nav>
      </div>
    </header>
  <router-view></router-view>
  </div>
</template>

<script>export default {name: 'app'}</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
