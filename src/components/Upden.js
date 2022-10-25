import React from 'react';
import styled from 'styled-components';
import { useState } from "react";

import up1 from "../images/up1.png";
import up2 from "../images/up2.png";
import up3 from "../images/up3.png";
import up4 from "../images/up4.png";
import up5 from "../images/up5.png";

const Upd= styled.div
`   padding-left: 8.3%;
    padding-right: 8.3%;
`;

const Headd= styled.div
`   margin-top: 100px;
    margin-bottom: 50px;
    border-bottom: 5px solid #E9ECF1;
    padding-bottom: 20px;
`;

const Heade= styled.h1
`   color: #204370;
    font-size: 27px;
    padding-top:10px;
    line-height: 45px;
`;

const Doangiua= styled.div
`   color:rgba(35, 35, 39, 0.8);
    font-size: 12px;
    width: 100%;
    margin-top: 15px;
`;

const Nutsee= styled.div
`   text-align: right;
    button{
        padding-top: 12px;
        padding-bottom:12px;
        padding-left:20px;
        padding-right:20px;
        border: 1px solid #204370;
        background-color: white;
        font-size: 13px;
        border-radius: 25px;
    }
`;

const Nutse= styled.div
`   margin-bottom: 50px;
    button{
        padding-top: 12px;
        padding-bottom:12px;
        padding-left: 10px;
        padding-right:10px;
        border: 1px solid #204370;
        background-color: white;
        font-size: 13px;
        border-radius: 25px;
        width: 100%;
    }
`;

const Phong= styled.div
`   margin-bottom: 50px;
    padding-top: 10px;
    img{
        width:100%;
        height: 300px;
    }
    div{
        height: 90px;
        padding-top: 15px; 
    }
    p{
        color:blue;
        margin-top: 15px;
    }
    button{
        margin-top: 10px;
        background: #FFCC00;
        border-radius: 40px;
        border:#FFCC00;
        width: 120px;
        height: 45px;
        color: black;
    }
`;


function Upden() 
{
    const [al, setAl] = useState("none");
    const [al2, setAl2] = useState("block");

    function All()
    {
        setAl('block');
        setAl2('none');
    }

    function One()
    {
        setAl('none');
        setAl2('block');
    }

  return (
    <Upd>
        <div class="container-fluid">
            <Headd>
                <div class="row">
                    <div class="col-lg-4 col-md-5 col-sm-12 col-12">
                        <Heade>
                            UPCOMING EVENTS
                        </Heade>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                        <Doangiua>
                            <p>Find the best offline and online events and training programs right here.</p>
                        </Doangiua>
                    </div>

                    <div class="col-lg-2 d-md-none d-sm-none d-none d-lg-block"></div>

                    <div class="col-lg-3 col-md-4 d-sm-none d-none d-md-block">
                        <Nutsee>
                            <button>
                                See all upcoming events
                            </button>                          
                        </Nutsee>
                    </div>
                </div>
            </Headd>
            
            <div class="row">
                <div class="col-md-4">
                    <Phong>
                        <img src={up1} />
                        <p>15 JAN 2021</p>
                        <div><b>HOW TO TEST IDEAS WITH NO MONEY OR TIME</b></div>
                        <p></p>
                        <button>
                            Register
                        </button>
                    </Phong>
                </div>

                <div class="col-md-4 d-md-block d-sm-none d-none" >
                    <Phong>
                        <img src={up2} />
                        <p>08 JUN 2021</p>
                        <div><b>CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA</b></div>
                        <p></p>
                        <button>
                            Register
                        </button>
                    </Phong>
                </div>

                <div class="col-md-4 d-md-block d-sm-none d-none">
                    <Phong>
                        <img src={up3} />
                        <p>17 MAY 2021</p>
                        <div><b>YOGA-FIRST CASS FOR BEGINER-FEEL FREE TO SIGN UP HERE</b></div>
                        <p></p>
                        <button>
                            Register
                        </button>
                    </Phong>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 d-md-block d-sm-none d-none">
                    <Phong>
                        <img src={up4} />
                        <p>15 JAN 2021</p>
                        <div><b>HOW TO TEST IDEAS WITH NO MONEY OR TIME</b></div>
                        <p></p>
                        <button>
                            Register
                        </button>
                    </Phong>
                </div>

                <div class="col-md-4 d-md-block d-sm-none d-none">
                    <Phong>
                        <img src={up5} />
                        <p>08 JUN 2021</p>
                        <div><b>CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA</b></div>
                        <p></p>
                        <button>
                            Register
                        </button>
                    </Phong>
                </div>
            </div>

            <div class=" d-sm-block d-block d-md-none">
                <Nutse>
                    <button style={{display: al2} } onClick={All}>
                        See all upcoming events
                    </button>                 
                </Nutse>
            </div>

            <div style={{display: al} }>
                <Phong>
                    <img src={up2} />
                    <p>08 JUN 2021</p>
                    <b>CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA</b>
                    <p></p>
                    <button>
                        Register
                    </button>
                </Phong>

                <Phong>
                        <img src={up3} />
                        <p>17 MAY 2021</p>
                        <b>YOGA-FIRST CASS FOR BEGINER-FEEL FREE TO SIGN UP HERE</b>
                        <p></p>
                        <button>
                            Register
                        </button>
                </Phong>

                <Phong>
                        <img src={up4} />
                        <p>15 JAN 2021</p>
                        <b>HOW TO TEST IDEAS WITH NO MONEY OR TIME</b>
                        <p></p>
                        <button>
                            Register
                        </button>
                
                </Phong>

                <Phong>
                        <img src={up5} />
                        <p>08 JUN 2021</p>
                        <b>CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA</b>
                        <p></p>
                        <button>
                            Register
                        </button>
                </Phong>

                <Nutse>
                    <button style={{display: al} } onClick={One}>
                        See one upcoming events
                    </button>                 
                </Nutse>
            </div>
        </div>
    </Upd>
  )
}

export default Upden;