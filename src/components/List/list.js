import React, {Component} from 'react'
import Item from '../item/item.js'

class List extends Component{
    constructor(props){
        super(props);

        this.onRemoveItem = this.props.onTaskRemove.bind(this);
        this.onCrossChange = this.props.onCrossChange.bind(this);

    }

    render(){
        var itemsList = this.props.itemList.map(i => {
            return([
                    <Item 
                        key={i.id}
                        item={i} 
                        id={i.id}
                        onRemove={this.onRemoveItem}
                        onCrossChange={this.onCrossChange}/>
                    ]
                )
            })

        return(
            <div className="list">
                {itemsList}
            </div>
        )

    }
}

export default List;