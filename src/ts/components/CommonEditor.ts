import { Component, Prop, Vue } from "vue-property-decorator";
import { Document } from "@/ts/views/DocumentEditor";

@Component({
    template: `
      <div class="hello">
        <h1>CommonEditor. Документ №{{ document.id }}</h1>
      </div>
    `
})
export default class CommonEditor extends Vue {

    /** Документ */
    @Prop({required: true})
    private document!: Document;
}