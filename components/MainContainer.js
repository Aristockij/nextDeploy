import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
      <>
          <Head>
              <meta keywords={"test, nextJs" + keywords}></meta>
              <title>главная страница</title>
          </Head>
          <div className='navbar'>
              <A  href='/' text='главная'/>
              <A  href='/users/' text='юзеры'/>
          </div>
          <div>
              {children}
          </div>
          <style jsx>
              {
                  `  .navbar{
                        padding: 15px;
                        background: orange;
                      }
                     
                `}
          </style>
      </>
    );
};

export default MainContainer;