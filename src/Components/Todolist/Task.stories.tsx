import {action} from "@storybook/addon-actions";
import Task from "./Task";

export default {
    title: 'Task Component',
    component: Task
}

const changeTaskStatusCallback = action('Task status changed :')
const changeTaskTitleCallback = action('Task title changed :')
const removeTaskCallback = action('Task is removed ')

export const TaskBaseExample = () => {
    return <>
        <Task isDone={false}
              id={"dFCASD"}
              title={"New task"}
              changeTaskStatus={changeTaskStatusCallback}
              changeTaskTitle={changeTaskTitleCallback}
              removeTask={removeTaskCallback}/>
    </>
}