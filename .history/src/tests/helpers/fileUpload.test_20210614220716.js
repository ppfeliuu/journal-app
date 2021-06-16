import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "sample",
  api_key: "874837483274837",
  api_secret: "a676b67565c6767a6767d6767f676fe1",
});

describe("test FileUpload", () => {
  test("should load a file an return url", async () => {
    const resp = await fetch(
      "https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
    );
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");
  });

  test("should load a file an return error", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
