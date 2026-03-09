import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    /**
     * Holidays included: Dragon Boat Festival, Halloween, Diwali, Christmas, Easter
     */
    type Holiday = "🎏" | "🎃" | "🪔" | "🎄" | "🐰";

    const [holiday, setHoliday] = useState<Holiday>("🐰");

    function advanceByAlphabet(): void {
        holiday == "🎄" ? setHoliday("🪔")
        : holiday == "🪔" ? setHoliday("🎏")
        : holiday == "🎏" ? setHoliday("🐰")
        : holiday == "🐰" ? setHoliday("🎃")
        : setHoliday("🎄");
    }
    function advanceByOrder(): void {
        holiday == "🐰" ? setHoliday("🎏")
        : holiday == "🎏" ? setHoliday("🪔")
        : holiday == "🪔" ? setHoliday("🎃")
        : holiday == "🎃" ? setHoliday("🎄")
        : setHoliday("🐰");
    }

    return (
        <span>
            <Button
                onClick={() => {
                    advanceByAlphabet();
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    advanceByOrder();
                }}
            >
                Advance by Year
            </Button>
            Holiday: {holiday}
        </span>
    );
}
