import Transport from "./Transport";
import IVehicle from "./vehicle/interface/IVehicle";
import Bike from "./vehicle/Bike";

export default class BikeTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Bike();
    }

}