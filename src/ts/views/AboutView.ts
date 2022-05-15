import { Component, Vue } from "vue-property-decorator";

@Component({
    template: `
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  `
})
export default class AboutView extends Vue {
}
