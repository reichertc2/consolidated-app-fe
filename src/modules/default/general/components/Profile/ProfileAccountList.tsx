import { useContext } from "react";
import { AppContext } from "../../../../../context/AppContext";

interface IProfileAccountList { }

export const ProfileHero: React.FC<IProfileAccountList> = () => {

    const { user } = useContext(AppContext)

    return (
        <>
            <h3>These are the accounts currently listed with your profile.</h3>
        </>




    );
};


export default ProfileHero;