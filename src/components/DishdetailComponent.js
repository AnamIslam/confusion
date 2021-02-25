import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component{

    constructor(props){
        super(props);
        console.log(this.state);

    }

    renderDish(dish){
        return (
            <Card>
               <CardImg top src={dish.image} alt={dish.name}/>
               <CardBody>
                <CardTitle heading>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody> 
            </Card>
        );
    }

    renderComments(dishcomments){
        const comments = dishcomments.map((comment)=>{
            return (
                <li key="{comment.id}">  {comment.comment}
                <br/>
                --{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                <br/> 
                </li>
                
            );
        })

        return(
            <div>
                <h4>Comments</h4>
                <div className="row">
                    {comments}
                </div>
            </div>
        );
    }

    render(){
        
        const dishDetails = this.props.dish;
        console.log(dishDetails);

        if(dishDetails ==null)
        {
            return (<div></div>);
        }
        else {
            
            return (
                <div className="row">
                    <div className= "col-12 col-md-5 m-1">
                        {this.renderDish(dishDetails)}
                    </div>
                    <div className= "col-12 col-md-5 m-1">
                    {this.renderComments(dishDetails.comments)}
                    </div>
                </div>
                )    
        }
        
    }

}
export default DishDetail;