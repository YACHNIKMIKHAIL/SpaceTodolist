import {AddForm} from "./AddForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'AddForm Component',
    component: AddForm
}

const callback=action('New added task is: ')

export const AddFormBaseExample = () => {
    return <AddForm addItem={callback}/>
}