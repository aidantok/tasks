import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <span>
            <Button
                onClick={() => {
                    !visible ? setVisible(true) : setVisible(false);
                }}
            >
                Reveal Answer
            </Button>

            {visible && <text>42</text>}
        </span>
    );
}
