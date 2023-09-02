import Transport from "./Transport";
import IVehicle from "./vehicle/interface/IVehicle";
import Car from "./vehicle/Car";

export default class CartTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Car()
    }

}