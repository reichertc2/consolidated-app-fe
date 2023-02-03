import { useContext } from "react";
import { AppContext } from "../../../../../context/AppContext";

interface IProfileHero { }

export const ProfileHero: React.FC<IProfileHero> = () => {

    const { user } = useContext(AppContext)

    return (
        <>
            <h3>Welcome {user.first_name},</h3>
        </>




    );
};


export default ProfileHero;