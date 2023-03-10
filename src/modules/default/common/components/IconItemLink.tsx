import { generatePath, Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';


interface IIconItemLink {
    id: string,
    path: string,
    customIcon?: any

}

export const IconItemLink: React.FC<IIconItemLink> = ({ id, path, customIcon }) => {

    return (

        <Link
            to={generatePath(path, { id })}
            >
            {
                customIcon ? customIcon : <AddIcon />
            }
        </Link>


    );
};


export default IconItemLink;