import { Component, Vue } from "vue-property-decorator";
import {VueClass} from "vue-class-component/lib/declarations";
import CommonEditor from "@/ts/components/CommonEditor";
import AnotherEditor from "@/ts/components/AnotherEditor";

@Component({
    template: `
      <component v-if="document"
                 :key="document.id"
                 :is="component"
                 :document="document"></component>
    `
})
export default class DocumentEditor extends Vue {

    /** Документ */
    private document: Document | null = null;

    private created() {
        // Заглушка для демонстрации динамической смены компонентов
        const id = parseInt(this.$route.params.id);
        this.document = {
            id,
            type: id % 2 ? "TYPE_TWO" : "TYPE_ONE"
        };
    }

    /**
     * Возвращает компонент, который требуется показать клиенту, на основе типа убытка
     */
    private get component(): VueClass<Vue> {
        if (this.document?.type === "TYPE_ONE") {
            return AnotherEditor;
        }
        return CommonEditor;
    }
}

/** Сущность документа */
export type Document = {
    /** Идентификатор */
    id: number;
    /** Тип документа */
    type: "TYPE_ONE" | "TYPE_TWO"
}