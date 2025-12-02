import React, { Component } from 'react';
import './Restaurant.css';
import { Card, Button } from 'react-bootstrap';
import Copyright from '../copyright/Copyright';

class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuData: { flag: false, foodData: null, drinkData: null }
        };

        this.getData = this.getData.bind(this);
    }

    async getData() {
        let backend_url = 'http://localhost:3200/data';
        let response = await fetch(backend_url);
        let responseData = await response.json();

        this.setState({
            menuData: {
                flag: true,
                foodData: responseData[0],
                drinkData: responseData[1]
            }
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const { menuData } = this.state;

        return (
            <div className='pri'>
                <div>
                    <h1> Food Menu </h1>

                    {
                        (menuData.flag) ?
                            (<div className='food-container'>
                                {
                                    menuData.foodData.map(item => {
                                        return (
                                            <Card className='food-item' style={{ width: '18rem' }} key={item.foodName}>
                                                <Card.Img variant="top" src={'images/food/' + item.foodName + '.jpg'} />
                                                <Card.Body className={(item.catogory === 'veg') ? 'veg' : 'non-veg'}>
                                                    <Card.Title>{item.foodName} : {item.price} </Card.Title>
                                                    <Card.Text>
                                                        {item.foodName} is an amazing Dish. You should try it.
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Category:
                                                        <img src={(item.catogory === 'veg')
                                                            ? 'images/veg.png'
                                                            : 'images/non-veg.png'}
                                                            height="30px" width='30px'
                                                        />
                                                    </Card.Text>
                                                    <Button variant="primary">Buy Now</Button>
                                                </Card.Body>
                                            </Card>
                                        );
                                    })
                                }
                            </div>)
                            : (<h2>Loading</h2>)
                    }

                    <h1> Drink Menu </h1>

                    {
                        (menuData.flag) ?
                            (<div className='drink-container'>
                                {
                                    menuData.drinkData.map(item => {
                                        return (
                                            <Card className='drink-item' style={{ width: '18rem' }} key={item.drinkName}>
                                                <Card.Img variant="top" src={'images/drink/' + item.drinkName + '.jpg'} />
                                                <Card.Body className={(item.catogory === 'mocktail') ? 'mocktail' : 'cocktail'}>
                                                    <Card.Title>{item.drinkName} : {item.price} </Card.Title>
                                                    <Card.Text>
                                                        {item.drinkName} is an amazing Drink. You should try it.
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Category: {item.catogory}
                                                    </Card.Text>
                                                    <Button variant="primary">Buy Now</Button>
                                                </Card.Body>
                                            </Card>
                                        );
                                    })
                                }
                            </div>)
                            : (<h2>Loading</h2>)
                    }

                </div>

                <Copyright />
            </div>
        );
    }
}

export default Restaurant;
