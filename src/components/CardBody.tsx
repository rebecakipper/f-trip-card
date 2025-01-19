import { Trip } from "../types";
import "./CardBody.scss";

interface CardBodyProps {
    trip: Trip;
}

export const CardBody = ({ trip }: CardBodyProps) => {
    const tripDurationInDays = 3; //TODO: calculate the duration of the trip

    return (
        <div className="trip-card__body">
            <div className="trip-card__date">
                <h3 className="trip-card__date-start">{trip.startDate}</h3>
            </div>
            <ul className="trip-card__connection">
                <li className="trip-card__connection-element">
                    <p className="trip-card__location">
                        {trip.departureLocation}
                    </p>
                    <p className="trip-card__time">
                        {trip.departureTime}
                        {tripDurationInDays && (
                            <sup className="trip-card__sup">
                                +{tripDurationInDays - 1}
                            </sup>
                        )}
                    </p>
                </li>
                <li className="trip-card__connection-element">
                    <p className="trip-card__location">
                        {trip.arrivalLocation}
                    </p>
                    <p className="trip-card__time">
                        {trip.arrivalTime}
                        {tripDurationInDays && (
                            <sup className="trip-card__multi-day">
                                +{tripDurationInDays - 1}
                            </sup>
                        )}
                    </p>
                </li>
            </ul>
        </div>
    );
};
