import React, {Component} from 'react';
import Swal from "sweetalert2"; 

class Comment extends Component{
    constructor() {  
        super();  
        this.HandleClick = this.HandleClick.bind(this);  
    }  
  
    HandleClick() {  
       const div = ` 
       <div id="full-comment">
            <article class="comment" >
                    <div class="user-img">
                        <img src="https://en.gravatar.com/userimage/18343163/3fd908393aedf6423ec12cacec9a1f50.jpg?size=200" />
                    </div>
                    <div class="data">
                        <p class="user-name">${this.props.comment.created_by}</p>
                        <p class="date">${this.props.comment.created_at}</p>
                        <p class="description">${this.props.comment.description}</p>
                    </div>
            </article>
        </div>`
        Swal.fire({  
            html:  div
        });  
    }  
    render(){
        return(
            <div>
                <article className="comment" >
                    <div className="h-fixed">
                        <div className="user-img">
                            <img src="https://en.gravatar.com/userimage/18343163/3fd908393aedf6423ec12cacec9a1f50.jpg?size=200" alt={this.props.comment.created_by}/>
                        </div>
                        <div className="data">
                            <p className="user-name">{this.props.comment.created_by}</p>
                            <p className="date">{this.props.comment.created_at}</p>
                            <p className="short_description">{this.props.comment.short_description}</p>
                        </div>
                    </div>
                    <div className="watch-more">
                        <button className="btn more" onClick={this.HandleClick}>Ver más</button>
                    </div>
                </article>

               
            </div>
        )
    }
}

export default Comment;