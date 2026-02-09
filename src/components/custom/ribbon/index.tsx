import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

const Ribbon = ({
  props,
}: {
  props: {
    text: string;
    direction: "left" | "right" | "up" | "down" | undefined;
    icon?: ReactNode;
  };
}) => {
  return (
    <section className="z-30 flex w-full p-1 border-2 bg-primary rounded-2xl border-card">
      <Marquee direction={props.direction} autoFill={true}>
        <h1 className="flex items-center gap-4 py-2 mr-4 text-2xl sm:text-3xl md:text-4xl text-card">
          {props.text} {props.icon ? props.icon : null}
        </h1>
      </Marquee>
    </section>
  );
};

export default Ribbon;
