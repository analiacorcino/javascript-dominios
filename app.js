let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensiones = [".com", ".net", ".us", ".io"];

// el loop tiene 3 parametros inicializacion ; condición ; actualización
// thegreatjogger.com
//  thegreatracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com
// ourbigracoon.com

for (let pronombre = 0; pronombre < pronoun.length; pronombre++) {
    for (let adjetivo = 0; adjetivo < adj.length; adjetivo++) {
        for (let nombre = 0; nombre < noun.length; nombre++) {
            for (let dominio = 0; dominio < extensiones.length; dominio++) {
                console.log(
                    pronoun[pronombre].concat(
                        adj[adjetivo],
                        noun[nombre],
                        extensiones[dominio]
                    )
                );
            }
        }
    }
}