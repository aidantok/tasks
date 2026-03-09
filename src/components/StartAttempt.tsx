import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(5);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startAttempt(): void {
        setAttempts(attempts - 1);
        setInProgress(true);
    }

    return (
        <span>
            <Button
                onClick={() => {
                    startAttempt();
                }}
                disabled={!inProgress && attempts > 0 ? false : true}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInProgress(false);
                }}
                disabled={inProgress ? false : true}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={inProgress ? true : false}
            >
                Mulligan
            </Button>
            Attempts: {attempts}
        </span>
    );
}
