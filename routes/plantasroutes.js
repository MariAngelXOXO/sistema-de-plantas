import { router } from "express";
import { listarPlantas, criarPlanta, deletarPlanta } from "../controllers/plantascontrollers.js";
import validarPlanta from "../middlewares/validarplantas.js";

const router = router();

router.get("/", listarPlantas);
router.post("/", validarPlanta, criarPlanta);
router.delete("/:id", deletarPlanta);

export default router;