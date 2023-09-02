import Transport from "./transport/Transport";
import CartTransport from "./transport/CartTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import BikeTransport from "./transport/BikeTransport";

declare var process

let transport: Transport

if (process.argv.includes("--uber")) {
    transport = new CartTransport();
}

if (process.argv.includes("--log")) {
    transport = new MotorcycleTransport();
}

if (process.argv.includes("--bike")) {
    transport = new BikeTransport()
}

if (transport) {
    transport.startTransport()
}