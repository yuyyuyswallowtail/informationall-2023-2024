import { ReactNode } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ZoomImage = ({ children }: { children: ReactNode }) => {
  return <Zoom>{children}</Zoom>;
};

export default ZoomImage;
