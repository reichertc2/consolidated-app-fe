import ProfileAccountList from "../components/ProfileAccountList";
import ProfileHero from "../components/ProfileHero";



interface IProfileView { }

export const ProfileView: React.FC<IProfileView> = () => {

    return (
        <section
            className="bg-zinc-200 w-9/12 rounded m-auto my-40"
        >
            <ProfileHero />
            <ProfileAccountList />

        </section>

    );
};


export default ProfileView;