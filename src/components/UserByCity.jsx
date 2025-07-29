import { fetchUserByCity } from "../features/users/usersThunks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import WithLoader from "../features/users/WithLoader";


function UserByCity() {
    const dispatch = useDispatch();
    const { loading, user, error } = useSelector((state) => state.users);
    const { city } = useParams(); // 👈 capturamos la ciudad desde la URL

    useEffect (()=>{
        if (!city || city.trim() ==="") return;
        dispatch (fetchUserByCity(city));

    },[city, dispatch]);
    return(
        <WithLoader loading={loading} error={error}>
            <div>
                <h2>Detalles del Usuario: {user?.name}</h2>
        <p>
          <strong>ID:</strong> {user?.id}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {user?.phone}
        </p>
        <p>
          <strong>Website:</strong> {user?.website}
        </p>
            </div>
        </WithLoader>
    );
}
export default UserByCity;
