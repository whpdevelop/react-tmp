import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = (props) => {
    let { children, location} = props
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[location.pathname])
    return children
}
export default withRouter(ScrollToTop);