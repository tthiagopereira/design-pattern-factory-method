import IVehicle from "./interface/IVehicle";

export default class Car implements IVehicle{
    getCargo(): void {
        console.log("Pegamaos os passageiros")
    }

    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto")
    }

}