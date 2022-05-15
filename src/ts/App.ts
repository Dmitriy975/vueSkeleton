import { Component, Vue } from "vue-property-decorator";

@Component({
    template: `
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/editor/1">Редактор документа</router-link> |
      <router-link to="/editor/2">Другой редактор документа</router-link>
    </nav>
    <router-view :key="$route.path"/>
  </div>
  `
})
export default class App extends Vue {
}
