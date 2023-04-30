import Button from "@components/button";
import CardHover from "@components/cardHover";
import CTAStyleWrapper from "./CTA.style";

const CTA = () => {
  return (
    <CTAStyleWrapper>
      <div className="container">
        <div className="cta-area text-center">
          <h2 className="title">
            Apply for your NFT project <br />
            Listing
          </h2>
          <div className="dsc">
            If you think that your NFT Project deserves to be listend on our Launchpad then apply below all NFT projects incubated from our Launchpad gets our maximum support!
          </div>
          <Button variant="mint" md href="https://forms.gle/wgWDZ8suwwLoVj1XA">
            Apply For Listing
          </Button>
          <CardHover />
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
