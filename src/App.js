import Button from "./Button";
import { GoBell, GoDownload, GoDatabase } from 'react-icons/go';

function App() {
    return (
        <div>
            <div>
                <Button success rounded><GoBell />Click Me!</Button>
            </div>
            <div>
                <Button danger><GoDownload />Buy Now!</Button>
            </div>
            <div>
                <Button warning><GoDatabase />Hide Ads!</Button>
            </div>
            <div>
                <Button secondary>See Deal</Button>
            </div>
            <div>
                <Button primary rounded>Hooray!</Button>
            </div>
        </div>
    );
}

export default App;