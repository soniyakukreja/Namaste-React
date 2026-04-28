import React from "react";
import ReactDOM from "react-dom/client";
/*
<div id="parent">
    <div id="child1">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2/>
    </div>
    <div id="child2">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2/>
    </div>
</div>
*/

/*
const h1 = React.createElement("div",{"id":"parent"},[
    React.createElement("div",{"id":"child1","key":"child1"},
        [
            React.createElement("h1",{"id":"heading1","key":"h1"},"I'm heading 1 "),
            React.createElement("h2",{"id":"heading2","key":"h2"},"I'm heading 33332")
        ]
    ),
    React.createElement("div",{"id":"child2","key":"child2"},
        [
            React.createElement("h1",{"id":"heading3","key":"h3"},"I'm heading 3 "),
            React.createElement("h2",{"id":"heading4","key":"h4"},"I'm heading 4")
        ]
    )
]);

*/
const Title = ()=><h1 id="heading1">I'm Title component</h1>
const HeadingComponent = ()=>(
    <div id="container" >
        <Title />
        {Title()}
        <Title></Title>
        <h1>Namaste react heading component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);