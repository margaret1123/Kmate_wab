import { PromoImageHydrator } from "../promo-image-hydrator";
import { SciNestHome } from "../scinest-home";

export default function EnglishHomePage() {
  return (
    <>
      <PromoImageHydrator locale="en" />
      <SciNestHome locale="en" />
    </>
  );
}
