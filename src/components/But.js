import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import '../App.css';

import pera from '../images/pera.png';
import perb from '../images/perb.png';
import perc from '../images/perc.png';

const Imgper1 = styled.div
`  background-image: url(${pera});
    //margin-bottom: 10px;
    width:100%;
    background-size: 100%100%;
    font-size: 12px;
    padding-top: 17%;
    padding-left: 7%;
    //padding-right:5%;
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
   // margin-bottom: 30px;
    width:100%;
    background-size: 100%100%;
    font-size: 12px;
    padding-top: 17%;
    padding-left: 7%;
   //padding-right:5%;
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
    //margin-bottom: 30px;
    width:100%;
    background-size: 100%100%;
    font-size: 12px;
    padding-top: 17%;
    padding-left: 7%;
    //padding-right:5%;
    div{
        height: 70px;
        margin-left:37%;
        //margin-bottom: 10px;;
        b{
            font-size:15px;
        }       
    }
`;

const Butn=styled.div
`   background-color:#E9ECF1;
`;

const Buon=styled.div
`   text-align: center;
    padding-top: 30px;
    padding-bottom: 50px;
    button
    {
        border: none;
        background-color:#E9ECF1;
        padding:0;
        margin:0;
        
    }
`;

function But()
{
    const [an1, setAn1] = useState("block");
    const [an2, setAn2] = useState("none");
    const [an3, setAn3] = useState("none");

    const [mau1, setMau1] = useState("#204370");
    const [mau2, setMau2] = useState("#D2D9E2");
    const [mau3, setMau3] = useState("#D2D9E2");
    
    function but1()
   {
        setAn1('block');
        setAn2('none'); 
        setAn3('none');
        setMau1('#204370'); 
        setMau2('#D2D9E2'); 
        setMau3('#D2D9E2'); 
    };

    function but2()
    {
        setAn1('none'); 
        setAn2('block'); 
        setAn3('none');
        setMau1('#D2D9E2'); 
        setMau2('#204370'); 
        setMau3('#D2D9E2');      
    };

    function but3()
    {
        setAn1('none'); 
        setAn2('none'); 
        setAn3('block');
        setMau1('#D2D9E2'); 
        setMau2('#D2D9E2'); 
        setMau3('#204370'); 
    };
   
    return (
        <div class="row">
            <div class="d-sm-block d-block d-md-none">
                <Butn>
                    <Imgper1 style={{display: an1} }>
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

                
                    <Imgper2 style={{display: an2 } }>
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

                    <Imgper3 style={{display: an3} }>
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
                    
                    <Buon>
                        <button style={{color: mau1} } onClick={but1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            </svg>
                        </button>
                
                        <button style={{color: mau2} } onClick={but2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            </svg>
                        </button> 

                        <button style={{color: mau3} } onClick={but3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            </svg>
                        </button>    
                    </Buon>
                </Butn>
            </div>
        </div>
    );
}



export default But;

