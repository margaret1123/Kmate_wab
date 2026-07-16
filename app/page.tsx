import { PromoImageHydrator } from "./promo-image-hydrator";
import { SciNestHome } from "./scinest-home";

export default function HomePage() {
  return (
    <>
      <PromoImageHydrator locale="zh" />
      <SciNestHome locale="zh" />
    </>
  );
}
