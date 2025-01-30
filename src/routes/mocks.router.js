import { Router } from "express";
import mockingPet from "../utils/mockingpet.js";
import mockingUser from "../utils/mockinguser.js";

const router = Router();

router.get("/mockingpets", (req, res) => {
  const mockingPets = mockingPet(3);
  res.status(200).json(mockingPets);
});

router.get("/mockingusers", (req, res) => {
  const mockingUsers = mockingUser(3);
  res.status(200).json(mockingUsers);
});

export default router;
