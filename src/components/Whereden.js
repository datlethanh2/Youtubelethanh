import React from 'react';
import styled from 'styled-components';
import imgd from "../images/imgd.png";
import w1 from "../images/w1.png";
import w2 from "../images/w2.png";
import w3 from "../images/w3.png";
import w4 from "../images/w4.png";

const Headde= styled.div
`   padding-top: 100px;
    padding-bottom:70px;
   
    background-color: #204370;
    color: white;
    text-align: center;
    b{
        font-size: 25px;
    }
    button{
        margin-top: 28px;
        background: #FFCC00;
        border-radius: 40px;
        border:#FFCC00;
        width: 120px;
        height: 45px;
        color: black;
    }
`;
const Mauu= styled.div
`   background-color:#F4F6F8;
`;
const Maun=styled.div
`   background-color: #204370;
    height:100%;
`;
const We=styled.div
`   width: 200px;
`;
const Wec= styled.div
`   width: 10%;
    border-bottom: 2px solid rgba(35, 35, 39, 0.1);
    border-right-width: 20px;
    margin-bottom:10px;
`;
const Bor= styled.div
`   width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(35, 35, 39, 0.1);
    border-right-width: 20px;
`;
const Nutour= styled.button
`   padding-top: 12px;
    padding-bottom:12px;
    padding-left: 20px;
    padding-right:17px;
    border: 1px solid #204370;
    background-color:#204370;
    color: white;
    font-size: 13px;
    border-radius: 25px;
`;
const Mai= styled.div
`   padding-top: 30px;
    font-size: 13px;
`;
const Menufoot= styled.div
`   border-top: 1px solid rgba(35, 35, 39, 0.1);
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
    text-align:center;
    text-size;13px;
`;
const Menuf= styled.div
`   display:flex; 
    font-size:13px;
    justify-content: center;
    p{
        padding-left:10px;
        padding-right: 10px;
        border-right: 1px solid rgba(35, 35, 39, 0.1);
    }
`;
const Cen=styled.div
`   text-align: center;
    padding: 15px;
`;
const Phai=styled.div
`   text-align: left;
`;
const Icons= styled.div
`   display: flex;
    justify-content: center;
    img{
        padding-right:10px;
        width: 35px;
        height: 20px;
    }
`;
function Whereden() 
{
  return (
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 p-0"><Maun></Maun></div>
            <div class="col-lg-6 p-0">
                <Headde>
                    <b><p>WHER ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED AND EMPOWERED</p></b>
                    <button>Join DEN</button>
                </Headde>
            </div>
            <div class="col-lg-3 p-0"><Maun></Maun></div>
        </div>
        
        <div class="d-md-none d-sm-block d-block m-0">
            <Cen>
                <img src={imgd} width="60px" height="60px"/>               
                <p>We connect, inspire, and empower the world’s entrepreneurs.</p>                                  
                <b>USA Headquarters</b>
                <p>612 East 6th Street</p>
                <p>Austin, TX 78701 USA</p>
                <p><a href="#">austin@draperstartuphouse.com</a> </p>
                <b>International Headquarters</b>
                <p>39 Ann Siang Road </p>
                <p>Singapore 069716</p>
                <a href="#">hello@draperstartuphouse.com</a>
                <p></p>
                <Nutour>
                    Join our communnity
                </Nutour>
                <Bor></Bor>
                <Phai><b>WHAT WE DO</b></Phai><p></p>
                <div class="row">
                    <div class="col-sm-6 col-6">
                        <p>Community - DEN</p>
                        <p>Ventures</p>
                        <p>Academy</p>
                    </div>

                    <div class="col-sm-6 col-6">
                        <p>Services  </p>
                        <p>Partnerships</p>
                        <p>Location Partners</p>
                    </div>
                </div>
                <Bor></Bor>
                <Phai><b>HOW FAR DO YOU WANT TO GO TODAY?</b></Phai><p></p>
                <div class="row">
                    <div class="col-sm-6 col-6">
                        <p>Bali</p>
                        <p>Bangalore</p>
                        <p>Buenos Aires</p>
                        <p>Singapore</p>
                        <p>Lisbon</p>
                        <p>Canary Islands</p>
                        <p>Chiang Mai</p>
                        <p>Da Nang</p>
                        <p>Valencia</p>
                        <p>Manila</p>
                        <p>Penang </p>
                    </div>
                    <div class="col-sm-6 col-6">
                        <p>Penang </p>
                        <p> Canary Islands</p>
                        <p>Valencia </p>
                        <p>Lisbon</p>
                        <p>Manila</p>
                        <p>Penang</p>
                        <p>Valencia</p>
                        <p>Manila</p>
                        <p>Lisbon</p>
                        <p>Penang</p>
                    </div>
                </div>             
            </Cen>
        </div> 
        <Mai>
            <div class="row ">           
                <div class="col-lg-1 d-lg-block col-md-1 d-md-block d-sm-none d-none m-0">
                    <img src={imgd} width="60px" height="60px"/>
                </div>
                <div class="col-lg-11 col-md-11 m-0">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 d-lg-block d-md-block d-sm-none d-none">  
                            <We>
                            <p>We connect, inspire, and empower the world’s entrepreneurs.</p>             
                            </We>                       
                            <Wec></Wec>
                            <b>USA Headquarters</b>
                            <p></p>
                            <p>612 East 6th Street</p>
                            <p>Austin, TX 78701 USA</p>
                            <p><a href="#">austin@draperstartuphouse.com</a> </p>                           
                            <b>International Headquarters</b>
                            <p></p>
                            <p>39 Ann Siang Road </p>
                            <p>Singapore 069716</p>
                            <a href="#">hello@draperstartuphouse.com</a>   
                        </div>
                        <div class="col-lg-8 col-md-8 d-lg-block d-md-block d-sm-none d-none"> 
                            <b>WHAT WE DO</b>
                            <p></p>
                            <div class="row">
                                <div class="col-lg-3 col-md-2">
                                    <p>Community - DEN</p>
                                    <p>Ventures</p>
                                </div>
                                <div class="col-lg-2 col-md-2">
                                    <p>Academy </p>
                                    <p>Services</p>
                                </div>
                                <div class="col-lg-3 col-md-3">
                                    <p>Partnerships </p>
                                    <p>Location Partners</p>
                                </div>
                                <div class="col-lg-1 d-md-none d-lg-block"></div>
                                <div class="col-lg-3 col-md-5 ">
                                    <Nutour>
                                        Join our communnity
                                    </Nutour>
                                </div>
                            </div>                
                            <Bor></Bor>
                            <b>HOW FAR DO YOU WANT TO GO TODAY?</b>    
                            <p></p>
                            <div class="row">
                                <div class="col-lg-2 col-md-2">
                                    <p>Bali</p>
                                    <p>Bangalore</p>
                                    <p>Buenos Aires </p>
                                    <p>Singapore</p>
                                    <p>Lisbon</p>
                                </div>
                                <div class="col-lg-2 col-md-2">
                                    <p>Canary Islands</p>                       
                                    <p>Chiang Mai </p>
                                    <p>Da Nang</p>
                                    <p>Valencia</p>
                                </div>
                                <div class="col-lg-2 col-md-2">
                                    <p>Lisbon  </p>
                                    <p> Manila</p>
                                    <p>Penang</p>
                                    <p>Canary Islands</p>
                                    <p> Valencia</p>
                                </div>
                                <div class="col-lg-2 col-md-2">
                                    <p>Lisbon </p>
                                    <p> Manila</p>
                                    <p>Penang </p>
                                    <p>Bangalore</p>
                                </div>
                                <div class="col-lg-2 col-md-2">
                                    <p>Lisbon  </p>
                                    <p>Manila</p>
                                    <p>Penang</p>
                                    <p> Bangalore</p>
                                </div>
                                <div class="col-lg-2 col-md-2"></div>
                            </div>
                        </div>
                    </div>
                    <Menufoot>
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                                <p>Copyright © Draper Startup House 2021</p>
                            </div>
                            <div class="col-lg-6 col-md-5 col-sm-12 col-12">
                                <Menuf>
                                    <p>Home</p>
                                    <p>About</p>
                                    <p>Stories</p>
                                    <p>Contact</p>
                                    <p>Privacy Policy</p>
                                </Menuf>
                            </div>
                            <div class="col-lg-1 col-md-1 "></div>
                            <div class="col-lg-2 col-md-2 col-sm-12 col-12">
                                <Icons>
                                    <img src={w1}/>
                                    <img src={w2} />
                                    <img src={w3} />
                                    <img src={w4} />
                                </Icons>             
                            </div>
                        </div>
                    </Menufoot>         
                </div>               
            </div> 
        </Mai>       
    </div>
  )
}
export default Whereden;