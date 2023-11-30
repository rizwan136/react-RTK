import { deleteUsers } from "../store/silces/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const clearAllUsers = () => {
    dispatch(deleteUsers());
  };
  return (
    <>
      <h2 className="flex justify-center text-center">
        <button
          className="bg-red-800 text-white rounded p-2 hover:p-4"
          onClick={() => {
            clearAllUsers();
          }}
        >
          Delete All Users
        </button>
      </h2>
    </>
  );
};

export default DeleteAllUsers;
