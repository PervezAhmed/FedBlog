import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
    return (

    <div>

  <div className="article">
    <h1 className='article h1'>EXTERNAL CSS</h1><br></br><br></br>
    <p>An external style sheet is a separate file where you can declare all the styles that you want to use on your website. You then link to the external style sheet from all your HTML pages.

      This means you only need to set the styles for each element once. If you want to update the style of your website, you only need to do it in one place.</p><br></br>
    <h2>Advantages of External Style Sheets</h2>
        <p>
        External style sheets have the following advantages over internal and inline styles
        <ul>
          <li>one change to the style sheet will change all linked pages</li>
          <li>you can create classes of styles that can then be used on many different HTML elements</li>
          <li>consistent look and feel across multiple web pages</li>
          <li>improved load times because the css file is downloaded once and applied to each relevant page as needed</li>
        </ul>
        </p>
        <p>
        External style sheets have the following advantages over internal and inline styles
        <ul>
          <li>one change to the style sheet will change all linked pages</li>
          <li>you can create classes of styles that can then be used on many different HTML elements</li>
          <li>consistent look and feel across multiple web pages</li>
          <li>improved load times because the css file is downloaded once and applied to each relevant page as needed</li>
        </ul>
        </p>
        <h2>Link Tag Attributes : </h2>
        <div>
          <h3>The <span>rel</span> Attribute</h3>
          <p>The first of the two indispensable attributes is the rel attribute. You will use this attribute to tell the browser what the relationship is with the imported file.
            You'll write rel="stylesheet" to tell the browser that you are importing a stylesheet.</p>
        </div>
        <div>
          <h3>The <span>href</span> attribute</h3>
          <p>The second indispensable attribute is the href attribute, which specifies the file to import.A common situation is that the CSS file and the HTML file are in the same folder. In such a case you can write href="style.css".
            If the CSS file and the HTML file are in different folders, you need to write the correct path that needs to go from the HTML file to the CSS file.</p>
        </div>
        <div>
          <h3>The <span>type</span> Attribute</h3>
          <p>
            You use the type attribute to define the type of the content you're linking to. For a stylesheet, this would be text/css. But since css is the only stylesheet language used on the web, it is not only optional, but it is even a best practice not to include it.
          </p>
        </div>
        <div></div>
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;
