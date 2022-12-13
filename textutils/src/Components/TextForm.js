import React, { useState } from 'react'



export default function TextForm(props) {
    // Handle upper case
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        
        setText(newText);
    };

    // Handle Lower case
    const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        
    };
    // handle clear all
    const handleClearAll = ()=>{
        let newText = '';
        setText(newText);
    }

    // handle copy to clipboard
    const handleCopyToClipboard = ()=>{
        let text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value)
    }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    ;}

    const [text, setText] = useState('');
    
    // textarea styles
    const [myTextStyle, setMyTextStyle] = useState({
        color : 'black',
    });
        // set btn Text
        const [btnText, setBtnText] = useState("color green")

    const changeTextColor = ()=>{
        if(myTextStyle.color === 'black'){
            setMyTextStyle({
                color : 'green'
            })
            setBtnText("color black")
        }
            else{
                setMyTextStyle({
                    color: 'black'
                })
                setBtnText("color green")
            }
        
    };

    // handle extra spaces
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // handle dark mode




    
    return (
        <>
            <div style={{color: props.Mode ==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{color: props.Mode ==='dark'?'white':'black'}} className={`form-control bg-${props.Mode}`} value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
                <button className="btn btn-primary mx-2 bg-dark" onClick={handleLoClick}>convert to lowercase</button>
                <button className="btn btn-secondary mx-2 " onClick={handleCopyToClipboard}>copy to clipboard</button>
                <button className="btn btn-danger mx-2 " onClick={handleClearAll}>clear all</button>
                <button className="btn btn-success mx-2 " onClick={handleExtraSpaces}>remove space</button>
                {/* <button className="btn btn-dark mx-2 " onClick={props.toggleMode}>dark mode</button> */}

                

            </div>

            {/* summary */}
            <div className="container my-3" style={{color: props.Mode ==='dark'?'white':'black'}}>
                <h1>Your text Summary</h1>
                <p>{text.split("").length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes to read</p>
                <h2>Prevview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
