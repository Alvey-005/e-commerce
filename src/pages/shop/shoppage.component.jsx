import React, { Component } from 'react';
import CollectionPrivew from '../../component/collectionpreview/collectionprivew.component';
import SHOP_DATA from './shop.data';
class ShopPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return (
            
            <div className='shop-page'>
                {
                collections.map(({id, ...otherCollection} ) => (
                    <CollectionPrivew key={id} {...otherCollection} />
                ))
                }
            </div>
        );
    }
}
export default ShopPage;