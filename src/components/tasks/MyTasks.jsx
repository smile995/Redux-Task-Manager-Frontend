import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../redux/features/tasks/taskSlice";
import TaskModal from "./TaskModal";
import { useState } from "react";

const MyTasks = () => {
  const { tasks } = useSelector((state) => state.taskSlice);
  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const myTasks = tasks.filter((task) => task?.assignedTo === users[0].name);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const handleTaskView = (id) => {
    setId(id);
    setIsOpen(!isOpen);
  };
  if (myTasks.length < 1) {
    return (
      <div className="mt-5">
        <p className="bg-secondary/10 rounded-md p-3 capitalize font-semibold text-green-500 ">
          No task available
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
        <h1 className="text-xl my-3">My Tasks</h1>
        <div className=" h-[750px] overflow-auto space-y-3">
          {myTasks?.map((task) => (
            <div
              key={task.id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
              <h1>{task.title}</h1>
              <div className="flex gap-3">
                <button
                  onClick={() => handleTaskView(task?.id)}
                  className="grid place-content-center"
                  title="Details"
                >
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={() =>
                    dispatch(updateStatus({ id: task.id, status: "complete" }))
                  }
                  className="grid place-content-center"
                  title="Done"
                >
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default MyTasks;
