import mockingPet from "../utils/mockingpet.js";
import mockingUser from "../utils/mockinguser.js";
import { usersService, petsService } from "../services/index.js";

const mockingPets = async (req, res) => {
  const mockingPets = mockingPet(3);
  res.send({ status: "success", payload: mockingPets });
};

const mockingUsers = async (req, res) => {
  const mockingUsers = mockingUser(3);
  res.send({ status: "success", payload: mockingUsers });
};

const mocking = async (req, res) => {
  const Pets = mockingPet(req.body.pets);
  const Users = mockingUser(req.body.users);

  try {
    const savedPets = await Promise.all(Pets.map((pet) => petsService.create(pet)));
    const savedUsers = await Promise.all(Users.map((user) => usersService.create(user)));

    res.status(200).json({ status: "success", payload: { pets: savedPets, users: savedUsers } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  mocking,
  mockingPets,
  mockingUsers,
};
