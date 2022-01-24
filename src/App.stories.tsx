import {App} from "./App";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator.stories";


export default {
    title: 'App Component',
    component: App,
    decorators: [ReduxStoreProviderDecorator]
}

export const AppBaseExample = () => {
    return <App/>
}