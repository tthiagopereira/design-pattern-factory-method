import IVehicle from "./interface/IVehicle";

export default class Motorcycle implements IVehicle{
    getCargo(): void {
        console.log("ja pegamos a encomenda")
    }

    startRoute(): void {
        this.getCargo()
        console.log("Iniciando a corrida da entrega da mercadoria")
    }

}