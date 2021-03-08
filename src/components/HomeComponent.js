import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

function RenderCard(item){
    //console.log(item);
    return(
        <Card>
            <CardImg src={item.item.image} alt={item.item.name}/>
            <CardBody>
                <CardTitle>{item.item.name}</CardTitle>
                {item.item.designation? <CardSubtitle>{item.item.designation}</CardSubtitle>:null}
                <CardText>{item.item.decription}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    //console.log(props);
    return(
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;