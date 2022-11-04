import React from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import { items }from './assets/items'

import './css/skeleton.css'
import './css/normalize.css'
import MusicPlayer from './components/MusicPlayer';

function App(): JSX.Element {
    const [view, setView] = React.useState(false)
    return ( 
        <div className = "App" >
            <Header view={view} setView={setView}></Header>
            <div className = "container row">
                {
                    items.map((item, i: number) => {
                        return(
                            <Card
                                i={i}
                                title={item.title}
                                subtitle={item.subtitle}
                                link={item.link}
                                cover={item.image}>
                            </Card>
                        )
                    })
                }
            </div>
            <MusicPlayer view={view}/>
            <Footer></Footer>
        </div>
    );
}

export default App;