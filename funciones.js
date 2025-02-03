 
        function verificaEdad(){
            const mayoriaEdad =18; /** para declarar una constante que no va a cambiar**/
            let edad = prompt('Dime tu edad');
            if (edad<mayoriaEdad){
                 document.write ("<h2>No puedes entrar a este sitio</h2>");
                 }  else {
                document.write("<h2>Bienvenido</h2>")
                }
            }
           function mediaDosNumeros(a,b){
               let suma=a+b;
               return  suma/2;
           }
           function calculaMedia(){
            let n1= prompt("Dime el primer numero")
            let n2= prompt("Dime el segundo numero")
            if (isNaN(n1)|| isNaN(n2)){
                alert("Soo se aceptan numeros")
            } else{
            let media= mediaDosNumeros(Number(n1),Number(n2));
            alert("La media de"+n1 +" y "+n2 +" es "+media)
           }
        }   
    
        function tablaMultiplicar(){
            let numero=prompt("Dime el numero que quieres la tabla");
            let cadena='';
            for(let i=0;i<=10;i++){
                cadena += numero+"*"+i+"= "+numero*i+"<br>"
            }
            document.write(cadena)
        }
        let alineación =['Raúl',' Benzemá',' Butragueño','Figo'];
    
        function posicion(){
            let numero = prompt("Dime el  número")
            if(numero>alineación.length || numero<1){
                alert('Posición no ocupada')
               
            }else {
            alert('En la posición '+numero+"juega "+alineación[numero-1]);
            }
        }
        function imprimeAlineacion(){
            let cadena='';
            for(let i=0;i<alineación.length;i++){
                cadena += i+" "+alineación[i]+"<br>";
               
    
    
            }
            document.write(cadena);
        }
        function claculaAreaTriangulo(b,a){
            return (b*a)/2
        }


        
        function AreaTriangulo(){
            let base =prompt("Dime el lado del triangulo")
            let altura =prompt("Dime la altura del triangulo")
            let media =claculaAreaTriangulo(base,altura)
            alert('El area es'+claculaAreaTriangulo(base,altura))
        }
        function areaTrianguloInputs(){
            let base=document.getElementById("base");
            let altura= document.getElementById("altura");
            baseNumero=base.value;
            alturaNumero= altura.value;
            let area= claculaAreaTriangulo(baseNumero,alturaNumero)
            let resultado=document.getElementById("resultado");
            resultado.innerHTML="El area es "+area;
        }
       function cambiarImagen(){
        let miImagen=document.getElementById("foto")
        miImagen.src= "imagenes/descarga (2).jpeg"
        }
        function cambiaTitulo(){
            let miTitulo=document.getElementById("titulo");
            miTitulo.style.fontSize="4em";
            miTitulo.style.color="red";
            miTitulo.style.fontFamily="Arial";
        } 
