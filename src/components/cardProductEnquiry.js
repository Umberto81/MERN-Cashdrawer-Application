import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {connect} from 'react-redux'


const CardProductEnquiry = (props) => {
    console.log(props);

    const {product} = props;

    const list = product.map((item) =>{
      return(
        <div>
<CardTitle>{item.product_description}</CardTitle>
          <CardSubtitle>{item.product_price}</CardSubtitle>
          <CardText>{item.product_code}</CardText>
          <Button>Button</Button>

        </div>
          
      )
    });
  return (
    <div>
      <Card>
       
        <CardBody>
          {list}
        </CardBody>
      </Card>
    </div>
  );
};

const mapStatetoProps = state => ({
  product: state.product
});

const mapDispatchToProps = dipsatch =>({


})

export default connect(mapStatetoProps, mapDispatchToProps)(CardProductEnquiry);
