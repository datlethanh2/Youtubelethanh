import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';

import imgpa from '../images/imgpa.png';
import imgpb from '../images/imgpb.png';
import imgpc from '../images/imgpc.png';
import cham from '../images/cham.png';

const Page=styled.div
`   background-color:#F4F6F8;
    padding-top: 30px;
`;

const Dau=styled.h1
`   text-align: center;
    font-size: 35px;
    margin-top: 30px;
    margin-bottom: 30px; 
    color: #204370;
    line-height: 50px;
`;

const Phananh=styled.div
`  
    width:100%;    
    margin-top: 60px;
    padding: 0;
    img{
        width:100%;
        height:100%;
    }
   
`;

const Phancot=styled.div
`   font-size: 13px;
    width: 100%;
    padding-left: 3%;
    padding-right:3%;
    margin-top: 60px;   
    b{
        font-size: 16px;
    }
    ul{
        padding-left: 15px;
        
    }   li{
        list-style-image: url(${cham});
        list-style-type: none;
        padding-left: 10px;
    }
`;


const Join= styled.div
`   text-align: center;
    margin-top: 30px;
    margin-bottom: 80px;
    button{
        margin-top: 28px;
        background: #204370;
        border-radius: 40px;
        border:#204370;
        width: 120px;
        height: 45px;
        color: white;
    }
    
   
`;

function Pagemain() 
{
  return (
    <Page>
        <div class="container-fluid">
            <div class="row">
                <div class="">
                    <Dau>
                        JOIN THE DRAPER ENTREPRENEUR NETWORK
                    </Dau>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <Phananh>
                        <img src={imgpa} />
                    </Phananh>
                </div>
                <div class="col-lg-1 d-md-none d-sm-none d-lg-block"></div>

                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <Phancot>
                            <b>CONNECT WITH A GLOBAL NETWORK</b>
                            <p></p>
                            <p>DEN membership connects you with inspiring people and ideas to empower your entrepreneurial or fundraising journey.</p>
                            <ul>
                                <li>Discover useful resources, software credits, and perks</li>
                                <li>Find the best events and training programs</li>
                                <li>Meet co-founders, advisors, and partners</li>
                                <li>Search and discover trending topics and insights</li>
                            </ul>
                    </Phancot>
                </div>               
            </div> 

            <div class="row">
                <div class="col-lg-1 d-lg-block d-md-none d-sm-none d-none"></div>

                <div class="col-lg-4 col-md-6 d-md-block d-sm-none d-none">
                    <Phancot>
                        <b>GET INSPIRED BY PEERS AND EXPERTS</b>
                        <p></p>
                        <p>Becoming a successful entrepreneur means surrounding yourself with an inspiring ecosystem like DEN.</p>
                        <ul>
                            <li>Get constructive feedback from industry experts</li>
                            <li>Read startup stories, successes, and failures</li>
                            <li>Get help on investor relations topics like term sheets</li>
                            <li>Find best practices and professional templates</li>
                        </ul>
                    </Phancot>
                </div>

                <div class="col-lg-1 d-lg-block d-md-none d-sm-none d-none"></div>                    

                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <Phananh>
                        <img src={imgpb} />
                    </Phananh>
                </div>

                <div class="d-lg-none d-md-none d-sm-block col-sm-12 d-block col-12">
                    <Phancot>
                        <b>GET INSPIRED BY PEERS AND EXPERTS</b>
                        <p></p>
                        <p>Becoming a successful entrepreneur means surrounding yourself with an inspiring ecosystem like DEN.</p>
                        <ul>
                            <li>Get constructive feedback from industry experts</li>
                            <li>Read startup stories, successes, and failures</li>
                            <li>Get help on investor relations topics like term sheets</li>
                            <li>Find best practices and professional templates</li>
                        </ul>
                    </Phancot>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12" >
                    <Phananh>
                        <img src={imgpc} />
                    </Phananh>
                </div>

                <div class="col-lg-1 d-md-none d-sm-none d-lg-block"></div>

                <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <Phancot>
                        <b>ENTREPRENEURS JOIN THE DEN COMMUNITY</b>
                        <p></p>
                        <p>Our members and their supporters include: founders and teams; mentors and advisors; remote workers and service providers; and angel investors and venture capitalists from around the world.</p>
                        <p>As a DEN member, you can build a market-ready company much faster than ever before.</p>
                    </Phancot>
                </div>
            </div>

            <div class="row">
                <div class="">
                    <Join>
                        <button>Join Den</button> 
                    </Join>
                </div>
            </div>    
        </div>  
    </Page>                      
  )
}

export default Pagemain;