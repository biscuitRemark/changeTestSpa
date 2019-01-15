<template>
  <div class = "mainDiv">
   <div id="todo">
     <h1>Список дел</h1>
   </div>
   <div class = "secondDiv">
     <b-input class="centr" type="text"  v-model='message' @keydown.enter.native = "onClick"></b-input>
     <b-list-group>
       <b-list-group-item  v-for= "(item,itemObjKey) in dinamikArray">
         <b-button v-on:click="deLete(itemObjKey)">delete</b-button>
         {{item.text}}
       </b-list-group-item>
     </b-list-group>
   </div>
  </div>
</template>

<script>
var dinamikArray = [{text: 'asdfa3'}, {text: 'scgfasd23'}, {text: 'ijtyuit23'}, {text: 'wedfgsrwr3'}, {text: 'werwer23'}]
export default {
  name: 'todo',
  data: function () {
    return {
      dinamikArray: dinamikArray,
      message: ''
    }
  },
  methods: {
    onClick: function () {
      if (!this.dinamikArray.find(x => x.text === this.message)) {
        this.dinamikArray.push({text: this.message})
        this.message = ''
      }
    },
    deLete: function (item) {
      this.dinamikArray.splice(item, 1)
    }
  }
}

</script>
<style>
#todo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list-group-item {
  border: 0;
}
.centr {
  width: 400px;
  margin-left: 20px;
}
h1{
    font-weight: normal;
}
ul{
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
.mainDiv {
  text-align:left;
}
.secondDiv {
  padding-left: 140px;
}
</style>
