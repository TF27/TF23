import React from 'react';
import './link.css';
// import Border from '../DoubleBorder'; 
import styles from '../../pages/Compi/Compi_Internal/internal.module.css';
function Whatsapplink({walink, dslink}){
    return(
    <div className={styles.groupl}> 
        <a id='wabuttonw' href={walink}>Whatsapp</a>
        <a id='wabuttond' href={dslink}>Discord</a>
    </div>
    );
}

export default Whatsapplink;

