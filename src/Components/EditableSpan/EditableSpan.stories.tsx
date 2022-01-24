import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";

export default {
    title: 'EditableSpan Component',
    component: EditableSpan
}

const changeTitleCallback = action('Title was changed :')


export const EditableSpanBaseExample = () => {
    return <EditableSpan title={"Change me on double click if you want)"} onChange={changeTitleCallback}/>
}