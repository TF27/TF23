import React from 'react';
import './link.css';
// import Border from '../DoubleBorder'; 
import styles from '../../pages/Compi/Compi_Internal/internal.module.css';
const whatsapplink = ({walink}) => {
    return(
    <div className={styles.groupl}> 
        <a id='wabuttonw' href='https://www.youtube.com/'>Whatsapp</a>
        <a id='wabuttond' href='https://www.youtube.com/'>Discord</a>
    </div>
    );
}

export default whatsapplink;
