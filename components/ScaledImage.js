import * as React from "react";
import { Image } from "react-native";
import { screenWidth } from "../utils/Constants";

export default function ScaledImage({ uri, width = screenWidth }) {
  const [imageSize, setImageSize] = React.useState({
    actualWidth: 50,
    actualHeight: 50,
  });

  React.useEffect(() => {
    Image.getSize(
      uri,
      (width, height) => {
        setImageSize({ actualWidth: width, actualHeight: height });
      },
      (errorMsg) => {
        console.log(errorMsg);
      }
    );
  }, [uri]);

  return (
    <Image
      style={{
        width,
        height: (width * imageSize.actualHeight) / imageSize.actualWidth,
      }}
      source={{ uri }}
    />
  );
}
