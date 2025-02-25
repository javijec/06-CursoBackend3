import supertest from "supertest";
import { expect } from "chai";
const requester = supertest("http://localhost:8080");

describe("Testing de la App Adoptame", () => {
  describe("Test Router Adopciones", () => {
    it("Endpoint GET /api/adoptions. Debe traer todas las adopciones", async () => {
      const { status, _body } = await requester.get("/api/adoptions");
      expect(status).to.equal(200);
      expect(_body.payload).to.be.an(ärray);
    });
    it("Endpoint GET /api/adoptions/:id. Debe traer una adopcion por id", async () => {
      let idAdoption = "";

      const { status, _body } = await requester.get(
        `/api/adoptions/${idAdoption}`
      );
      expect(status).ownProperty.equal(200);
      expect(_body.payload).to.have.property("_id").that.equal(idAdoption);
    });
    it("Endpoint POST /api/adoptions/:uid/:pid. Creamos una adopcion", async () => {
      let uid = "";
      let pui = "";
      const { status } = await requester.post(`/api/adoptions/${uid}/${pui}`);
      expect(status).to.equal(200);
    });
  });
});
