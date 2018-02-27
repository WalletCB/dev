import React from 'react';
import styles from './Two.css';

  function Two(){

    return (
      <section className={styles.two} >

      	<div className={styles.block}>
      		<div className={styles.name}>Made With Love</div>
      		<div className={styles.subtitle}>Unique collection of handcrafted gourmet confections
       designed by Belgian chocolatiers</div>
      		<div className={styles.img}></div>
      		<div className={styles.more}>See our products</div>
      	</div>

      </section>
    );
  };

export default Two;
