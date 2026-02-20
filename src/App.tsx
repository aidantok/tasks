import React from "react";
import "./App.css";
import image from "./assets/images/ellie.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        // className unused
        <div className="App">
            <header className="App-header">Site by Aidan Tokarski</header>

            <h1 className="Text-header">
                UD CISC275 with React Hooks and TypeScript
            </h1>

            <p className="Text-header">
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
                className="Button"
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                backgroundColor: "red",
                                height: "20px",
                                width: "70px",
                                fontSize: "4px",
                                color: "white",
                                textAlign: "center",
                            }}
                        >
                            rectangle!
                        </div>

                        <p>Aidan&#39;s personal must-listen song list:</p>
                        <ul>
                            <li>Aja by Steely Dan</li>
                            <li>Conspiracy by Paramore</li>
                            <li>Youngest Daughter by Superheaven</li>
                            <li>*(niche alert) Missing Voices by Lamorn</li>
                        </ul>
                    </Col>

                    <Col>
                        <div
                            style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                backgroundColor: "red",
                                height: "20px",
                                width: "70px",
                                fontSize: "4px",
                                color: "white",
                                textAlign: "center",
                            }}
                        >
                            rectangle!
                        </div>

                        <img
                            className="Image"
                            src={image}
                            alt="A picture of my dog Ellie"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
