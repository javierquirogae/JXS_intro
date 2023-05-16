// renders an h1 with the text “My very first component”

const First = () => {
    return (
        <h1>My very first component</h1>
    )
};

ReactDOM.render(<First/>, document.getElementById('root'));