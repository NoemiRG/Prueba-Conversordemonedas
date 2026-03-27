
const cbMoneda = document.getElementById('moneda')
const InputMonto = document.getElementById('monto')
const btnConvertir= document.getElementById('convertir')
const resultado = document.getElementById('resultado')



const getMonedas = async () => {
    try {
        const res = await fetch('https://mindicador.cl/api/');
        const data = await res.json();
        let monedas ={
            dolar: data.dolar.valor,
            euro: data.euro.valor,
            uf: data.uf.valor
        }
        return monedas
    } catch (error) {
        console.log(error);
    }
}


btnConvertir.addEventListener('click', async () => {
    const opciones = await getMonedas();
    const monedaSeleccionada = cbMoneda.value
    const monto = InputMonto.value

    if (monedaSeleccionada== 'dolar') {
    resultado.textContent = (monto/opciones.dolar).toFixed(2) + " USD"
    } else if (monedaSeleccionada == 'euro') {
        resultado.textContent = (monto/opciones.euro).toFixed(2) + " EUR"
    } else if (monedaSeleccionada == 'uf') {
        resultado.textContent = (monto/opciones.uf).toFixed(2)   + " UF"
    }
});

