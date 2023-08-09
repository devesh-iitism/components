import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: '123',
            label: 'Header 1',
            content: 'a lsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv lsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv lsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv lsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv'
        },
        {
            id: '1234',
            label: 'Header 2',
            content: 'alsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv lsnclksndv  lsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv sdlkvnsdlvsd lskvnslkdvs dsdvlsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv'
        },
        {
            id: '12345',
            label: 'Header 3',
            content: 'alsnclksndv sdlkvnsdlvsd lsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv lsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv lsnclksndv sdlkvnsdlvsd lskvnslkdvs dsdv lskvnslkdvs dsdv'
        }
    ];

    return <Accordion items={items}/>;
}

export default App;