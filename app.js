let ventas = [];
    let totalRecaudado = 0;

    function registrarVenta() {
      const nombre = document.getElementById("nombre").value;
      const valor = parseFloat(document.getElementById("valor").value);
      const cantidad = parseInt(document.getElementById("cantidad").value);

      if (nombre && valor >= 0 && cantidad > 0) {
        const venta = { nombre, valor, cantidad };
        ventas.push(venta);
        totalRecaudado += valor * cantidad;
        mostrarVentasRegistradas();
        document.getElementById("nombre").value = "";
        document.getElementById("valor").value = "";
        document.getElementById("cantidad").value = "";
      } else {
        alert("Por favor, ingrese valores válidos.");
      }
    }

    function calcularCostoTotal() {
      const nombre = document.getElementById("nombre").value;
      const valor = parseFloat(document.getElementById("valor").value);
      const cantidad = parseInt(document.getElementById("cantidad").value);

      if (nombre && valor >= 0 && cantidad > 0) {
        const costoTotal = valor * cantidad;
        document.getElementById("costoTotal").textContent = `Costo Total: $${costoTotal.toFixed(2)}`;
      } else {
        alert("Por favor, ingrese valores válidos.");
      }
    }

    function calcularTotalRecaudado() {
      document.getElementById("totalRecaudado").textContent = `Total Recaudado: $${totalRecaudado.toFixed(2)}`;
    }

    function mostrarVentasRegistradas() {
      let ventasHTML = "<h2>Ventas Registradas:</h2>";
      ventas.forEach(venta => {
        ventasHTML += `<p>Nombre: ${venta.nombre}, Valor: $${venta.valor}, Cantidad: ${venta.cantidad}</p>`;
      });
      document.getElementById("ventasRegistradas").innerHTML = ventasHTML;
    }