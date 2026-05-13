/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  let km = parseFloat(distancia.value);
  let estaRegistrada = registrada.value;
  let precio = 0;
  
 
  if (km <= 3) {
      if (estaRegistrada == "si") {
          precio = 753.74;
     
      }
  } else if (km <= 3) {
      if (estaRegistrada == "no") {
          precio = 1198.45;
      } 
  } else if (km <= 3) {
      if (estaRegistrada == "tarifa social") {
          precio = 339.18;
      } else {
          precio = 708.01;
      }
  } else if (km <= 27) {
      if (estaRegistrada == "si") {
          precio = 477.17;
      } else {
          precio = 758.70;
      }
  } else {
     
      if (estaRegistrada == "si") {
          precio = 508.83;
      } else {
          precio = 809.04;
      }
  }
  

  tarifa.innerText = "El valor del boleto es: $" + precio;


tarifa.innerText = "El valor del boleto es: $" + precio.toFixed(2);
});

boton.addEventListener("click", () => {
    let km = parseFloat(distancia.value);
    let noEstaRegistrada = registrada.value;
    let precio = 0;
    
   
    if (km <= 3) {
        if (noEstaRegistrada == "no") {
            precio = 371.13;
        } else {
            precio = 590.10;
        }
    } else if (km <= 6) {
        if (estaRegistrada == "si") {
            precio = 413.44;
        } else {
            precio = 657.37;
        }
    } else if (km <= 12) {
        if (estaRegistrada == "si") {
            precio = 445.29;
        } else {
            precio = 708.01;
        }
    } else if (km <= 27) {
        if (estaRegistrada == "si") {
            precio = 477.17;
        } else {
            precio = 758.70;
        }
    } else {
       
        if (estaRegistrada == "si") {
            precio = 508.83;
        } else {
            precio = 809.04;
        }
    }
    
  
    tarifa.innerText = "El valor del boleto es: $" + precio;
  
  
  tarifa.innerText = "El valor del boleto es: $" + precio.toFixed(2);
  });

