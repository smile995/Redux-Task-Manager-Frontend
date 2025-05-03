import { useDispatch, useSelector } from "react-redux";
import Modal from "../ui/Modal";
import { removeTask, updateStatus } from "../../redux/features/tasks/taskSlice";
import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";

const TaskModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.taskSlice);
  const specificTask = tasks.find((task) => task.id === id);
  const dispatch = useDispatch();
  console.log(specificTask);

  let updatedStatus = "";
  if (specificTask?.status === "pending") {
    updatedStatus = "running";
  } else if (specificTask?.status === "running") {
    updatedStatus = "complete";
  } else {
    updatedStatus = "archive";
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1
        className={`text-lg font-semibold mb-3  ${
          specificTask?.priority === "high" ? "text-red-500" : ""
        } ${specificTask?.priority === "medium" ? "text-yellow-500" : ""} ${
          specificTask?.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {specificTask?.title}
      </h1>
      <p className="mb-3">{specificTask?.description}</p>
      <p className="text-sm">Assigned to - {specificTask?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{specificTask?.deadline}</p>
        <div className="flex gap-3">
          <button
            onClick={() => {
              dispatch(
                updateStatus({ id: specificTask?.id, status: updatedStatus })
              );
              setIsOpen(false)
            }}
            title="update status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
