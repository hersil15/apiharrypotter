const apiUrl = 'https://hp-api.onrender.com/api/characters';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const gryffindorList = document.getElementById('gryffindor-characters');
    const hufflepuffList = document.getElementById('hufflepuff-characters');
    const ravenclawList = document.getElementById('ravenclaw-characters');
    const slytherinList = document.getElementById('slytherin-characters');

     data.forEach(character => {
      const li = document.createElement('li');
      li.classList.add('character-card');
      li.innerHTML = `
        <h2>${character.name}</h2>
        <p><strong>Casa:</strong> ${character.house}</p>
        <p><strong>Actor:</strong> ${character.actor}</p>
        <p><strong>Fecha de nacimiento:</strong> ${character.dateOfBirth}</p>
        <p><strong>Especie:</strong> ${character.species}</p>
        <p><strong>Patronus:</strong> ${character.patronus}</p>
        <p><strong>Ancestro:</strong> ${character.ancestry}</p>
            `;
          switch (character.house) {
            case 'Gryffindor':
              gryffindorList.appendChild(li);
              break;
            case 'Hufflepuff':
              hufflepuffList.appendChild(li);
              break;
            case 'Ravenclaw':
              ravenclawList.appendChild(li);
              break;
            case 'Slytherin':
              slytherinList.appendChild(li);
              break;
            default:
              break;
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
