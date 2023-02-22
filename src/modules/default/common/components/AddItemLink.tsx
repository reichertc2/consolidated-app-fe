import { generatePath, Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';


interface IAddItemLink {
    id: string,
    path: string,
    customIcon?: any

}

export const AddItemLink: React.FC<IAddItemLink> = ({ id, path, customIcon }) => {

    return (

        <Link to={generatePath(path, { id })}>
            {
                customIcon ? customIcon : <AddIcon />
            }
        </Link>


    );
};


export default AddItemLink;