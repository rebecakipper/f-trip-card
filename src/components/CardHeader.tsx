import ArrowBig from "../assets/arrow-big-right.svg";
import ArrowRight from "../assets/arrow-right-l.svg";
import { Trip } from "../types";
import { Button } from "./Button";

import "./CardHeader.scss";

interface CardHeaderProps {
    trip: Trip;
    onClick?: () => void;
}

export default function CardHeader({ trip, onClick }: CardHeaderProps) {
    const { from, to, bookingNr } = trip;

    return (
        <div className="trip-card__header">
            <div className="trip-card__header-label">
                <div className="trip-card__destination">
                    <h3 className="trip-card__location">{from}</h3>
                    <img
                        className="trip-card__arrow-big"
                        src={ArrowBig}
                        alt="Arrow right"
                    />
                    <h3 className="trip-card__location">{to}</h3>
                </div>
                <p className="trip-card__booking-number">
                    Booking number: {bookingNr}
                </p>
            </div>
            {typeof onClick === "function" && (
                <Button
                    className="trip-card__arrow-button"
                    onClick={onClick}
                    endAdornment={<img src={ArrowRight} alt="Arrow right" />}
                />
            )}
        </div>
    );
}
