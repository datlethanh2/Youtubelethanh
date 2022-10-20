import React from 'react';
import styled from 'styled-components';


import doan from '../images/doan.png';
import hoa from '../images/hoa.png';
import mu from '../images/mu.png';
import tay from '../images/tay.png';
import cau from '../images/cau.png';

const Howd=styled.div
`   padding-left: 8%;
    padding-right: 8%;
`;

const Hed=styled.h3
`   font-size: 25px;
    color: #204370;
    margin-top: 30px; 
`;

const Hop=styled.div
`   width: 100%;
    height: 190px;
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    background-color:#F4F6F8;
    margin-top: 20px; 
    text-align:center;
`;

const Hopdong=styled.div
`
    display: flex;   
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top:10px;
    img{
        margin-left: 10%;
        width: 30px;
        height: 30px;
    }
    b{
        margin-right:10%;
        font-size: 28px;
        color: rgba(23, 41, 64, 0.1);
        font-family: 'Alternate Gothic No1 D';
    }
`;

const Hopchu=styled.div
`   padding-left: 9%;
    padding-right: 17%;
    padding-top:15px;
`;

const Boxjoin=styled.div
`   width: 380px;
    padding-top:30%;
    h1{
        color: #204370;
        font-size:27px;
    }
    button
    {
        margin-top: 20px;
        background: #204370;
        border-radius: 40px;
        border:#204370;
        width: 120px;
        height: 45px;
        color: white;
    }
`;

const Doan=styled.div
`   margin-top: 50px;
    margin-bottom: 30px;
    
    img{
        width:100%;
        height:100%;
    }
`;

const Nutt=styled.div
`   width: 100%;
    padding-top:20px;
    text-align: center;
    
    p{
        font-size: 13px;
    }
    button{
        margin-top: 28px;
        background: #204370;
        border-radius: 40px;
        border:#204370;
        width: 120px;
        height: 45px;
        color: white;
        margin-bottom: 30px;
    }
`;

function Howden() 
{
  return (
    <Howd>
        <Hed>HOW DEN WORKS</Hed>

        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <Hop>
                                <Hopdong>
                                    <img src={hoa} />
                                    <b>01</b>
                                </Hopdong>
                                <Hopchu>                      
                                    <b>Say hello and interact on the DEN Slack channel </b>
                                </Hopchu>
                            </Hop>                   
                        </div>
                        
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <Hop>
                                <Hopdong>
                                        <img src={mu} />
                                        <b>02</b>
                                </Hopdong>  
                                <Hopchu>                   
                                    <b>Explore free high-quality on-demand learning content</b>
                                </Hopchu> 
                            </Hop>                   
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <Hop>
                                <Hopdong>
                                        <img src={tay} />
                                        <b>03</b>
                                </Hopdong> 
                                <Hopchu>                     
                                    <b>Meet co-founders, advisors, partners, customers, and investors</b>
                                </Hopchu>
                            </Hop>                   
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <Hop>
                                <Hopdong>
                                        <img src={cau} />
                                        <b>04</b>
                                </Hopdong>  
                                <Hopchu>                                                  
                                    <b>Find opportunities in the global Draper ecosystem</b>
                                </Hopchu> 
                            </Hop>                   
                        </div>
                    </div>
                </div>                  
            </div>

            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-12 col-12">
                    <Boxjoin>
                        <h1>BUT FIRST...</h1>
                        <h1>YOU HAVE TO JOIN</h1>
                        <div class="d-lg-block d-md-block d-sm-none d-none">
                            <p>What are you waiting for? Join DEN today.</p>
                            <button>
                                Join Den
                            </button>
                        </div>
                    </Boxjoin>
                </div>
                <div class="col-lg-1 col-md-2 d-sm-none d-none d-md-block d-lg-block"></div>

                <div class="col-lg-6 col-md-5 col-sm-12 col-12">
                    <Doan>
                        <img src={doan} />
                    </Doan>                  
                </div>
            </div>

            <div class="d-lg-none d-md-none d-sm-block d-block">
                <Nutt>
                    <p>What are you waiting for? Join DEN today.</p>
                    <button>
                        Join Den
                    </button>
                </Nutt>
            </div>
        </div>
    </Howd>   
  )
}

export default Howden;
