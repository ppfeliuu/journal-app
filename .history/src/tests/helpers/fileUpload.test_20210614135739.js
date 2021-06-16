import { fileUpload } from "../../helpers/fileUpload";

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

    expect(typeof url).toBe(null);
  });
});
