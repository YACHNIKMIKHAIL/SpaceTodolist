import {AddForm} from "./AddForm";

export default {
    title: 'AddForm Component',
    component: AddForm
}

export const AddFormBaseExample = (props: any) => {
    return <AddForm addItem={() => {
    }}/>
}