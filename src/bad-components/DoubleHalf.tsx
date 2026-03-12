import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    function Doubler({
        onDouble,
    }: {
        onDouble: () => void;
    }): React.JSX.Element {
        return <Button onClick={onDouble}>Double</Button>;
    }

    function Halver({ onHalve }: { onHalve: () => void }): React.JSX.Element {
        return <Button onClick={onHalve}>Halve</Button>;
    }

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler
                onDouble={() => {
                    setDhValue((value) => 2 * value);
                }}
            ></Doubler>
            <Halver
                onHalve={() => {
                    setDhValue((value) => value * 0.5);
                }}
            ></Halver>
        </div>
    );
}
