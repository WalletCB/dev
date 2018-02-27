import React from 'react';
import styles from './One.css';

  function One(){
    return (
      <section className={styles.one}>

      	<div className={styles.block}>
          <div className={styles.logo}></div>
      		<div className={styles.scroll}>Scroll down</div>
      	</div>

      </section>
    );
  };

export default One;
