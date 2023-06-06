// TWS Layouts

import "./twb.css";

import {
  Dancing_Script,
  Kanit,
  Orbitron,
  Play,
  Roboto,
} from "next/font/google";

const play = Play({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const dans = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700", "600"],
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const orbit = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "18:DarMode",
  description: "LUDTWSC",
};

/**
 * Renders a layout component that wraps its children inside a section element.
 *
 * @param {React.ReactNode} children - The page or nested layout to be rendered.
 * @return {JSX.Element} A section element containing the passed children.
 */
export default function TwsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={play.className}>
      <section>{children}</section>
    </section>
  );
}
