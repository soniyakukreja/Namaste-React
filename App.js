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

const h1 = React.createElement("div",{"id":"parent"},[
    React.createElement("div",{"id":"child1"},
        [
            React.createElement("h1",{"id":"heading1"},"I'm heading 1 "),
            React.createElement("h2",{"id":"heading2"},"I'm heading 2")
        ]
    ),
    React.createElement("div",{"id":"child2"},
        [
            React.createElement("h1",{"id":"heading3"},"I'm heading 3 "),
            React.createElement("h2",{"id":"heading4"},"I'm heading 4")
        ]
    )
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1);