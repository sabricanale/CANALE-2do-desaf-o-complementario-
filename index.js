
class Estudiante{
    constructor(nombre, nota1, nota2){
        this.nombre = nombre.toUpperCase()
        this.nota1 = nota1
        this.nota2 = nota2
    }    
}
function agregarEstudiantes() {
    let cantidadEstudiantes = parseInt(prompt("¿Cuántos estudiantes necesita agregar? "))
    let estudiantes = []
    if(cantidadEstudiantes > 0){        
        for(let i = 0; i < cantidadEstudiantes; i++){ 
            let nombre = prompt ("Ingrese nombre y apellido del estudiante: ")
            if(nombre !== ""){
                let nota1 = parseInt(prompt ("Ingrese la primera nota: "))
                if(nota1 > 0 && nota1 <= 10){
                    let nota2 = parseInt(prompt ("Ingrese la segunda nota: "))  
                    if(nota2>0 && nota2<=10){
                        let promedio = parseFloat(alert("El promedio obtenido de " + nombre + " es: " + ((nota1+nota2)/2)))
                        estudiantes.push(nombre)
                    }  
                    else{
                        alert("No ingresó correctamente la información, vuelva a intentarlo")   
                    break    
                    }
                }
                else{
                    alert("No ingresó correctamente la información, vuelva a intentarlo")   
                    break             
                }            
            }
            else{
                alert("No ingresó correctamente la información, vuelva a intentarlo")   
                break                 
            }
        }
            alert("Hay " + estudiantes.length + " estudiantes registrados y sus nombres son: "+ estudiantes)
            const masEstudiantes = estudiantes.concat(["Juan Perez", "Marta López"])
            alert("La lista actualizada de estudiantes es: " + masEstudiantes)
            alert("La lista nuevamente actualizada es: " + masEstudiantes.reverse()) 
        }       
    
    else{
        alert("No ingresó un número válido de estudiantes. Presiones F5 para continuar")
    } 
}
agregarEstudiantes()
