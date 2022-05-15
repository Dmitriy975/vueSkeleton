import "@/style/img/logo.png";
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/ts/components/HelloWorld"; // @ is an alias to /src

@Component({
    template: `
    <div class="home">
      <img alt="Vue logo" src="/static/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
  `,
    components: {
        HelloWorld,
    },
})
export default class HomeView extends Vue {}
