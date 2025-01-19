import PlusIcon from "../assets/plus-icon.svg";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { Trip } from "../types";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { Text } from "./Text";
import { Button } from "./Button";

const trip: Trip = {
    from: "Berlin",
    to: "Munich",
    departureLocation: "Berlin looooooooooooooooooooooooooooooooooong location",
    arrivalLocation: "Munich",
    startDate: "Fri,7 Mar 2024",
    endDate: "Fri,7 Mar 2024",
    departureTime: "08:00", // in practice this should be an ISO string (eg: 2025-01-19T12:00:00.000Z) and we do not need startDate and endDate
    arrivalTime: "13:00",
    id: "1234",
    bookingNr: "9737723863",
};

export default function TripCard() {
    return (
        <Card data-testid="trip-card">
            <CardHeader trip={trip} onClick={() => {}} />
            <CardBody trip={trip} />
            <CardFooter>
                <Button
                    onClick={() => {
                        console.log("Add a return trip");
                    }}
                    startAdornment={
                        <img
                            src={PlusIcon}
                            alt="Plus icon"
                            className="button-icon"
                        />
                    }
                >
                    <Text className="button-text">Add a return trip</Text>
                </Button>
            </CardFooter>
        </Card>
    );
}
