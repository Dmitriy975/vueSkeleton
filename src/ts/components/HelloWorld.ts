import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    template: `
      <div class="hello">
        <h1>{{ msg }}</h1>
      </div>
    `
})
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
}
