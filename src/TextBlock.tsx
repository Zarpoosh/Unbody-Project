import { useEffect } from "react";
import "./App.css";
import { Unbody } from "@unbody-io/ts-client";

function TextBlock() {
  // const [text, setText] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = new Unbody({
          apiKey: "4BA4593AC7E0C01A9D79CBB69040FB38",
          projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
        });

        const {
          data: { payload },
        } = await u.get.googleDoc.search
          .about("success")
          .select( "title","text")
          .exec();

        console.log(payload);
      } catch (err) {
        console.error("Error fetching image data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <p>{text}</p> */}
      <p>{}</p>
    </>
  );
}

export default TextBlock;

// const {payload: gDocs} = await u.get.googleDoc
