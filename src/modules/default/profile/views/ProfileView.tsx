import BasicHero from "../../common/components/BasicHero";
import { basicViewStyle } from "../../common/stylesFunctions/common";
import ProfileAccountList from "../components/ProfileAccountList";



interface IProfileView { }

export const ProfileView: React.FC<IProfileView> = () => {


    return (
        <section
            className={basicViewStyle()}
        >
            <BasicHero />
            <ProfileAccountList />

        </section>

    );
};


export default ProfileView;