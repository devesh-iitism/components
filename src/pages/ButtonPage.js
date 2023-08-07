import Button from "../components/Button";
import { GoBell, GoDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    return (
        <div>
            <div>
                <Button className="mb-5" success rounded><GoBell />Click Me!</Button>
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

export default ButtonPage;