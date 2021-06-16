export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dwdyzkuwy/upload";

  const formData = new FormData();

  formData.append("upload_preset", "journal-app");
};
