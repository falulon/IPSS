import React from 'react'
import { IpssContext } from '../context/context'

const Error = () => {
    const {error} = React.useContext(IpssContext);
    return (
        <div>
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default Error
