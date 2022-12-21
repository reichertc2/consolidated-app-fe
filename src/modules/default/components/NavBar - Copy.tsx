import { Link } from "react-router-dom";


export default function NavBar() {
    const navLinks = [
        {
            id: 1,
            pathName: "Login",
            path: "/user/login",
        },
        {
            id: 2,
            pathName: "Logout",
            path: "/user/logout",
        },
        {
            id: 3,
            pathName: "Register Edit User",
            path: "/user/RegisterEditUser",
        }
    ]
    return (
        <nav>
            <section className="navSection">
                <ul>
                    {
                        navLinks.map(item => (
                            <Link key={item.id} to={item.path}>
                                <li>{item.pathName}</li>
                            </Link>
                        ))
                    }

                </ul>
            </section>
            <section className="navSection">
                <img src="https://via.placeholder.com/50x50" alt="placeholder"></img>
            </section>
        </nav>
    );
}
