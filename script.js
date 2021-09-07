window.onload = async function () {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  for (let i = 1; i <= 151; i++) {
    let link = `${url}${i}`;

    let pokemon = await fetch(link).then((e) => e.json());

    //Div that will contain the specific pokemon
    $(".main").append(`<div class="pokemon" id='${pokemon.name}'>
     </div>`);

    //Name
    var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    $(`div#${pokemon.name}`).append(
      `<h1 class='toggle ${pokemon.name}'>${name}</h1>`
    );

    //Image
    $(`div#${pokemon.name}`).append(
      `<img src=${pokemon.sprites.front_default}>`
    );

    //ID
    $(`div#${pokemon.name}`).append(
      `<p> <strong> ID: </strong> ${pokemon.id}</p>`
    );

    //Div that will contain the hidden content
    $(`div#${pokemon.name}`).append(
      `<div class='hidden ${pokemon.name}'></div>`
    );

    //Hide content
    $(`.hidden.${pokemon.name}`).hide();

    //Show content
    $(`h1.toggle.${pokemon.name}`).click(() => {
      $(`.hidden.${pokemon.name}`).toggle();
    });

    //Abilities
    $(`.hidden.${pokemon.name}`).append(
      `<p > <strong> Abilities: </strong></p> <p class='${pokemon.name} abilities'> </p>`
    );

    pokemon["abilities"].map((e) => {
      $(`.${pokemon.name}.abilities`).append(` ${e.ability.name}`);
    });

    //Types
    $(`.hidden.${pokemon.name}`).append(`<p> <strong> Types: </strong></p>`);
    pokemon["types"].map((e) => {
      $(`.hidden.${pokemon.name}`).append(`<p> ${e.type.name} </p>`);
    });

    //Stats
    $(`.hidden.${pokemon.name}`).append(`<p><strong>Stats:</strong></p>`);
    pokemon["stats"].map((e) => {
      $(`.hidden.${pokemon.name}`).append(
        `<p> <strong> ${e.stat.name}:</strong> ${e.base_stat} </p>`
      );
    });

    //Profile
    $(`.hidden.${pokemon.name}`).append(
      `<p> <strong> Weight: </strong> ${pokemon.weight} lb </p>`
    );
    $(`.hidden.${pokemon.name}`).append(
      `<p> <strong> Height: </strong> ${pokemon.height} cm </p>`
    );

    //Moves
    $(`.hidden.${pokemon.name}`).append(`<p><strong>Moves:</strong></p>`);
    pokemon["moves"].map((e) => {
      $(`.hidden.${pokemon.name}`).append(`<p> ${e.move.name} </p>`);
    });
  }
};

$(".search").keyup(() => {

  var value = $(".search").val().toLowerCase()

  $(".main").children('.pokemon').each((index,element)=>{
    if(!$(element).attr('id').startsWith(value)){
      $(element).hide();
    }
    else{
      $(element).show();
    }
    
  })
});
