import React, {useState} from 'react'

export default function Text() {
 const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
 }
 const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
 }
 const handleClearText = () => {
    let newText ="";
    setText(newText);
 }
 const handleCopyText = () => {
  navigator.clipboard.writeText(text);
  
 }
 
 const handleExtraSpace = () => {
  let newText = text.split(/[ ] + /);
  setText(newText.join(" "))
  
 }
 const handleOnChange = (event) => {
    setText(event.target.value);
 }
 const [text, setText] = useState('Enter text here');

  const textsize = text.split(" ").length -1;
  const readingTime = textsize * 0.008;

 return (
    <div className='container'>
      <label>Enter text to analyse</label>
      <textarea value={text} onChange={handleOnChange}></textarea>

      <button onClick={handleUpClick}>Convert to Uppercase</button>
      <button onClick={handleLoClick}>Convert to Lowercase</button>
      <button onClick={handleClearText}>Clear text</button>
      <button onClick={handleCopyText}>Copy text</button>
      <button onClick={handleExtraSpace}>Remove Spaces</button>

      <h1>Summary</h1>
      <p>{textsize} words and {text.length} Characters</p>
      <p>{readingTime} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
 );
}