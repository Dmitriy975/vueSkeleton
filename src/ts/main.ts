import "@/style/styles.scss";
import "@/style/img/favicon.ico";
import "element-ui/lib/theme-chalk/index.css";
import App from "@/ts/App";
import {AxiosError} from "axios";
import Element, {Notification} from "element-ui";
import Vue from "vue";
import router from "@/ts/config/router";
import store from "@/ts/config/store";
import locale from "element-ui/lib/locale/lang/ru-RU";

Vue.config.productionTip = false;

Vue.use(Element, { locale });

/**
 * Глобальный обработчик ошибок Vue
 */
Vue.config.errorHandler = (err: Error & AxiosError) => {
    Notification.error(getErrorMessage(err));
};

/**
 * Глобальный обработчик ошибок для промисов
 */
window.addEventListener("unhandledrejection", (event) => {
    Notification.error(getErrorMessage(event.reason));
});

/**
 * Извлекает сообщение об ошибке
 * @param error ошибка
 */
function getErrorMessage(error: Error & AxiosError) {
    return error.response?.data?.message ? error.response?.data?.message : error.message;
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
