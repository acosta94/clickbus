import React, {Component} from 'react';
import Comment from  './Comment';

class Comments extends Component{

    render(){
        return(
          <section className="section container">
            <h2>Comentarios</h2>
            <div className="comments">
            {Object.keys(this.props.comments).map(key => (
                    <Comment
                      key={key}
                      comment = {this.props.comments[key]}
                    />
              ))}
        
            </div>
          </section>
          
        )
    }
}

export default Comments;