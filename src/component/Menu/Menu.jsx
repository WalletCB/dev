import React from 'react';
import styles from './Menu.css';

  function menu(props){

    var style = {
      display: 'none'
    };

    if(props.state == true){
      style = { display: 'flex' };
    }else{
      style = { display: 'none' };
    }

    return (
      <div style={style}  className={styles.menu}>
      <div className={styles.xmark} onClick={ props.onClick } />
        <nav >
            <ul className={styles.ul}>{ props.items.map((m) => {
              return <li className={styles.li} key = {m}><a href="#">{m}</a></li>;
            })}
            </ul>
        </nav>
        <div className={styles.subtitle}>Shop Finder</div>
          <div className={styles.footer}>
          <div className={styles.block}>
            <div className={styles.bred }>FAQ’s</div>
            <div className={styles.bred }>Shipping & Returns</div>
            <div className={styles.bred }>Privacy Policy</div>
            <div className={styles.bred }>Terms & Conditions</div>
          </div>
          <div className={styles.logo}>Made with love</div>
        </div>
      </div>
    );
  };

export default menu;
