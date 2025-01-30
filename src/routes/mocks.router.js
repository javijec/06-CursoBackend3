import { Router } from "express";
import mockingPet from "../utils/mockingpet.js";
import mockingUser from "../utils/mockinguser.js";
import { usersService, petsService } from "../services/index.js";

const router = Router();

router.get("/mockingpets", (req, res) => {
  const mockingPets = mockingPet(3);
  res.status(200).json(mockingPets);
});

router.get("/mockingusers", (req, res) => {
  const mockingUsers = mockingUser(3);
  res.status(200).json(mockingUsers);
});

router.post("/generateData", async (req, res) => {
  const mockingPets = mockingPet(req.body.pets);
  const mockingUsers = mockingUser(req.body.users);

  try {
    const savedPets = await Promise.all(mockingPets.map((pet) => petsService.create(pet)));
    const savedUsers = await Promise.all(mockingUsers.map((user) => usersService.create(user)));

    res.status(200).json({ pets: savedPets, users: savedUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
