import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom" -- older react version

// creation of any element via react
// const heading = React.createElement("h1",
//     { id: 'heading', xyz : 'abc' },
//     "Hello World! I am Mahima");
//    // creation of a root in DOM inside which all the elements will render
//    const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(parent);


//**********Nested React Elements*******//

{/* <div id="parent">
    <div id="child1">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child1">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */}


///******Create React Element using React*******

//ReactElement ==> Object ==> ReactDOM converts it to html while rendering

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement("h1", {key: "h1"}, "I am h1 tag"),
//     React.createElement("h2", {key: "h2"}, "I am h2 tag")
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", {key: "h3"}, "I am h1 tag"),
//     React.createElement("h2", {key: "h4"}, "I am h2 tag")
//   ])
// ]);


///React Element using JSX which gets transpiled by BABEL before passing it to js engine

const jsxHeading = (<h1
  id="heading"
  className="hi">
  Hello there! I am using JSX
</h1>)


//React Component

const Heading = () => (
  <h1>Hi There! this is a react component</h1>
)



   const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);
// root.render(jsxHeading)
  root.render(<Heading/>)