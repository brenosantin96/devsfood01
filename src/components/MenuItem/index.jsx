import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { LinkArea, LinkIcon } from './styled';

export default ({ icon, link }) => {

    const history = useHistory();
    const location = useLocation();

    //get actual route.
    let isActive = location.pathname == link;
    

    const handleLinkClink = (e) => {
        e.preventDefault();
        history.push(link);
    }


    return (
        <LinkArea active={isActive} href={link} onClick={handleLinkClink}>
            <LinkIcon src={icon} />
        </LinkArea>
    );
}