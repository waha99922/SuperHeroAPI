import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import { useState } from "react";
import axios, { Axios } from "axios";
import "./App.css";

function App() {
  const [superHeroes, setSuperHeroes] = useState([]);
  const [search, setSearch] = useState("hulk");
  const [downloadHeroes, setDownloadHeroes] = useState([]);

  const [newIntelligence, setNewIntelligence] = useState();
  const [newStrength, setNewStrength] = useState();
  const [newSpeed, setNewSpeed] = useState();
  const [newDurability, setNewDurability] = useState();
  const [newPower, setNewPower] = useState();
  const [newCombat, setNewCombat] = useState();

  const [isEditOn, setIsEditOn] = useState(false);

  const FetchData = () => {
    fetch(
      "https://www.superheroapi.com/api.php/10228609788692387/search/" + search
    )
      .then((res) => res.json())
      .then((json) => setSuperHeroes(json));
    //.then((json) => console.log(json));
    console.log(
      "https://www.superheroapi.com/api.php/10228609788692387/search/" + search
    );
  };

  const StoreData = () => {
    axios
      .post("http://localhost:3002/api/create", {
        name: superHeroes?.results?.[0].name,
        image: superHeroes?.results?.[0].image.url,
        intelligence: superHeroes?.results?.[0].powerstats.intelligence,
        strength: superHeroes?.results?.[0].powerstats.strength,
        speed: superHeroes?.results?.[0].powerstats.speed,
        durability: superHeroes?.results?.[0].powerstats.durability,
        power: superHeroes?.results?.[0].powerstats.power,
        combat: superHeroes?.results?.[0].powerstats.combat,
      })
      .then(() => {
        console.log("Successfully stored");
      });
  };

  const DownloadData = () => {
    axios.get("http://localhost:3002/api/heroes").then((response) => {
      setDownloadHeroes(response.data);
      console.log("Successfully downloaded");
    });
  };

  const UpdateIntelligenceData = (id) => {
    axios
      .put("http://localhost:3002/api/update", {
        intelligence: newIntelligence,
        id: id,
      })
      .then((response) => {
        setDownloadHeroes(
          downloadHeroes.map((val) => {
            return (val.id = id
              ? {
                  id: val.id,
                  name: val.name,
                  image: val.image,
                  intelligence: newIntelligence,
                  strength: val.strength,
                  speed: val.speed,
                  durability: val.durability,
                  power: val.power,
                  combat: val.combat,
                }
              : val);
          })
        );
        console.log("Successfully updated intelligence");
      });
  };

  const UpdateStrengthData = (id) => {
    axios
      .put("http://localhost:3002/api/update", {
        strength: newStrength,
        id: id,
      })
      .then((response) => {
        setDownloadHeroes(
          downloadHeroes.map((val) => {
            return (val.id = id
              ? {
                  id: val.id,
                  name: val.name,
                  image: val.image,
                  intelligence: val.intelligence,
                  strength: newStrength,
                  speed: val.speed,
                  durability: val.durability,
                  power: val.power,
                  combat: val.combat,
                }
              : val);
          })
        );
        console.log("Successfully updated strength");
      });
  };

  const UpdateSpeedData = (id) => {
    axios
      .put("http://localhost:3002/api/update", {
        speed: newSpeed,
        id: id,
      })
      .then((response) => {
        setDownloadHeroes(
          downloadHeroes.map((val) => {
            return (val.id = id
              ? {
                  id: val.id,
                  name: val.name,
                  image: val.image,
                  intelligence: val.intelligence,
                  strength: val.strength,
                  speed: newSpeed,
                  durability: val.durability,
                  power: val.power,
                  combat: val.combat,
                }
              : val);
          })
        );
        console.log("Successfully updated speed");
      });
  };

  const UpdateDurabilityData = (id) => {
    axios
      .put("http://localhost:3002/api/update", {
        durability: newDurability,
        id: id,
      })
      .then((response) => {
        setDownloadHeroes(
          downloadHeroes.map((val) => {
            return (val.id = id
              ? {
                  id: val.id,
                  name: val.name,
                  image: val.image,
                  intelligence: val.intelligence,
                  strength: val.strength,
                  speed: val.speed,
                  durability: newDurability,
                  power: val.power,
                  combat: val.combat,
                }
              : val);
          })
        );
        console.log("Successfully updated durability");
      });
  };

  const UpdatePowerData = (id) => {
    axios
      .put("http://localhost:3002/api/update", {
        power: newPower,
        id: id,
      })
      .then((response) => {
        setDownloadHeroes(
          downloadHeroes.map((val) => {
            return (val.id = id
              ? {
                  id: val.id,
                  name: val.name,
                  image: val.image,
                  intelligence: val.intelligence,
                  strength: val.strength,
                  speed: val.speed,
                  durability: val.durability,
                  power: newPower,
                  combat: val.combat,
                }
              : val);
          })
        );
        console.log("Successfully updated power");
      });
  };

  const UpdateCombatData = (id) => {
    axios
      .put("http://localhost:3002/api/update", {
        combat: newCombat,
        id: id,
      })
      .then((response) => {
        setDownloadHeroes(
          downloadHeroes.map((val) => {
            return (val.id = id
              ? {
                  id: val.id,
                  name: val.name,
                  image: val.image,
                  intelligence: val.intelligence,
                  strength: val.strength,
                  speed: val.speed,
                  durability: val.durability,
                  power: val.power,
                  combat: newCombat,
                }
              : val);
          })
        );
        console.log("Successfully updated combat");
      });
  };

  const DeleteData = (id) => {
    axios.delete(`http://localhost:3002/api/delete/${id}`).then((response) => {
      setDownloadHeroes(
        downloadHeroes.filter((val) => {
          return val.id != id;
        })
      );
    });
    console.log("Successfully Deleted");
  };

  function PrintData() {
    console.log(superHeroes);
    console.log(search);
  }

  const ToggleIsEditOn = (val) => {
    if (val === false) {
      setIsEditOn(true);
    } else {
      setIsEditOn(false);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1> SuperheroAPI: Developed by Wahab</h1>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Enter Superhero Name"
                  onChange={(event) => setSearch(event.target.value)}
                />
                <Form.Text className="text-muted">
                  Hulk, Superman, Ironman, Binary, etc.
                </Form.Text>
              </Form.Group>
            </Form>
            <Button variant="warning" onClick={() => FetchData()}>
              Search Hero
            </Button>
            <Button variant="warning" onClick={() => PrintData()}>
              Print Data
            </Button>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={superHeroes?.results?.[0].image?.url}
              />
              <Card.Body>
                <Card.Title>
                  {superHeroes?.results?.[0].name ?? "Name"}
                </Card.Title>
                <Card.Text>
                  Intelligence:{" "}
                  {superHeroes?.results?.[0].powerstats?.intelligence ?? 0}
                  <br></br>
                  Strength:{" "}
                  {superHeroes?.results?.[0].powerstats?.strength ?? 0}
                  <br></br>
                  Speed: {superHeroes?.results?.[0].powerstats?.speed ?? 0}
                  <br></br>
                  Durability:{" "}
                  {superHeroes?.results?.[0].powerstats?.durability ?? 0}
                  <br></br>
                  Power: {superHeroes?.results?.[0].powerstats?.power ?? 0}
                  <br></br>
                  Combat: {superHeroes?.results?.[0].powerstats?.combat ?? 0}
                  <br></br>
                </Card.Text>
                <Button variant="primary" onClick={() => StoreData()}>
                  Save
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="scrollable">
            <br></br>
            <h1>Heroes Database:</h1>
            <Button variant="warning" onClick={() => DownloadData()}>
              Download Heroes
            </Button>
            <br></br>
            <text>
              by pressing "Download heroes" button super heroes stored in
              database will be fetched and displayed below
            </text>
            <br></br>
            {downloadHeroes.map((val, i) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={val.image} />
                  <Card.Body>
                    <Card.Title>{val.name}</Card.Title>
                    <Card.Text>
                      Intelligence: {val.intelligence}
                      <br></br>
                      Strength: {val.strength}
                      <br></br>
                      Speed: {val.speed}
                      <br></br>
                      Durability: {val.durability}
                      <br></br>
                      Power: {val.power}
                      <br></br>
                      Combat: {val.combat}
                      <br></br>
                    </Card.Text>
                    <Button
                      variant="warning"
                      onClick={() => ToggleIsEditOn(isEditOn)}
                    >
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => DeleteData(val.id)}>
                      Delete
                    </Button>
                    <br></br>
                    {isEditOn ? (
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Input Intelligence</Form.Label>
                          <Form.Control
                            placeholder="Enter value"
                            onChange={(event) =>
                              setNewIntelligence(event.target.value)
                            }
                          />
                          <Button
                            onClick={() => UpdateIntelligenceData(val.id)}
                          >
                            Update
                          </Button>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Input Strength</Form.Label>
                          <Form.Control
                            placeholder="Enter value"
                            onChange={(event) =>
                              setNewStrength(event.target.value)
                            }
                          />
                          <Button onClick={() => UpdateStrengthData(val.id)}>
                            Update
                          </Button>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Input Speed</Form.Label>
                          <Form.Control
                            placeholder="Enter value"
                            onChange={(event) =>
                              setNewSpeed(event.target.value)
                            }
                          />
                          <Button onClick={() => UpdateSpeedData(val.id)}>
                            Update
                          </Button>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Input Durability</Form.Label>
                          <Form.Control
                            placeholder="Enter value"
                            onChange={(event) =>
                              setNewDurability(event.target.value)
                            }
                          />
                          <Button onClick={() => UpdateDurabilityData(val.id)}>
                            Update
                          </Button>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Input Power</Form.Label>
                          <Form.Control
                            placeholder="Enter value"
                            onChange={(event) =>
                              setNewPower(event.target.value)
                            }
                          />
                          <Button onClick={() => UpdatePowerData(val.id)}>
                            Update
                          </Button>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Input Combat</Form.Label>
                          <Form.Control
                            placeholder="Enter value"
                            onChange={(event) =>
                              setNewCombat(event.target.value)
                            }
                          />
                          <Button onClick={() => UpdateCombatData(val.id)}>
                            Update
                          </Button>
                        </Form.Group>
                      </Form>
                    ) : (
                      <div></div>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
