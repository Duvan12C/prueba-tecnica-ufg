import { faPen, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TaskListProps {
 tasks: { id: number; description: string; completed: boolean }[];
 toggleCompletion: (id: number) => void;
 edit: (id: number) => void;
 deleted: (id: number) => void;
 save: (id: number) => void;
 editingTaskId: number | null;
 setEditingDescription: (description: string) => void;
 editingDescription: string;
 setEditingTaskId: (id: number | null) => void;
}

const TaskList: React.FC<TaskListProps> = ({ 
    tasks, 
    toggleCompletion, 
    edit, 
    deleted, 
    save, 
    editingTaskId, 
    setEditingDescription,
    editingDescription,
    setEditingTaskId }) => {
    return (
        <div className="mt-2 flex justify-center items-center flex-col p-2">
        {tasks.map((task) => (
          <div className="p-2 w-60 sm:w-96 md:w-[800px] m-1  dark:bg-gray-900 flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
            />

            {editingTaskId === task.id ? (
              <>
                <textarea
                  className="m-2 block w-60 sm:w-96 md:w-[800px] p-1 text-sm text-gray-900  rounded-lg border border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={editingDescription}
                  onChange={(e) => setEditingDescription(e.target.value)}
                />
                <FontAwesomeIcon
                  className="focus:outline-none  color-white  dark:text-white dark:border-gray-600 dark:hover:text-green-500 pr-2"
                  onClick={() => {
                    save(task.id);
                    setEditingTaskId(null);
                  }}
                  icon={faSave}
                />
              </>
            ) : (
              <p className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {task.description}
              </p>
            )}
            <div className="flex pl-10">
              <FontAwesomeIcon
                onClick={() => edit(task.id)}
                icon={faPen}
                className="focus:outline-none  color-white  dark:text-white dark:border-gray-600 dark:hover:text-green-500 pr-2"
              />
              <FontAwesomeIcon
                onClick={() => deleted(task.id)}
                className="focus:outline-none color-white dark:text-white dark:border-gray-600 dark:hover:text-red-500 "
                icon={faTrash}
              />
            </div>
          </div>
        ))}
      </div>
    );
   };
   

   export default TaskList