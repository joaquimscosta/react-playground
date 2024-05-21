import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
function UsersList() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setIsCreatingUserError] = useState(null);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      // .then(() => {
      //   setIsLoadingUsers(false);
      // })
      .catch((error) => {
        setLoadingUsersError(error);
      })
      .finally(() => {
        setIsLoadingUsers(false);
      });
  }, [dispatch]);

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((error) => setIsCreatingUserError(error))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3"></div>
      {isCreatingUser ? (
        "Creating User..."
      ) : (
        <Button onClick={handleUserAdd}>+ Add User</Button>
      )}
      {creatingUserError && "Error Creating User"}
      {renderedUsers}
    </div>
  );
}

export default UsersList;
