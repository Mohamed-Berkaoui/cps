import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './Image';
import Name from './Name';
import Price from './Price'

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image()} />
      <Card.Body>
        <Card.Title>  <Name/></Card.Title>
        <Card.Text>

    <Price/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;