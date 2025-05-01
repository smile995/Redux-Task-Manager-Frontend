import { useDispatch } from "react-redux";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import { addTask } from "../../redux/features/tasks/taskSlice";
const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };
  const handleAddTask = (data) => {
    dispatch(addTask(data));
    handleCancel();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task Form">
      <form onSubmit={handleSubmit(handleAddTask)}>
        <div className="mt-2">
          <label htmlFor="title"> Title</label>
          <input
            className="w-full rounded"
            {...register("title")}
            type="text"
            id="title"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="description"> Description</label>
          <input
            className="w-full rounded"
            {...register("description")}
            type="text"
            id="description"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="deadline"> Deadline</label>
          <input
            className="w-full rounded"
            {...register("deadline")}
            type="date"
            id="deadline"
          />
        </div>
        <div className="mt-2">
          <label>Assign to</label>
          <select {...register("asign")} className="w-full rounded">
            <option value="Shanto">Shanto</option>
            <option value="Anamul">Anamul</option>
            <option value="Hamza">Hamza</option>
            <option value="Saim">Saim</option>
            <option value="Akash">Akash</option>
            <option value="Bayazid">Bayazid</option>
            <option value="Badhon">Badhon</option>
          </select>
        </div>
        <div className="mt-2">
          <label>Priority</label>
          <select {...register("priority")} className="w-full rounded">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex justify-between items-center mt-4 ">
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
          <button className="btn btn-danger" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
