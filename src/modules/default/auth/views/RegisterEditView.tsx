import { basicViewStyle } from "../../common/stylesFunctions/common";
import RegisterEditForm from "../forms/RegisterEditForm";

export default function RegisterEdit() {

    return (
        <div>

            <section
                className={basicViewStyle()}
            >
                <RegisterEditForm />
            </section>

        </div>

    );
}