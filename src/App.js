import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button success rounded outline>Click Me!</Button>
            </div>
            <div>
                <Button danger outline>Buy Now!</Button>
            </div>
            <div>
                <Button warning>Hide Ads!</Button>
            </div>
            <div>
                <Button secondary outline>See Deal</Button>
            </div>
            <div>
                <Button primary rounded>Hooray!</Button>
            </div>
        </div>
    );
}

export default App;