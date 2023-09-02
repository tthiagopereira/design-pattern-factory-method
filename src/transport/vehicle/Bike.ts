import IVehicle from "./interface/IVehicle";

export default class Bike implements IVehicle{
    getCargo(): void {
        console.log("Pegando a mercadoria com a bike")
    }

    startRoute(): void {
        this.getCargo();
        console.log("Iniciando entrega de bike")
    }

}