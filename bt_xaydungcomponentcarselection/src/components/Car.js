import {useState} from "react";

function Car() {
    const carList = ["BMW", "Audi", "Mercedes"];
    const colorList = ["Red", "Blue", "Green"];

    const [selectedCar, setSelectedCar] = useState({
        car: carList[0],
        color: colorList[0],
    });

    const handleCarChange = (event) => {
        const newCar = event.target.value;
        setSelectedCar((previousState) => ({
            ...previousState,
            car: newCar,
        }));
    };
    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setSelectedCar((previousState) => ({
            ...previousState,
            color: newColor,
        }));
    };


    return (
        <div className="car">
            <div>Choose your car and color you want</div>
            <label>
                Select Car:
                <select value={selectedCar.car} onChange={handleCarChange}>
                    {carList.map((car) => (
                        <option key={car} value={car}>
                            {car}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Select Color:
                <select value={selectedCar.color} onChange={handleColorChange}>
                    {colorList.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </label>

            <p>
                You selected a {selectedCar.color} – {selectedCar.car}
            </p>
        </div>
    )
}
export default Car;