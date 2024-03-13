// Función para determinar cuánto tiempo lleva mezclar un jugo
const tiempoParaMezclarJugo = jugo => {
    let tiempo = 0;
    while (true) {
        switch(jugo) {
            case 'Pure Strawberry Joy':
                tiempo = 0.5;
                break;
            case 'Energizer':
            case 'Green Garden':
                tiempo = 1.5;
                break;
            case 'Tropical Island':
                tiempo = 3;
                break;
            case 'All or Nothing':
                tiempo = 5;
                break;
            default:
                tiempo = 2.5;
                break;
        }
        break; 
    }
    return tiempo;
}

// Función para reponer el suministro de rodajas de lima
function limasACortar(rodajasNecesarias, limasDisponibles) {
    let totalRodajas = 0;
    let limasNecesarias = 0;
    let i = 0;
    while (totalRodajas < rodajasNecesarias && i < limasDisponibles.length) {
        let rodajasPorLima;
        switch(limasDisponibles[i]) {
            case "pequeña":
                rodajasPorLima = 6;
                break;
            case "mediana":
                rodajasPorLima = 8;
                break;
            case "grande":
                rodajasPorLima = 10;
                break;
        }
        totalRodajas += rodajasPorLima;
        limasNecesarias++;
        i++;
    }
    return limasNecesarias;
}

// Función para terminar el turno y obtener los pedidos restantes
function pedidosRestantes(minutosRestantes, pedidos) {
    let pedidosPendientes = [];
    let i = 0;
    while (i < pedidos.length) {
        let tiempoParaMezclar = tiempoParaMezclarJugo(pedidos[i]);
        if (tiempoParaMezclar <= minutosRestantes) {
            minutosRestantes -= tiempoParaMezclar;
        } else {
            pedidosPendientes = pedidos.slice(i);
            break;
        }
        i++;
    }
    return pedidosPendientes;
}

console.log(`Tiempo para mezclar Pure Strawberry Joy: ${tiempoParaMezclarJugo('Pure Strawberry Joy')} minutos`);
console.log(`Cantidad de limas a cortar: ${limasACortar(30, ['pequeña', 'mediana', 'grande'])}`);
console.log(`Pedidos pendientes: ${pedidosRestantes(3, ['Pure Strawberry Joy', 'Energizer', 'Tropical Island'])}`);

