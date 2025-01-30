import { faker } from "@faker-js/faker";

const createPet = () => {
  const pet = {};
  pet.id = faker.database.mongodbObjectId();
  pet.name = faker.animal.petName();
  pet.specie = faker.animal.type();
  pet.adopted = false;
  return pet;
};

const mockingPet = (n) => {
  const mockingPets = [];
  for (let i = 0; i < n; i++) {
    mockingPets.push(createPet());
  }
  return mockingPets;
};

export default mockingPet;
