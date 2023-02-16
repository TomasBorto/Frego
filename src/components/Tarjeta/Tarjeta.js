import Card from 'react-bootstrap/Card';

const Tarjeta = ({ img, Titulo, Texto }) => {
  return (
    <Card style={{ width: '18rem',  backgroundColor: '#dcdcdc', marginTop: '10px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{Titulo}</Card.Title>
        <Card.Text>
          {Texto}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;