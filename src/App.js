import InputForm from "./components/InputForm";

let formData = [
  {
    id: "recipeInfoSection",
    name: "Recipe Info",
    hint: "",
    fields: [
      {
        id: "name",
        name: "Recipe Name",
        hint: "The name of the recipe",
        type: "text",
        placeholder: "Slow-Cooked Russet Potatoes",
      },
      {
        id: "servings",
        name: "Servings",
        hint: "How many people the recipe will serve",
        type: "text",
        placeholder:
          "4-6 servings",
      },
      
      {
        id: "source",
        name: "Source",
        hint: "The name of the recipe's original source",
        type: "text",
        placeholder:
          "Food Network",
      },

      {
        id: "source_url",
        name: "Source URL",
        hint: "A link to the recipe's original source",
        type: "text",
        placeholder:
          "https://foodnetwork.com/recipes/slow-cooker-russet-potatoes-recipe-20897",
      },

      {
        id: "prep_time",
        name: "Prep Time",
        hint: "How long the recipe will take to prepare (pre-cooking steps)",
        type: "text",
        placeholder:
          "10 mins",
      },

      {
        id: "cook_time",
        name: "Cook Time",
        hint: "How long the recipe will take to cook (cooking steps)",
        type: "text",
        placeholder:
          "30 mins",
      },

    ],
  },
  {
    id: "ingredientsSection",
    name: "Ingredients",
    hint: "",
    fields: [
      {
        id: "ingredients",
        name: "Ingredients",
        hint: "",
        type: "textarea",
        rows: 6,
        placeholder: "2 lbs russet potatoes",
      },
    ],
  },
  {
    id: "directionsSection",
    name: "Directions",
    hint: "",
    fields: [
      {
        id: "directions",
        name: "Directions",
        hint: "",
        type: "textarea",
        rows: 6,
        placeholder: "1. Skin the potatoes.",
      },
    ],
  },
];
function App() {
  return (
    <>
      <div className="m-6 md:m-24">
        <div className="my-16">
          <h1 className="text-3xl font-bold">📝 Recipe to YAML</h1>
          <p className="my-2">
            This tool allows you to quickly create a YAML file to import into
            Paprika.
          </p>
        </div>
       <InputForm formData={formData} />
      </div>
      <footer className="bg-white my-8">
        <p className="text-base text-center text-gray-400">
          Feb 7, 2022 | Made by {" "}
          <a className="text-indigo-500" href="https://quartzic.co">
            Nathan Goller-Deitsch
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
