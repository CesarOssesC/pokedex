$("#main_card").hide()

function buscarPokemon() {
    $("#main_card").show()
    nombre_pokemon = $("#txt-busqueda").val()
    fetch("https://pokeapi.co/api/v2/pokemon/" + nombre_pokemon)
        .then(respuesta => respuesta.json())
        .then(datos => {
            nueva_etiqueta = `
            <img src="${datos.sprites.front_default}">
        `
            $("#pokemon_image").attr("src", datos.sprites.other.dream_world.front_default)

            $("#nombre-pokemon").text(datos.species.name)

            $(".card-text").html(`
            <p>
            N°: ${datos.id} 
            <br> 
            Tipo: ${datos.types[0].type.name}
            <br>
            Altura: ${datos.height}
            <br>
            Peso: ${datos.weight}
            <br>
            Ataques: ${datos.moves[0].move.name}, ${datos.moves[1].move.name}, ${datos.moves[2].move.name}, ${datos.moves[3].move.name}, ${datos.moves[4].move.name}
            <br>
            </p>
            `)
        $("#txt-busqueda").hide()
        $("#btn-buscar").hide()

            
        
        
        })
        .catch(error => console.log(error))

}