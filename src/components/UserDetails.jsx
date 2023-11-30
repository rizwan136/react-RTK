import DeleteAllUsers from "./DeleteAllUsers";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/silces/UserSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  const data = useSelector((state) => {
    return state.users;
  });
  const deleteUsers = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      <div className="flex flex-col  gap-5 mt-10 mx-96">
        <div className="flex font-bold justify-between text-center ">
          <span className="text-md text-slate-400 p-2">
            List of user Details
          </span>
          <button
            className=" bg-slate-400 px-1  text-white text-xs rounded hover:bg-green-700 hover:text-lg hover:px-2"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add new Users
          </button>
        </div>
        <ul>
          {data.map((user, id) => {
            return (
              <li key={id} className="p-2  hover:bg-slate-50 ">
                <span className="hover:text-xl"> {user}</span>

                <FontAwesomeIcon
                  icon={faTrash}
                  className="float-right text-red-700 hover:text-2xl "
                  title="delete"
                  onClick={() => deleteUsers(id)}
                />
              </li>
            );
          })}
        </ul>
        <hr />
        <DeleteAllUsers />
      </div>
    </>
  );
};

export default UserDetails;
