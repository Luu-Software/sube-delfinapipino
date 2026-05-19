/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
    let EstadoValor = registrada.value;
    let KilometrosValor = Number(distancia.value);
    let TransporteValor = tipodeColectivo.value;
    
    if (TransporteValor === "C.A.B.A") {
      if (KilometrosValor >= 0 && KilometrosValor <= 3) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$753,74";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$339,18";
        } else {
          tarifa.innerText = "$1.198,45";
        }
      } else if (KilometrosValor > 3 && KilometrosValor <= 6) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$837,52";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$376,88";
        } else {
          tarifa.innerText = "$1.331,66";
        }
      } else if (KilometrosValor > 6 && KilometrosValor <= 12) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$902,04";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$405,91";
        } else {
          tarifa.innerText = "$1.434,24";
        }
      } else if (KilometrosValor > 12 && KilometrosValor <= 27) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$966,61";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$434,97";
        } else {
          tarifa.innerText = "$1.536,91";
        }
      } else if (KilometrosValor > 27) {
        tarifa.innerText = "ERROR";
      }
    }
  
    if (TransporteValor === "Provincia") {
      if (KilometrosValor >= 0 && KilometrosValor <= 3) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$968,57";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$435,85";
        } else {
          tarifa.innerText = "$1.937,14";
        }
      } else if (KilometrosValor > 3 && KilometrosValor <= 6) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$1.089,64";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$490,33";
        } else {
          tarifa.innerText = "$2.179,28";
        }
      } else if (KilometrosValor > 6 && KilometrosValor <= 12) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$1.210,71";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$544.81";
        } else {
          tarifa.innerText = "$2.421,42";
        }
      } else if (KilometrosValor > 12 && KilometrosValor <= 27) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$1.452,85";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$653.78";
        } else {
          tarifa.innerText = "$ 2.905,70";
        }
      } else if (KilometrosValor > 27) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$1.708,07";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$768.63";
        } else {
          tarifa.innerText = "$3.416,14";
        }
      }
    }
  
    if (TransporteValor === "Nacional") {
      if (KilometrosValor >= 0 && KilometrosValor <= 3) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$700";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$315";
        } else {
          tarifa.innerText = "$1.113";
        }
      } else if (KilometrosValor > 3 && KilometrosValor <= 6) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$779,78";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$350,90";
        } else {
          tarifa.innerText = "$1.239,85";
        }
      } else if (KilometrosValor > 6 && KilometrosValor <= 12) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$839,86";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$377,93";
        } else {
          tarifa.innerText = "$1.335,38";
        }
      } else if (KilometrosValor > 12 && KilometrosValor <= 27) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$899,99";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$404,99";
        } else {
          tarifa.innerText = "$1.430,98";
        }
      } else if (KilometrosValor > 27) {
        if (EstadoValor === "si") {
          tarifa.innerText = "$959,71";
        } else if (EstadoValor === "social") {
          tarifa.innerText = "$431,86";
        } else {
          tarifa.innerText = "$1.525,94";
        }
      }
    }
  
  });
  