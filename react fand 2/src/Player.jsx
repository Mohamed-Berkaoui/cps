import { Button, Card } from "react-bootstrap"


function Player({name,team,age,position}) {
  return (
    <div>

        <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>{team}</Card.Title>
        <Card.Text>
        {age}
        </Card.Text>
        <Card.Text>
        {position}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Player