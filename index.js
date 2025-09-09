const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((opera) => displayLesson(opera.categories));
};

// category_name: "Fruit Tree";
// id: 1;
// small_description: "Trees that bear edible fruits like mango, guava, and jackfruit.";
const loadCard = (id) => {
  // console.log(id);

  const url = `https://openapi.programming-hero.com/api/category/1 `;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLavalCard(data.plants));
};
const displayLavalCard = (cards) => {
  // console.log(cards);
  const cardContainer = document.getElementById("main-section");
  cardContainer.innerHTML = "";
  cards.forEach((card) => {
    console.log(card);

    // category: "Fruit Tree";
    // description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.";
    // id: 1;
    // image: "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg";
    // name: "Mango Tree";
    // price: 500;

    const clickCard = document.createElement("div");
    clickCard.innerHTML = `
        <div class="card bg-base-100 md:w-96 shadow-sm w-11/12 mx-auto ">
  <figure class="px-5 pt-5">
    <img class="rounded-xl w-[100%] h-[300px]"
      src="${card.image}"
      /> 
  </figure>
  <div class="p-6 space-y-3">
    <h2 class="card-title text-3xl">${card.category}</h2>
    <p>${card.description}</p>
        <div class="flex justify-between items-center w-[100%]">
            <p><span class="border-1 border-gray-300 rounded-2xl px-1 text-[#15803d] bg-[#dcfce7]">${card.name}</span></p>
            <p><span class="text-2xl font-[600] text-[#15803d]">৳${card.price}</span></p>
        </div>
      <button class="btn btn-secondary rounded-3xl w-[100%] bg-[#15803d] border-none text-[#fffff]">
            Add to Cart
          </button>
  </div>
  </div>
        `;
    cardContainer.append(clickCard);
  });
};

const displayLesson = (lessons) => {
  //   console.log(lessons);
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button onclick="loadCard('${lesson.id}')"
        class="btn rounded-3xl w-[200px] bg-[#cff0dc] border-none text-xl text-[#15803d]">
  ${lesson.category_name}
</button>
    `;
    levelContainer.append(btnDiv);
  }
};

loadLessons();

// category: "Fruit Tree";
// description: "A hardy fruit tree that grows in various climates, yielding guavas packed with Vitamin C. Its low maintenance nature makes it a favorite for home gardens.";
// id: 2;
// image: "https://i.ibb.co.com/WNbbx3rn/guava-min.jpg";
// name: "Guava Tree";
// price: 350;

const mainCard = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((main) => main.json())
    .then((data) => displayMainCard(data.plants));
};

const displayMainCard = (mainCard) => {
  //   console.log(mainCard);
  const displayCard = document.getElementById("main-section");
  displayCard.innerHTML = "";

  for (const card of mainCard) {
    const mainSection = document.createElement("div");
    mainSection.innerHTML = `
    <div class="card bg-base-100 md:w-96 shadow-sm w-11/12 mx-auto md:h-[500px]">
  <figure class="px-5 pt-5">
    <img class="rounded-xl w-[100%] md:h-[400px]"
      src="${card.image}"
      /> 
  </figure>
  <div class="p-6 space-y-3">
    <h2 class="card-title text-3xl">${card.category}</h2>
    <p>${card.description}</p>
        <div class="flex justify-between items-center w-[100%]">
            <p><span class="border-1 border-gray-300 rounded-2xl px-1 text-[#15803d] bg-[#dcfce7]">${card.name}</span></p>
            <p><span class="text-2xl font-[600] text-[#15803d]">৳${card.price}</span></p>
        </div>
      <button class="btn btn-secondary rounded-3xl w-[100%] bg-[#15803d] border-none text-[#fffff]">
            Add to Cart
          </button>
  </div>
  </div>
    `;
    displayCard.append(mainSection);
  }
};
mainCard();

