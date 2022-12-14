import React from 'react';
import styled from 'styled-components';

import But from './But';

import pera from '../images/pera.png';
import perb from '../images/perb.png';
import perc from '../images/perc.png';
import tentrai from '../images/tentrai.png';
import tenphai from '../images/tenphai.png';

const Whatd = styled.div
`   background-color: #E9ECF1;
    padding-top: 50px;
    padding-left: 8%;
    padding-right: 8%;
`;

const Hea = styled.div
`   color: #204370;
    font-size:27px;
    margin-top:20px;
    margin-bottom:50px;
    line-height: 35px;
`;

const Nutten = styled.div
`   display: flex;
    margin-top: 50px;
    margin-right: 30px;
    button{
        width: 40px;
        height: 30px;
        padding-top: 2px;
        padding-bottom: 30px;
        border-left: none;
        border-bottom: none;
        border-top: none;
        border-right: 1px solid white;
        background-color: rgba(23, 41, 64, 0.8);
    }
`;

const Imgper1 = styled.div
`  background-image: url(${pera});
    margin-bottom: 70px;
    width:100%;
    background-size: 100%100%;
    font-size: 12px;
    padding-top: 23%;
    padding-left: 7%;
    padding-right:5%;
    div{
        height: 70px;
        margin-left:37%;
        //margin-bottom: 10px;;
        b{
            font-size:15px;
        }       
    }
`;

const Imgper2 = styled.div
`  background-image: url(${perb});
    width:100%;
    background-size: 100%100%;
    font-size: 12px;
    padding-top: 23%;
    padding-left: 7%;
    padding-right:5%;
    div{
        height: 70px;
        margin-left:37%;
        //margin-bottom: 10px;;
        b{
            font-size:15px;
        }       
    }
`;

const Imgper3 = styled.div
`  background-image: url(${perc});
    width:100%;
    background-size: 100%100%;
    font-size: 12px;
    padding-top: 23%;
    padding-left: 7%;
    padding-right:5%;
    div{
        height: 70px;
        margin-left:37%;
       // margin-bottom: 10px;;
        b{
            font-size:15px;
        }       
    }
`;


const Foott = styled.div
`   color: white;
    background-color:#204370;
    font-size:25px;
    font:Alternate Gothic No1 D;
    text-align: center;
    margin-top: 0;
    margin-left:0;
    padding-top: 50px;
    padding-left: 12%;
    padding-right: 12%;
    padding-bottom: 50px;
    width: 100%;
    line-height: 35px;
`;

const Maunen=styled.div
`   background-color: #E9ECF1;
    width:100%;
    height: 50%;
    margin-left:0;
    margin-right:0;
`;

function Whatden() 
{
  return (
    <div>
        <Whatd>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                    <Hea>
                            <b>WHAT PEOPLE ARE</b>
                            <p><b>SAYING ABOUT DEN</b></p>
                    </Hea>
                        
                    </div>

                    <div class="col-lg-7 col-md-5 d-sm-none d-none d-md-block d-lg-block"></div>

                    <div class="col-lg-1 col-md-1 d-sm-none d-none d-md-block d-lg-block">
                        <Nutten>
                            <button>
                                <img src={tentrai} width="12px" height="10px"/>
                            </button>

                            <button>
                                <img src={tenphai} width="12px" height="10px" />
                            </button>
                        </Nutten>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 d-sm-none d-none d-md-block">
                        <Imgper1>
                            <div>
                                <b>Simon JD</b>
                                <p>Co-Founder and CEO, Travelio</p>
                            </div>
                            <p>Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done. </p>
                            <p>Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.</p>
                            <a href="#">Learn more</a>
                            <p></p>
                            <br></br>
                        </Imgper1>
                    </div>

                    <div class="col-md-4 d-sm-none d-none d-md-block">
                        <Imgper2>
                            <div>
                                <b>Jane Cooper</b>
                                <p>Co-Founder and CEO, Travelio</p>
                            </div>
                            <p>Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done. </p>
                            <p>Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.</p>
                            <a href="#">Learn more</a>
                            <p></p>
                            <br></br>
                        </Imgper2>
                    </div>

                    <div class="col-md-4 d-sm-none d-none d-md-block">
                        <Imgper3>
                            <div>
                                <b>Albert Flores</b>
                                <p>Marketing Coordinator, Gillette</p>
                            </div>
                            <p>Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done. </p>
                            <p>Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.</p>
                            <a href="#">Learn more</a>
                            <p></p>
                            <br></br>
                        </Imgper3>
                    </div>
                </div>    

                <But />
            </div> 
        </Whatd>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1 col-sm-1 col-1 p-0">
                    <Maunen></Maunen>
                </div>

                <div class="col-md-10 col-sm-10 col-10 p-0">
                    <Foott>
                        <b>DRAPER STARTUP HOUSR IS ON A MISSION TO ENABLE ONE MILLION ENTREPRENEURS WORLDWIDE BY 2023</b>
                    </Foott>
                </div>

                <div class="col-md-1 col-sm-1 col-1 p-0">
                    <Maunen></Maunen>
                </div>
            </div>
        </div>
                      
           
             
    </div>
  )
}

export default Whatden;