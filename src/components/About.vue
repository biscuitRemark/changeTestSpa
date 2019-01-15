<template>
  <div id="about">
    <h1>
      Некий текст
    </h1>
    <div class = "secondAbout">
      <div class = "div1 fleeex">
        <b-button :variant="colorBtn" @click="disabled = (disabled + 1) % 2" > {{retButton}}</b-button>
        <b-input class ="wtf" v-bind:class="classObject" type="text" :disabled="disabled == 1" v-on:click="borderInput" v-model="myName"></b-input>
      </div>
      <div class = "div1">
        <h3> Email:</h3>
        <b-input class = "center" type ='email' v-model="email"></b-input>
        <div class="error" v-show="email &amp;&amp;!isEmailValid" v-bind:style="{color: '#c05746'}">
          <span> Неправильный email </span >
        </div>
      </div>
      <div class = "div1">
        <h3> Дата рождения:</h3>
        <b-input class = "center" type ='date' v-model="myDate"></b-input>
      </div>

      <div class = "div1">
        <h3> Место рождения:</h3>
        <div class="select">
          <b-form-select v-model="selected1" v-on:input="onChange()" >
            <option v-for="(data,i) in infoJson"  :value="i" >{{data.name}}</option >
          </b-form-select >
          <b-form-select v-model="selected2" v-on:input="onChange2()" >
            <option v-for="(data,i) in infoJson2"  :value="i" >{{data.name}}</option >
          </b-form-select >
          <b-form-select v-model="selected3" >
            <option  v-for="data in infoJson3">{{data.name}}</option >
          </b-form-select >
        </div>
    </div>
    <div class="">
      <h3>Пара слов о себе:</h3>
      <b-form-textarea class= 'textAr' v-model="infoAbout" :rows="3" :max-rows="6"></b-form-textarea>
    </div>
    <div class="forBtn">
      <b-button @click="persist">Сохранить</b-button>
    </div>
  </div>
  </div>
</template>

<script>
import json from './infoParseData.json';

export default {
  name: 'about',
  data:function() {
    return {
      email:'test@neolant.ru',
      selected1:'',
      selected2:'',
      selected3:'',
      infoJson: json,
      infoJson2: '',
      infoJson3: '',
      disabled: 1,
      myBorder: 0,
      myDate: "2018-12-31",
      myName:"Михаил",
      infoAbout:"Платформы: Ionic, Node.jsЯзыки программирования: JavaScript, TypeScript Технологии и библиотеки : HTML, CSS, asp.net mvc, Angular, Cordova "
    }
  },
  mounted(){
    if (localStorage.myName) {
      this.myName = localStorage.myName;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.myDate) {
      this.myDate = localStorage.myDate;
    }
    if (localStorage.infoAbout) {
      this.infoAbout = localStorage.infoAbout;
    }
    if (localStorage.selected1) {
      this.selected1 = localStorage.selected1;
      this.infoJson2 = this.infoJson[this.selected1].regions;
    }
    if (localStorage.selected2) {
      this.selected2 = localStorage.selected2;
      this.infoJson3 = this.infoJson2[this.selected2].towns;
    }
    if (localStorage.selected3) {
      this.selected3 = localStorage.selected3;
    }
  },
  methods: {
    borderInput: function () {
      this.myBorder = 1;
      this.validated = 1;

    },
    onChange: function() {
      if (typeof(this.selected1) == 'number'){
        this.infoJson2 = this.infoJson[this.selected1].regions;
        this.selected2 = '';
        this.selected3 = '';
        this.infoJson3 = '';
      }
    },
    onChange2: function () {
      if (typeof(this.selected2) == 'number'){
        this.infoJson3 = this.infoJson2[this.selected2].towns;
        this.selected3 = '';
      }
    },
    persist() {
      localStorage.myName = this.myName;
      localStorage.email = this.email;
      localStorage.myDate = this.myDate;
      localStorage.infoAbout = this.infoAbout;
      localStorage.selected1 = this.selected1;
      localStorage.selected2 = this.selected2;
      localStorage.selected3 = this.selected3;
    },

  },
  computed: {
    classObject: function() {
      return {
        border: this.myBorder
      }
    },
    colorBtn:function(){
      var color = 'danger'
      if (this.disabled == 0) {
        color = 'success'
      }
      return color
    },
    retButton: function() {
      var stat = "no_active";
      if (this.disabled == 0) {
        stat = 'active'
      }
      return stat

    },
    isEmailValid() {
       return /@neolant.ru\s*$/.test(this.email);
    }
  },
}
</script>

<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding:0 40 px;
}
.secondAbout{
  width:500px;
  padding-left: 160px;
}
.wtf {
  border:0;
  text-align:center;
  font-size: 2em;
  font-weight: bold;
}
.div1{
  width: 400px;
  padding:15px 0px;
}
.fleeex{
  display: flex;
}
.center{}
.textAr {
  width:1000px;
  margin:0;
}
.error {
  margin:.5rem 0;
  font-size:18;
  color: #c05746;
}
.form-control:disabled, .form-control[readonly]{
  background-color: #ffffff;
}

.input {
  padding:.3rem 1rem;
  border:1px solid #CCCCCC;
  outline:none;
  width: 100%;
}
h1{
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
h3{
  text-align:left;
}
.forBtn{
  text-align: left;
    padding-top: 20px;
}
.select{
  display:flex;
}
</style>
