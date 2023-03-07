import { basicViewStyle } from "../../common/stylesFunctions/common";
import ProfileAccountList from "../components/ProfileAccountList";
import ProfileHero from "../components/ProfileHero";


interface IProfileView { }

export const ProfileView: React.FC<IProfileView> = () => {


    return (
        <section
            className={basicViewStyle()}
        >
            <ProfileHero />
            <ProfileAccountList />

        </section>

    );
};


export default ProfileView;