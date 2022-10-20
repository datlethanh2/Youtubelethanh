import React from 'react';
import styled from 'styled-components';
import { useState } from "react";

import logo from '../images/logo.png';
import den from '../images/den.png';
import Anhnen from "../images/Anhnen.png";
import gach from "../images/gach.png";
import logoanh from "../images/logoanh.png";

const Trangdau=styled.div
`   background-image: url(${Anhnen});
    height: 650px;
    background-size: 100%100%;
`;

const Head = styled.div
`   height: 80px;
    background-color: rgba(14, 44, 81, 0.8);
    backdrop-filter: blur(17.5px);
    display: flex;
    justify-content: space-around;
`;

const Imglogo = styled.div
`   Height: 40px;
    margin-top: 15.64px;
    margin-bottom:17.65px;
    margin-left: 5%;
    
    img{
        width:100%;
        height:40px;
    }
` ;

const Bagach= styled.p
`   margin-top: 15px;
    text-align: right;
    button{
        border: none;
        background-color:rgba(14, 44, 81, 0.8);
        width: 25px;
        height:25px;
    }
`;

const Menunut =styled.div
`   ul{
        list-style: none;   
        display:flex;
        margin-top: 33px;
        margin-left: 0px;
        font-size: 10px;
        text-align: left;
        li{           
            width: 80px;
            margin:0;
            height: 10px;
            text-align: center;
            border-left: 1px solid white;
            a{
                text-decoration: none;
                color: white;           
            }
    }
}
`;


const Joinbutton = styled.div
`  
    button{
        margin-top: 20px;
        margin-bottom:30px;
        border: 1px solid #204370;
        background-color: white;
        font-size: 14px;
        border-radius: 25px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 10px;
    }
`;

const Main= styled.div
`   text-align: center;
    
`;

const Den= styled.div
`   margin-top: 100px;
`;

const Chugiua1 = styled.div
`   margin-top: 28px;
    color: white;
    font-size: 23px;
    p{
        margin: 0;
    }
`;

const Chugiua2 = styled.div
`   margin-top: 28px;
    color: white;
    font-size: 14px;
    p{
        margin: 0;
    }
`;

const Join = styled.button
`   margin-top: 28px;
    background: #204370;
    border-radius: 40px;
    border:#204370;
    width: 120px;
    height: 45px;
    color: white;
    
`;

const Menuan = styled.div
`   
    background-color:rgba(14, 44, 81, 0.8);
    position: absolute;
    z-index: 2;
    
    margin-right: 7px;
    width:94%;
    height:570px;
    ul{
        text-align: center;
    }   
        li{

            }a
            {
                text-decoration: none;
                color: white;
            }
`;


function Header() 
{
    const [an, setAn] = useState("none");
    const [ana, setAna] = useState("block");


    function Hien()
    {
        setAn('block');
        setAna('none');
    }
    function An()
    {
        setAn('none');
        setAna('block');
    }

  return (
    <Trangdau>   
        <div class="container-fluid">       
            <div class="row">
                <Head>
                    <div class="col-lg-2 col-md-3 col-sm-12 col-12">
                        <div class="row"> 
                                <div class="col-lg-12 col-md-12 col-sm-4 col-4">
                                    <Imglogo>
                                        <img src={logo} />
                                    </Imglogo>            
                                </div>   

                                <div class="d-md-none col-sm-6 d-sm-block col-6"></div>

                                <div class="d-md-none col-sm-2 d-sm-block col-2"> 
                                    <Bagach>                                           
                                        <button style={{display: ana} } onClick={Hien}>
                                            <img src={gach} width="25px" height="25px"/>
                                        </button>
                                        
                                        <button style={{display: an} } onClick={An}>
                                            <img src={gach} width="25px" height="25px"/>
                                        </button>
                                    </Bagach> 
                                </div>                             
                        </div>                       
                    </div>

                    <div class="col-lg-8 d-lg-block col-md-6 d-md-block d-sm-none d-none">
                        <Menunut>                   
                            <ul type="none">
                                <li>
                                    <a href="#">CITIES</a>
                                </li>
                                <li>
                                    <a href="#">VENTURES</a>
                                </li>
                                <li>
                                    <a href="#">ACADEMY</a>
                                </li>
                                <li>
                                    <a href="#">SERVICES</a>
                                </li>
                                <li>
                                    <a href="#">ACCELERATOR</a>
                                </li>
                                <li>
                                    <a href="#">ABOUT US</a>
                                </li>           
                            </ul>                                    
                        </Menunut> 
                    </div>

                    <div class="col-lg-2 d-lg-block col-md-3 d-md-block d-sm-none d-none">
                        <Joinbutton> 
                            <button>
                                Join our community 
                            </button>                                                                                                  
                        </Joinbutton>
                    </div>
                </Head>                  
            </div>
            
            <Menuan style={{display: an} }>
                <ul type="none">
                    <li>
                        <a href="#">CITIES</a>
                    </li>
                    <li>
                        <a href="#">VENTURES</a>
                    </li>
                    <li>
                        <a href="#">ACADEMY</a>
                    </li>
                    <li>
                        <a href="#">SERVICES</a>
                    </li>
                    <li>
                        <a href="#">ACCELERATOR</a>
                    </li>
                    <li>
                        <a href="#">ABOUT US</a>
                    </li>  
                    <li>
                        <Joinbutton> 
                            <button>
                                Join our community 
                            </button>                                                                                                  
                        </Joinbutton>
                    </li>  
                    <li>
                        <img src={logoanh} width="200px" height="180px"/>
                    </li>       
                </ul>   
            </Menuan>    

            <div class="row">
                <div class="col-lg-12">
                    <Main>
                        <Den>
                            <img src={den} />  
                        </Den>
                        <Chugiua1>
                            <p>GLOBAL NETWORK FOR </p>
                            <p>MENTORSHIP AND SUPPORT</p>
                        </Chugiua1>
                        <Chugiua2>
                            <p>Get all the support and education you need</p> 
                            <p>to achieve full potential as an entrepreneur.</p>
                        </Chugiua2>
                        <Join>
                            Join DEN
                        </Join>
                    </Main>
                </div>
            </div>         
        </div>  
    </Trangdau>                                         
  )
}

export default Header;