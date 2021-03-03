import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";





function RenderDish({dish}){
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} width = "100%"/>
           <CardBody>
            <CardTitle heading>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody> 
        </Card>
    );
}

function RenderComments({dishcomments}){
    console.log(dishcomments);
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

    const DishDetail = (props) =>{
        //const dishDetails = props.dish;
        console.log(props);


        if(props.dish) {

            console.log(props.dish.comments);
            
            return (
                <div className ="container">
                    <div className="row">
                        <div className= "col-12 col-md-5 m-1">
                            <RenderDish dish = {props.dish}/>
                        </div>
                        <div className= "col-12 col-md-5 m-1">
                            <RenderComments dishcomments = {props.dish.comments}/>
                        </div>
                    </div>
                </div>
                )    
        }
        else
        {
            return (<div></div>);
        }
    }



export default DishDetail;