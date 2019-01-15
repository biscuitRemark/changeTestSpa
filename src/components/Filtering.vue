<template>
  <div class="filtering">
    <h1>Список</h1>
    <div class="filteringSecond">
      <b-input class = "filInput" type="text"  v-model='search' v-on:keyup.enter = "onClick" ></b-input>
      <div class="check">
        <b-form-group>
          <b-form-radio-group buttons button-variant="outline-primary" v-model="sortType" :options="options" />
        </b-form-group>
      </div>
      <b-list-group  v-if ="sortType == 2">
        <b-list-group-item v-for= "item in arrayM" v-html = "highlightMeth(search,item.text)">
         {{item.id}} {{item.text}}</b-list-group-item>
      </b-list-group>
      <b-list-group  v-if ="sortType == 1">
        <b-list-group-item v-for= "item in filteredItems">
         {{item.id}} {{item.text}}</b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
var arrayM = [
  {text: '100 Continue («продолжай»)'},
  {text: '101 Switching Protocols («переключение протоколов»)'},
  {text: '102 Processing («идёт обработка»)'},
  {text: '200 Continue («продолжай»)'},
  {text: '201 OK («хорошо»)'},
  {text: '202 Accepted («принято»)'},
  {text: '203 Non-Authoritative Information («информация не авторитетна»)'},
  {text: '204 No Content («нет содержимого»)'},
  {text: '205 Reset Content («сбросить содержимое»)'},
  {text: '206 Partial Content («частичное содержимое»)'},
  {text: '207 Multi-Status («многостатусный»)'},
  {text: '226 IM Used («использовано IM»)'},


]
export default {
  name: 'filtering',
  data: function () {
    return {
      search: '',
      arrayM: arrayM,
      sortType:'2',
      options: [
       { text: 'filter', value: '1' },
       { text: 'highlight', value: '2' }
     ]

    }
  },
  computed: {
    filteredItems: function () {
      return this.arrayM.filter(item => {
        return item.text.match(this.search)
      })
    }
  },
  methods: {
    highlightMeth: function (search,text) {
      return text.replace(search, '<span class = "higlightedText">' + search + '</span>')
    },
  }
}
</script>
<style>

.higlightedText {
  background:yellow;
}
.filtering {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
.filteringSecond{
  padding-left: 160px;
  text-align: left;

}
.list-group-item {
  border: 0;
}
.filInput{
  width: 400px;
}
.check{
  padding-top: 20px
}
</style>
