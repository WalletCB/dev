import React from 'react';
import styles from './Aside.css';

function Aside({ onClick }){
    return(
        <aside className={styles.aside} id="js-aside" >
    		<div className={styles.logo}></div>
    		<div className={styles.title} onClick={onClick} >Menu</div>
    		<div className={styles.smm}>
    			<div className={styles.facebook}></div>
    			<div className={styles.instagram}></div>
    		</div>
    	</aside>
    );
}

export default Aside;
