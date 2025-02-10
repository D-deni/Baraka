declare module '*.svg?skipsvgo' {
    const content: string
    export default content
}

declare module '*.svg' {
    import type {DefineComponent} from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}