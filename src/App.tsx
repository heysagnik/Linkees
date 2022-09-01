import React from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import items from './assets/items'

import './css/skeleton.css'
import './css/normalize.css'

function App(): JSX.Element {
    return ( 
        <div className = "App" >
            <Header></Header>
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
            <Footer></Footer>
        </div>
    );
}

export default App;