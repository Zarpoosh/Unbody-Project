import { useEffect, useState } from "react";
import { Unbody } from "@unbody-io/ts-client";

function ImageBlock() {
  const [imageList, setImageList] = useState<ImageBitmap[]>([]);
  const [userInput, setUserInput] = useState(0); // Initial width
  const [selectedImage, setSelectedImage] = useState<ImageBitmap | null>(null);

  useEffect(() => {
    // Empty dependency array to avoid infinite loops on userInput changes
    const fetchData = async () => {
      try {
        const u = new Unbody({
          apiKey: "4BA4593AC7E0C01A9D79CBB69040FB38",
          projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
        });

        const {
          data: { payload },
        } = await u.get.imageBlock.select("width", "url").exec();

        setImageList(payload); // Update imageList state with fetched images
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(event.target.value, 10); // Parse input to number
    if (!isNaN(width)) { // Check if input is a valid number
      setUserInput(width);
    }
  };

  const handleSearch = async () => {
    const matchingImage = imageList.find((img) => img.width === userInput);
    setSelectedImage(matchingImage || null); // Set selectedImage or null if not found
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
        {selectedImage && ( // Check if selectedImage is available
          <img
            src={selectedImage.url}
            alt=""
            style={{ width: `${userInput}px` }} // Set image width based on userInput
          />
        )}
      </div>
    </>
  );
}

export default ImageBlock;
