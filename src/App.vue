<template>
  <div>导航栏</div>
  <Router-link to="/">Page</Router-link>
  | <Router-link to="/xxx">Page2</Router-link>
  <hr/>
  <Router-view/>
</template>

<script>
import Page from './components/Page.vue'

export default {
  
}
</script>
