import './App.css';
import { useState } from 'react';
import { marked } from 'marked';
import { FaFreeCodeCamp, FaExpandArrowsAlt } from "react-icons/fa"

function App() {
const [text, setText] = useState(`
# H1
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25;
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](img.jpg)

**bold text**
`);
const [editor, setEditor] = useState("original");
const [preview, setPreview] = useState("pravi");
const [area, setArea ] = useState("editor");
const [prev, setPrev] = useState("preview")

marked.setOptions({
  breaks: true
})

const change = (event) => {
  setText(event.target.value)};

const expandEditor = () => {
  if(editor === "original") {
    setEditor("novi");
    setPreview("drugi");
    setArea("novieditor");
  }else {
    setEditor("original")
    setPreview("pravi")
    setArea("editor")
    }
};  

const expandPreview = () => {
  if(preview === "pravi") {
    setEditor("drugi");
    setPreview("novi");
    setPrev("noviprev");
  }else {
    setEditor("original")
    setPreview("pravi")
    setPrev("preview")
    }
};


  return (
    <div id="main">
      <div className={editor}>
        <p className="naslov" ><FaFreeCodeCamp className='icon'/> Editor <FaExpandArrowsAlt onClick={expandEditor} className="expand" /></p>
        <textarea id={area}  onChange={change} value={text} ></textarea>
      </div>
    <div className={preview}>
      <p className="naslov"><FaFreeCodeCamp className='icon'/> Previwer <FaExpandArrowsAlt onClick={expandPreview} className="expand" /></p>
      <div id={prev}  dangerouslySetInnerHTML={{
          __html: marked(text),
        }}  
        ></div>
      </div>
      
    </div>
  );
}

export default App;
