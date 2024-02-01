// const heading=React.createElement("h1",{id:"heading"},"Hello World From React! ");
//     const root = ReactDOM.createRoot(document.querySelector("#root"));
//     root.render(heading);

    const parent = React.createElement("div" , {id:"parent"} ,React.createElement("div" , {id:"child"} ,React.createElement("h1" ,{id:"head1"},"I am an H1 tag")),React.createElement("div" , {id:"child2"} ,[React.createElement("h1" ,{id:"head2"},"I am an child1 tag"),React.createElement("h1" ,{id:"head3"},"I am an child2 tag")]), );

    const root = ReactDOM.createRoot(document.querySelector("#root"));
   root.render(parent);