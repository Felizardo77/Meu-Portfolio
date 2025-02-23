import "./CodeBlock.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { allyLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({ language, code} ) => {
  return (
    <div className="code__block">
      <div className="flex__center dot__container">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <SyntaxHighlighter 
        language={language} 
        style={allyLight}
        customStyle={{
            background:"rgba(var(--color-primary-rgb), 0.03)", 
            color:"skyblue",
            fontSize:"14px",
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
