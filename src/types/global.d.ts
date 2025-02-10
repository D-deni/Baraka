declare module "vue-yandex-maps" {
    import {App} from "vue";
    export function install(app: App, options: {
        apiKey: string;
        lang: string;
        coordorder: string;
        enterprise?: boolean
        version?: string;
    }): void;
    export const YandexMap: any;
}

declare module "@devindex/vue-mask" {
    import {Plugin} from 'vue'
    const VueMask: Plugin;
    export default VueMask
}

declare const ymaps: any;