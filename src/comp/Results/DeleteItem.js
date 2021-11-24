import React, {useState} from 'react'
import { IpssContext } from "../../context/context";

const DeleteItem = ({fbkey}) => { 
    const [sureToDelete, setSureToDelete] = useState(false)
    const { DeleteOldQuestionnaire } = React.useContext(IpssContext);

    
    const handleDeleteBtn = () => { 
        setSureToDelete((prevState)=>!prevState)
    }
    const trashIcon = <div onClick={handleDeleteBtn}>🚮</div>
    const confirmDelete = <div>{trashIcon} <button onClick={()=>{DeleteOldQuestionnaire({key: fbkey}); handleDeleteBtn()}} className="link-text right"> OK TO ERASE THIS IPSS </button> </div>
    if (!sureToDelete) return trashIcon
    return confirmDelete
}

export default DeleteItem


