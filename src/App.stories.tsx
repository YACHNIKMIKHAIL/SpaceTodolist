import {action} from "@storybook/addon-actions";
import {App} from "./App";
import {Provider} from "react-redux";
import {store} from "./Components/State/store";

export default {
    title: 'App Component',
    component: App
}

export const AppBaseExample = () => {
    return <Provider store={store}> <App/> </Provider>
}